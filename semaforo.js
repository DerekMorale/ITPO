function retornarLienzo (x) {
	var canvas = document.getElementById (x);

	if (canvas.getContext) {
		var lienzo = canvas.getContext("2d")
		return lienzo;
	} else 
	return false;
}
function dibujar() {
	var lienzo=retornarLienzo('lienzo1');

if (lienzo) {
	lienzo.beginPath();
lienzo.moveTo(170, 80);
lienzo.bezierCurveTo(130, 100, 130, 150, 230, 150);
lienzo.bezierCurveTo(250, 180, 320, 180, 340, 150);
lienzo.bezierCurveTo(420, 150, 420, 120, 390, 100);
lienzo.bezierCurveTo(430, 40, 370, 30, 340, 50);
lienzo.bezierCurveTo(320, 5, 250, 20, 250, 50);
lienzo.bezierCurveTo(200, 5, 150, 20, 170, 80);
lienzo.closePath();
lienzo.lineWidth = 5;
lienzo.fillStyle = "white";
lienzo.fill();
lienzo.strokeStyle = 'white';
lienzo.stroke();

lienzo.fillStyle="black";
lienzo.font = "30px Moonhouse";
lienzo.fillText("Derek", 240, 100);

lienzo.beginPath();
lienzo.rect(3, 400, 20, 450);
lienzo.fillStyle = "#2c3e50";
lienzo.fill();
lienzo.strokeStyle = '#2c3e50';
lienzo.stroke();

lienzo.beginPath();
lienzo.rect(50, 800, 800, 50);
lienzo.fillStyle = "#000000";
lienzo.fill();
lienzo.strokeStyle = '#000000';
lienzo.stroke();

lienzo.beginPath();
lienzo.rect(320, 700, 235, 50);
lienzo.rect(370, 650, 150, 50);
lienzo.fillStyle = "red";
lienzo.fill();
lienzo.strokeStyle = 'red';
lienzo.stroke();



lienzo.beginPath();
lienzo.arc(520, 760, 35, 35,Math.PI,true)
lienzo.arc(375, 760, 35, 35,Math.PI,true)
lienzo.fillStyle = "grey";
lienzo.fill();
lienzo.strokeStyle = 'grey';
lienzo.stroke();

lienzo.beginPath();
lienzo.rect(320, 700, 235, 50);
lienzo.rect(370, 650, 150, 50);
lienzo.fillStyle = "red";
lienzo.fill();
lienzo.strokeStyle = 'red';
lienzo.stroke();






}
}

const circulos = document.querySelectorAll('.circle')
let activarLuz = 0;

setInterval(() => {
	cambiarLuz();
}, 2000);

function cambiarLuz() {
	circulos[activarLuz].className = 'circle';
	activarLuz++;
	
	if(activarLuz > 2) {
		activarLuz = 0;
	}
	
	const currentLight = circulos[activarLuz]
	
	currentLight.classList.add(currentLight.getAttribute('color'));
}


