const text = [
  "Frontend Developer",
  "Web Designer",
  "Freelancer"
];

let speed = 100;
let textIndex = 0;
let charIndex = 0;

const typing = document.querySelector(".typing");

function typeWriter(){

  if(charIndex < text[textIndex].length){

    typing.innerHTML += text[textIndex].charAt(charIndex);

    charIndex++;

    setTimeout(typeWriter, speed);

  }else{

    setTimeout(eraseText, 1500);

  }

}

function eraseText(){

  if(typing.innerHTML.length > 0){

    typing.innerHTML =
    typing.innerHTML.slice(0,-1);

    setTimeout(eraseText, 50);

  }else{

    textIndex++;

    if(textIndex >= text.length){
      textIndex = 0;
    }

    charIndex = 0;

    setTimeout(typeWriter, 500);

  }

}

window.onload = typeWriter;
