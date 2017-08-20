function start(){
	var button=document.getElementById('obtain');
	button.addEventListener('click', obtain, false);
}
function obtain(){
	var geoconfig={
		enableHighAccuracy: true,
		timeout:10000,
		maximumAge:100000,
	};
	navigator.geolocation.getCurrentPosition(show,errors,geoconfig);
}
function show(position){
	var ubication=document.getElementById('ubication');
	var data='';
	data+='Latitude: '+position.coords.latitude+'<br>';
	data+='Longitude: '+position.coords.longitude+'<br>';
	data+='Accuracy: '+position.coords.accuracy+'mts.<br>';
	ubication.innerHTML=data;
}
function errors(error){
	alert('Error:'+error.code+' '+error.message);
}
window.addEventListener('load', start, false);
