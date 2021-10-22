const button = document.querySelector('#view-color');
const Content_Color = document.querySelector('#Container_Color')
//const paragraph = document.querySelector('#hexadecimal');

button.addEventListener('click', generarNuevoColor);

function generarNuevoColor(){
	var simbolos, color;
	simbolos = "0123456789ABCDEF";
	color = "#";

	for(var i = 0; i < 6; i++){
		color = color + simbolos[Math.floor(Math.random() * 16)];
		
	}
	
	//document.body.style.background = color;
	Content_Color.style.background = color;

	
}










