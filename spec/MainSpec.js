function clearAllInterval()
{
    var interval_id = window.setInterval("", 9999); // Get a reference to the last                                            // interval +1
    for (var i = 1; i < interval_id; i++)
        window.clearInterval(i);
}

describe("Function Animate Timer  ", function() {
  var cmds;
  var animateDone;  

  
  beforeEach(function(){
    $('#output').css('background','white');
    $('#output').html('');
    
    clearItems();
    clearCommands();
    init();
    animateDone  = false;
    cmds = getCommands();
  })

 

  it('have input with  3 button ', function(){
    expect($('#buttonA').length).toBe(1);
    expect($('#buttonB').length).toBe(1);
    expect($('#buttonC').length).toBe(1);
  });

  it('start with sleeping dog pic (img/dog4.jpg)', function(){
    expect($('#item0 img').attr('src')).toEqual('img/dog4.jpg');
  });

  it('doMove() will change a dog pic start like dog1.jpg dog2.jpg dog3.jpg dog1.jpg dog2.jpg dog3.jpg (dont forget /img)', function(){
    doMove();
    expect($('#item0 img').attr('src')).toEqual('img/dog1.jpg');
    doMove();
    expect($('#item0 img').attr('src')).toEqual('img/dog2.jpg');
    doMove();
    expect($('#item0 img').attr('src')).toEqual('img/dog3.jpg');
    doMove();
    expect($('#item0 img').attr('src')).toEqual('img/dog1.jpg');
    doMove();
    expect($('#item0 img').attr('src')).toEqual('img/dog2.jpg');
    doMove();
    expect($('#item0 img').attr('src')).toEqual('img/dog3.jpg');
  });

  it('doAnimate will doMove every 1/10 sec', function(){
    runs(function(){
      doAnimate();
      animateDone = false;
      setTimeout(function(){
        animateDone = true;
      }, 100);
    });

    waitsFor(function(){

      return animateDone;
    });

    runs(function(){
      expect($('#item0 img').attr('src')).toEqual('img/dog1.jpg');
      animateDone = false;
      setTimeout(function(){
        animateDone = true;
      }, 100);
    });

    waitsFor(function(){

      return animateDone;
    });

    runs(function(){
      expect($('#item0 img').attr('src')).toEqual('img/dog2.jpg');
      animateDone = false;
      setTimeout(function(){
        animateDone = true;
      }, 100);
    });

    waitsFor(function(){

      return animateDone;
    });

    runs(function(){
      expect($('#item0 img').attr('src')).toEqual('img/dog3.jpg');
      animateDone = false;
      setTimeout(function(){
        animateDone = true;
      }, 100);
    });

    waitsFor(function(){

      return animateDone;
    });

    runs(function(){
      expect($('#item0 img').attr('src')).toEqual('img/dog1.jpg');
      animateDone = false;
      if(typeof(stopAnimate) =='function')
        stopAnimate();
    });

  });

  it('stopAnimate() should stop the animation ', function(){
    clearAllInterval();
    expect($('#item0 img').attr('src')).toEqual('img/dog4.jpg');
    
  });

  it('oneTimeOut() should display img/dog2.jpg for 1/2 sec before switch back', function(){
    oneTimeOut();
   runs(function(){
      expect($('#item0 img').attr('src')).toEqual('img/dog2.jpg');
      animateDone = false;
      setTimeout(function(){
        animateDone = true;
      }, 500);
    });

    waitsFor(function(){

      return animateDone;
    });

    runs(function(){
      expect($('#item0 img').attr('src')).toEqual('img/dog4.jpg');
    });

  });
  
});