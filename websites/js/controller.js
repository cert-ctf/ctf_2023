
// Konami-Code: oben, oben, unten, unten, links, rechts, links, rechts, B, A
const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown','ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'KeyB', 'KeyA'];    
let inputBuffer = [];
let input_text = [];

// Tasten-Overlay-Elemente
const buttonA = document.getElementById('button-a');
const buttonB = document.getElementById('button-b');

const buttonUp = document.getElementById('button-up');
const buttonDown = document.getElementById('button-down');

const buttonLeft = document.getElementById('button-left');
const buttonRight = document.getElementById('button-right');
// Füge weitere Tasten hinzu

// Mausklicks auf Tasten behandeln
buttonA.addEventListener('mousedown', () => Button_Click_A());
buttonB.addEventListener('mousedown', () => Button_Click_B());

buttonUp.addEventListener('mousedown', () => Button_Click_Up());
buttonDown.addEventListener('mousedown', () => Button_Click_Down());
buttonLeft.addEventListener('mousedown', () => Button_Click_Left());
buttonRight.addEventListener('mousedown', () => Button_Click_Right());

document.addEventListener('mouseup', function(event) {
	document.getElementById("controller-img").src = "./img/controller.png";
	document.getElementById("controller-img").style.display = "block";	
});

function Button_Click_A() {
	handleButtonClick('KeyA')
}

function Button_Click_B() {
	handleButtonClick('KeyB')
}

function Button_Click_Up() {
	handleButtonClick('ArrowUp')
}

function Button_Click_Down() {
	handleButtonClick('ArrowDown')
}

function Button_Click_Left() {
	handleButtonClick('ArrowLeft')
}

function Button_Click_Right() {
	handleButtonClick('ArrowRight')
}

function handleButtonClick(keyCode) {	
	if (input_text.length > 10)	
	{								
		input_text.shift();
	}
				
	switch(keyCode.toString()) {
		case "ArrowUp":
			input_text.push("⬆️");
			document.getElementById("controller-img").src = "img/controller_up.png";
			break;
		case "ArrowDown":
			input_text.push("⬇️");
			document.getElementById("controller-img").src = "img/controller_down.png";
			break;
		case "ArrowLeft":
			input_text.push("⬅️");
			document.getElementById("controller-img").src = "img/controller_left.png";
			break;
		case "ArrowRight":
			input_text.push("➡️");
			document.getElementById("controller-img").src = "img/controller_right.png";
			break;
		case "KeyA":
			input_text.push("🅰️");
			document.getElementById("controller-img").src = "img/controller_a.png";
			break;
		case "KeyB":
			input_text.push("🅱️");								
			document.getElementById("controller-img").src = "img/controller_b.png";						
			break;
		default:
			// code block
		} 			
	document.getElementById("controller-img").style.display = "block";	
	document.getElementById("input_text").textContent = input_text.join('');	

	if (inputBuffer.length < konamiCode.length) {
		inputBuffer.push(keyCode);
	} else {
		inputBuffer.shift();
		inputBuffer.push(keyCode);
	}

	// Überprüfe, ob die gedrückten Tasten dem Konami-Code entsprechen
	if (inputBuffer.toString() === konamiCode.toString()) {
		document.getElementById("tv").src = "img/konami_end.png";
		document.getElementById("tv").style.display = "block";
		resetInputBuffer();
	} else if (!konamiCode.includes(keyCode)) {
		resetInputBuffer();
	}
}

function resetInputBuffer() {
	inputBuffer = [];
}



var images = [];
var imagePaths = ["img/controller.png", "img/controller_up.png","img/controller_down.png","img/controller_left.png","img/controller_right.png","img/controller_a.png","img/controller_b.png"];
var progressBar = document.getElementById("loadingProgressBar");
var progressText = document.getElementById("progressText");

function preloadImages(callback) {
	var loadedImages = 0;

	function imageLoaded() {
		loadedImages++;
		var progress = (loadedImages / imagePaths.length) * 100;
		progressBar.value = progress;
		progressText.innerHTML = Math.round(progress) + "%";		
		console.log(Math.round(progress) + "%");

		if (loadedImages === imagePaths.length) {
			// Alle Bilder wurden geladen
			progressBar.style.display = "none"; // Verstecke die Progressbar
			progressText.style.display = "none";
			callback();
		}
	}

	for (var i = 0; i < imagePaths.length; i++) {
		images[i] = new Image();
		images[i].onload = imageLoaded;
		images[i].src = imagePaths[i];
	}
}

preloadImages(function() {
	console.log("Alle Bilder wurden geladen!");
});
