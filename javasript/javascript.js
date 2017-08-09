function showalert(){
	alert('you clicked');
}
function toclick(){
	/*document.getElementsByTagName('p')[0].onclick=showalert;*/
	/*document.querySelector("#main p:first-child").onclick=showalert;*/
	var list=document.querySelectorAll("#main p");
	list[0].onclick=showalert
}
window.onload=toclick;
