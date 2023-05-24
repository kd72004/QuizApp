// const btn=document.getElementById('btn');
// const input=document.getElementById('input');
// const firstNum=document.querySelector('.firstNum');
// const secondNum=document.querySelector('.secondNum');
// firstNum.innerHTML=Math.floor(Math.random() * 10)+1;
// secondNum.innerHTML=Math.floor(Math.random() * 10)+1;
// let answer=firstNum.innerHTML*secondNum.innerHTML;
// let score = parseInt(document.getElementById('score').textContent);

// function onSubmit(){
//     if(input.value===''){
//         alert('Please enter your answer');
//     }
//     else{
//         // User answer is right 
//         // User answer is wrong
//         if(input.value==answer){
//             score++;
//             document.getElementById('score').textContent = score.toString();
//         }
//         else{
//             score--;
//             document.getElementById('score').textContent = score.toString();
//             alert('Wrong');
//         }
//     }
    
// }


// // generate random numbers 
// btn.addEventListener('click',onSubmit);

const btn = document.getElementById('btn');
const input = document.getElementById('input');
const firstNum = document.querySelector('.firstNum');
const secondNum = document.querySelector('.secondNum');
const scoreElement = document.getElementById('score');

firstNum.innerHTML = Math.floor(Math.random() * 10) + 1;
secondNum.innerHTML = Math.floor(Math.random() * 10) + 1;
let answer = firstNum.innerHTML * secondNum.innerHTML;

// Retrieve the score from session storage or initialize it to 0
let score = sessionStorage.getItem('score');
score = score ? parseInt(score) : 0;
scoreElement.textContent = score.toString();

function onSubmit() {
    if (input.value === '') {
        alert('Please enter your answer');
    } else {
        if (input.value == answer) {
            score++;
            scoreElement.textContent = score.toString();
        } else {
            score--;
            scoreElement.textContent = score.toString();
            alert('Wrong');
        }
    }

    // Store the updated score in session storage
    sessionStorage.setItem('score', score.toString());
}

btn.addEventListener('click', onSubmit);

