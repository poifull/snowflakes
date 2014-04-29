var canvas;
var context;
var snowflakes = new Array(700);
var Snow = function(){
	this.x = 0;
	this.y = 0;
	this.r = 0;
	this.speed_x = 0;
	this.speed_y = 0;
	this.color = "";
};

window.onload = function(){
	
	//Get canvas id
	canvas = document.getElementById("snow_canvas");
	if(!canvas || !canvas.getContext){return;}
	
	//Init context
	context = canvas.getContext("2d");
	
	//Set canvas size
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
    
	//Canvas opacity
	context.globalAlpha = 0.9;
	
	update();
};

function update(){
	
	//Clear canvas
	context.clearRect(0, 0, canvas.width, canvas.height);
	
	
	//Amount of snow
	for(var i=0; i < 1; i++){
		createSnow();
	}
	
	draw();
	
	
	setTimeout(update, 30);
}

function createSnow(){
	
	for(i = 0; i < snowflakes.length; i++){
		
		//Recycle snowflakes array
		if(snowflakes[i] != null && snowflakes[i].y >= window.innerHeight){	
			snowflakes[i] = null;
			break;
		}
		
		//Create snowflakes
		if(snowflakes[i] == null){
			var snow = new Snow();
			
			//Set first position of snowflakes
			snow.x = Math.floor(Math.random() * canvas.width);
			snow.y = 0;
			
			//Set arc radius of snowflakes
			snow.r = Math.floor(Math.random() * 3 + 1);
			
			//Set snow animation speed
			snow.speed_x = 0;
			snow.speed_y = Math.floor(Math.random() * 3 +1);
			
			//Set snow color
			snow.color = "#fffafa";
			
			//Put in array
			snowflakes[i] = snow;
			break;
		}	
	}
}

function draw(){
	for(i = 0; i < snowflakes.length; i++){
		if(snowflakes[i] != null){
			context.beginPath();
			
			context.fillStyle = snowflakes[i].color;
			
			context.arc(snowflakes[i].x, snowflakes[i].y += snowflakes[i].speed_y, snowflakes[i].r, 0, Math.PI * 2, true);			
			
			context.fill();
		}
	}
}
