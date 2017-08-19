function start(){
	origin1=document.getElementById('image');
	origin1.addEventListener('dragstart', dragged, false);
	origin1.addEventListener('dragend', finished, false);
	drop=document.getElementById('dropbox');
	drop.addEventListener('dragenter', entering, false);
	drop.addEventListener('dragleave', exiting, false);
	drop.addEventListener('dragover', function(e){
		e.preventDefault(); }, false);
	drop.addEventListener('drop', droped, false);
}
function entering(e){
	e.preventDefault();
	drop.style.background='rgba(0,150,0,.2)';
}
function exiting(e){
	e.preventDefault();
	drop.style.background='#FFFFFF';
}
function finished(e){
	element=e.target;
	element.style.visibility='hidden';
}
function dragged(e){
	var code='<img src="'+origin1.getAttribute('src')+'">';
	e.dataTransfer.setData('Text', code);
}
function droped(e){
	e.preventDefault();
	drop.style.background='#FFFFFF';
	drop.innerHTML=e.dataTransfer.getData('Text');
}window.addEventListener('load', start, false);
