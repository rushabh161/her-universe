// Compliments

const compliments = [

"You are dangerously adorable.",

"You are the kind of person poets write about.",

"I think the universe spent extra time making you.",

"You make normal moments feel special.",

"How are you this pretty and still real?",

"Your smile could light up the darkest day."

];

function generateCompliment(){

const random = compliments[Math.floor(Math.random()*compliments.length)];

document.getElementById("compliment").innerText = random;

}


// Secret message

function revealSecret(){

document.getElementById("secretMessage").style.display="block";

}


// Typewriter text

const text="This page exists because someone special exists.";
let i=0;

function typeWriter(){

if(i<text.length){

document.getElementById("typewriter").innerHTML += text.charAt(i);

i++;

setTimeout(typeWriter,50);

}

}

typeWriter();


// Music

function toggleMusic(){

const music=document.getElementById("bgMusic");

if(music.paused){

music.play();

}else{

music.pause();

}

}


// Particles hearts

particlesJS("particles-js",{

particles:{

number:{value:60},

color:{value:"#ff8fab"},

shape:{type:"circle"},

opacity:{value:0.5},

size:{value:5},

move:{enable:true,speed:2}

}

});