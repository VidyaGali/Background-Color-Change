let colors=[0,1,2,3,4,5,6,7,8,9,"A", "B", "C", "D", "E", "F"];

let buttonColor=document.getElementById("button");

let colorSpan=document.querySelector(".color");

//creating ann array for colors generating using alphabets and numbers

//we need six letters for color generating and and 1 hex symbol

//looping a colors array 6 times for color generating with 6 letters

buttonColor.addEventListener("click",function(e){
	
	let hex="#";
	for (let i=0; i<6; i++)
	 {
		//colors[0]===array[0] index
		//hex+=colors[0];
		hex+=colors[getRandomNumber()];
		console.log(hex);
	}
	
	colorSpan.textContent=hex;
	document.body.style.backgroundColor=hex;
});

function getRandomNumber()
{
	return Math.floor(Math.random()*colors.length);
}