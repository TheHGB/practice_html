function start(){
	drop=document.getElementById('dropbox');
	drop.addEventListener('dragenter', function(e){
		e.preventDefault(); }, false);
	drop.addEventListener('dragover', function(e){
		e.preventDefault(); }, false);
	drop.addEventListener('drop', dropped, false);
}
function dropped(e){
	e.preventDefault();
	var files=e.dataTransfer.files;
	var list='';
	for(var f=0;f<files.length;f++){
		list+='File: '+files[f].name+' '+files[f].size+'<br>';
	}
	drop.innerHTML=list;
}window.addEventListener('load', start, false);
