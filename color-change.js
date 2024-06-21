
const colors=["red", "green", "rgba(133,122,200)","#f15025"];

//create an array for each color

//add events on button for click on button color of background will change color

let buttonColor=document.getElementById('button');
let body=document.body;

//span to print color code

const colorSpan=document.querySelector('.color');

buttonColor.addEventListener("click", function(e)
{
	//target body element
	// console.log(document.body)
	
	//get random  number between 0 to 3   color[0],color[1]
	//index numbe 2
	//accessing colors from indexing numbers of an array
	// const randomNumber=2;
	
	const randomNumber=getRandomNumber();
	console.log(randomNumber);
	
	body.style.backgroundColor = colors[randomNumber];
	colorSpan.textContent=colors[randomNumber];
	// console.log(colorSpan)
	
})


function getRandomNumber()
{
	// return Math.floor(Math.random()*10);
	
	//floor for random number from point 0.99 to 1
	return Math.floor(Math.random()*colors.length);
}