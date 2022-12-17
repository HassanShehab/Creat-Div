let body = document.getElementById('body');
let inBtn = document.getElementById('inBtn');
let outBtn = document.getElementById('darkBtn');
let widthDiv = document.getElementById('widthDiv');
let heightDiv = document.getElementById('heightDiv');
let color = document.getElementById('colors');
let btn = document.getElementById('conBtn');
let div = document.getElementById('target');
let defult = document.getElementById('defult');
let curve = document.getElementById('curve');
let border = document.getElementById('border');
let curveValue = document.getElementById('curveValue');
let borderValue =document.getElementById('borderValue');
let container = document.getElementById('contain');
let textInput = document.getElementsByClassName('textInput');

let modes = ()=>{
    if(body.classList.contains('lightMode')){
        body.classList.remove('lightMode');
        body.classList.add('darkMode');
        container.style.border = '2px solid #eee';
        inBtn.style.background = '#121212';
        inBtn.style.left = '23px';
        outBtn.style.background = '#eee';
        for(let i = 0 ; i < textInput.length ; i++){
            textInput[i].style.background = '#eee';
            textInput[i].style.color = '#121212';
            textInput[i].classList.add('change');
        }
    }else if(body.classList.contains('darkMode')){
        body.classList.remove('darkMode');
        body.classList.add('lightMode');
        container.style.border = '2px solid #121212';
        inBtn.style.background = '#eee';
        inBtn.style.left = '2px';
        outBtn.style.background = '#121212';
        for(let i = 0 ; i < textInput.length ; i++){
            textInput[i].style.background = '#121212';
            textInput[i].style.color = '#eee';
            textInput[i].classList.remove('change');
        }
    }
}
outBtn.addEventListener('click', modes);

 curve.addEventListener('click' , function(){
    if(curve.checked == true){
        curveValue.classList.remove('hide');
    }
 });

 border.addEventListener('click' , function(){
    if(border.checked == true){
        borderValue.classList.remove('hide');
    }
 })

btn.addEventListener('click' , function(){
    div.style.width = widthDiv.value + "px" ;
    div.style.height = heightDiv.value + "px" ;
    div.style.background = color.value ;
    div.classList.remove('hide');
    if(border.checked == true){
        div.style.border = borderValue.value + "px solid";
    }else{
        div.style.border = 'none';
    }
    if(curve.checked == true){
        div.style.borderRadius = curveValue.value + "px";
    }else{
        div.style.borderRadius = '0px';
    }
    if(widthDiv.value !== '' || heightDiv.value !== ''){
        defult.classList.add('hide');
    }
})