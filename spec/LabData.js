var labdata = {
	name:"Function : Return lv 1",
	steps:[
		{
			name:"Return", 
			content:"ฝึกทดลองสร้าง Function โดยใช้ Return เข้ามาช่วย " ,
			code:"http://learn.picnii.me/contents/31",
			class:"in"
		},

		{
			name:"ขอ input 4 ปุ่ม", 
			content:"สำหรับให้ทำงาน 4 การกระทำ โดย ปุ่ม A คือ หาระยะ ปุ่ม B หาพื้นที่ ปุ่ม C ทำนาย และ ปุ่ม D ดูดวง " ,
			code:"showInput('button', 4);",	
		},
		
		{
			name:"หาระยะทางกับ getDistance(deltaX, deltaY)", 
			content:"สร้าง Function getDistance(dX, dY)หาระยะห่าง(พิสัย) จาก ระห่างด้าน X และ ระยะห่างด้าน Y โดยใช้สูตร รูท2 ของ(dX ยกกำลัง 2 + dY ยกกำลัง 2)" ,
			code:"Math.pow(ฐาน,ยกกำลัง),Math.sqrt(ตัวเลข),return ซักอย่าง, ไม่ควร echo",			 
		},

		{
			name:"พื้นที่ 3 เหลี่ยม กับ getTriangleArea(width, height)", 
			content:"สร้าง function getTriangleArea(width, height) หาพื้นที่ สามเหลี่ยมด้วยสูตร 0.5 x width x height" ,
			code:"return ซักอย่าง, ไม่ควร echo",
		},

		{
			name:"ดูดวงจาก้ชื่อ และ อายุ กับ getHoroscope(name, age)", 
			content:"สร้าง function getHoroscope(name, age) ที่ทำการดูดวง โดยถ้า อายุ มากกว่า 25 จะตอบว่า '{name} is too old' แต่ถ้าไม่ใช่แต่มากกว่า 10 ขวบตอบว่า '{name} is ok' ถ้าเด็กกว่านี้ตอบ '{name} is too young' " ,
			code:"if,return ซักอย่าง, ไม่ควร echo",
		},

		{
			name:"ใช่เลขคู่มั้ย กับ isEvenNumber(number)", 
			content:"สร้าง function isEvenNumber(number) ที่ทำการหาเลขคู่ให้ โดยถ้าnumber เป็นเลขคู่จะให้ค่าว่า จริง(true) ถ้าไม่ใช่จะให้ค่าว่า ไม่จริง (false)" ,
			code:"if,%,return",
		},

		{
			name:"ทำให้ Function ที่สร้างทำงานร่วมกับปุ่ม A B C D", 
			content:"ถ้ากด ปุ่ม A,b,c ให้ prompt มา 2 ครั้ง แล้ว echo ส่วน d ให้ prompt ครั้งเดียว โดยให้ A เรียกใช้ getDistance, B เรียกใช้ getTriangleArea , C เรียก getHoroscope ส่วน D เรียก isEvenNumber " ,
			code:"prompt, Number",
		},


	],
	type:"lab",


}