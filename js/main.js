var titulo = document.getElementsByClassName("titulo")[0];
var linea = document.getElementsByClassName("linea")[0];

titulo.style.fontFamily = "Roboto Mono";
titulo.style.margin = "20px";
titulo.style.position = "relative"; 
titulo.style.left = "40px";

linea.style.width = "80px";
linea.style.height = "5px";
linea.style.background = "#000601";
linea.style.position = "absolute"; 
linea.style.top = "50px";
linea.style.left = "68px";

var uno = document.getElementsByClassName("alumna1")[0];
var dos = document.getElementsByClassName("alumna2")[0];
var tres = document.getElementsByClassName("alumna3")[0];
var cuatro = document.getElementsByClassName("alumna4")[0];
var cinco = document.getElementsByClassName("alumna5")[0];
var seis = document.getElementsByClassName("alumna6")[0];

uno.style.backgroundImage = "url('img/profile-6.png')";
uno.style.width = "211px";
uno.style.height = "211px";
uno.style.position = "absolute"; 
uno.style.top = "80px";
uno.style.left = "68px";

dos.style.backgroundImage = "url('img/profile-1.png')";
dos.style.width = "211px";
dos.style.height = "211px";
dos.style.position = "absolute"; 
dos.style.top = "80px";
dos.style.left = "368px";

tres.style.backgroundImage = "url('img/profile-2.png')";
tres.style.width = "211px";
tres.style.height = "211px";
tres.style.position = "absolute"; 
tres.style.top = "80px";
tres.style.left = "668px";

cuatro.style.backgroundImage = "url('img/profile-3.png')";
cuatro.style.width = "211px";
cuatro.style.height = "211px";
cuatro.style.position = "absolute"; 
cuatro.style.top = "380px";
cuatro.style.left = "68px";

cinco.style.backgroundImage = "url('img/profile-4.png')";
cinco.style.width = "211px";
cinco.style.height = "211px";
cinco.style.position = "absolute";
cinco.style.top = "380px";
cinco.style.left = "368px"; 

seis.style.backgroundImage = "url('img/profile-5.png')";
seis.style.width = "211px";
seis.style.height = "211px";
seis.style.position = "absolute"; 
seis.style.top = "380px";
seis.style.left = "668px";


var span = Array.from(document.getElementsByClassName("nombre"));

span.forEach(function(e){
	e.style.fontFamily = "Roboto Mono";
	e.style.position = "absolute"; 
	e.style.right = "10px";
	e.style.bottom = "10px";
	e.style.color = "white";
});