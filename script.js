let para = document.querySelector('p');
const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
let itretiion = 0;


function randomtext(){
    para.textContent = 'With love for Sheriyans'
    let text = para.innerText;
    let str = text.split('')
    .map( (char,idx)=> {
        if(idx < itretiion) return char;  
        return letters[Math.floor(Math.random() * 53)];
    }).join('');
        para.innerText = str;
        itretiion += 0.2;
}

let intervalId;

para.addEventListener('mouseenter', () => {
    intervalId = setInterval(randomtext, 25);
    // clearInterval(i);
});

para.addEventListener('mouseleave', () => {
    clearInterval(intervalId);
    iteration = 0;
    para.textContent = '***************';
});
