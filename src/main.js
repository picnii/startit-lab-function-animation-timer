var img;
var myInterval;
var count ;

function init()
{
	count = 0;
	img = addPicture('img/dog4.jpg');
	showInput('button', 3)
}

function doAnimate()
{
	myInterval = setInterval(doMove, 100);
}

function stopAnimate()
{
	clearInterval(myInterval);
}

function oneTimeOut()
{
	changePicture(img, 'img/dog2.jpg');
	setTimeout(function(){
		changePicture(img, 'img/dog4.jpg');
	}, 500);	
}

function doMove()
{
	if(count % 3 == 0)
		changePicture(img, 'img/dog1.jpg');
	else if(count % 3 == 1)
		changePicture(img, 'img/dog2.jpg');
	else
		changePicture(img, 'img/dog3.jpg');

	count++;
	count = count % 3;
	console.log('count:'+count)
}


function onSubmitA()
{
	doAnimate();
}

function onSubmitB()
{
	stopAnimate();
	changePicture(img, 'img/dog4.jpg')
}

function onSubmitC()
{
	oneTimeOut();
}