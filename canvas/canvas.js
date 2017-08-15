function start(){
	var element=document.getElementById('canvas');
	canvas=element.getContext('2d');

	/*canvas.fillStyle="#000099";
	canvas.strokeStyle="#990000";*/

	/*var gradient=canvas.createLinearGradient(0,0,10,100);
	gradient.addColorStop(0.5, '#0000FF');
	gradient.addColorStop(1, '#000000');
	canvas.fillStyle=gradient;*/

	/*canvas.beginPath();*/
	/*canvas.moveTo(100,100);
	canvas.lineTo(200,200);
	canvas.lineTo(100,200);
	canvas.clip();
	canvas.beginPath();
	for(f=0; f<300; f=f+10){
		canvas.moveTo(0,f);
		canvas.lineTo(500,f);
	}*/
	/*canvas.arc(100,100,50,0,Math.PI*2, false);*/
	/*var rads=Math.PI/180*45;
	canvas.arc(100,100,50,0,rads, false);*/
	/*canvas.moveTo(50,50);
	canvas.quadraticCurveTo(100,125, 50,200);
	canvas.moveTo(250,50);
	canvas.bezierCurveTo(200,125, 300,125, 250,200);
	canvas.stroke();
	/*canvas.closePath();
	canvas.fill();*/


	/*canvas.strokeRect(100,100,120,120);
	canvas.fillRect(110,110,100,100);
	canvas.clearRect(120,120,80,80);*/
	canvas.beginPath();
	canvas.arc(200,150,50,0,Math.PI*2, false);
	canvas.stroke();
	canvas.lineWidth=10;
	canvas.lineCap="round";
	canvas.beginPath();
	canvas.moveTo(230,150);
	canvas.arc(200,150,30,0,Math.PI, false);
	canvas.stroke();
	canvas.lineWidth=5;
	canvas.lineJoin="miter";
	canvas.beginPath();
	canvas.moveTo(195,135);
	canvas.lineTo(215,155);
	canvas.lineTo(195,155);
	canvas.stroke();
}
window.addEventListener("load", start, false);
