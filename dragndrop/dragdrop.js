function start(){
	origen1=document.getElementById('image');
	origen1.addEventListener('dragstart', dragged, false);
	destino=document.getElementById('dropbox');
	destino.addEventListener('dragenter', function(e){
		e.preventDefault(); }, false);
	destino.addEventListener('dragover', function(e){
		e.preventDefault(); }, false);
	destino.addEventListener('drop', dropped, false);
}
function dragged(e){
	var codigo='<img src="'+origen1.getAttribute('src')+'">';
	e.dataTransfer.setData('Text', codigo);
}
function dropped(e){
	e.preventDefault();
	destino.innerHTML=e.dataTransfer.getData('Text');
}
window.addEventListener('load', start, false);
