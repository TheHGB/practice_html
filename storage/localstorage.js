function start(){
	var button=document.getElementById('save');
	button.addEventListener('click', newitem, false);
	show();
}
function newitem(){
	var key=document.getElementById('key').value;
	var value=document.getElementById('text').value;
	localStorage.setItem(key,value);
	show();
	document.getElementById('key').value='';
	document.getElementById('text').value='';
}
function show(){
	var databox=document.getElementById('databox');
	databox.innerHTML='';
	for(var f=0;f<localStorage.length;f++){
		var key=localStorage.key(f);
		var value=localStorage.getItem(key);
		databox.innerHTML+='<div>'+key+' - '+value+'</div>';
	}
}
window.addEventListener('load', start, false);
