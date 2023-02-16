let body = document.getElementById('body');
let inBtn = document.getElementById('inBtn');
let outBtn = document.getElementById('darkBtn');
let widthDiv = document.getElementById('widthDiv');
let heightDiv = document.getElementById('heightDiv');
let textDiv = document.getElementById('textDiv');
let color = document.getElementById('colors');
let textColor = document.getElementById('textColors');
let confBtn = document.getElementById('conBtn');
let div = document.getElementById('target');
let defult = document.getElementById('defult');
let curve = document.getElementById('curve');
let border = document.getElementById('border');
let curveValue = document.getElementById('curveValue');
let borderValue =document.getElementById('borderValue');
let container = document.getElementById('contain');
let textInput = document.getElementsByClassName('textInput');
let borderSec = document.getElementById('borderSec');
let borderColor = document.getElementById('borderColors');

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
        if(curve.checked == true && border.checked == true){
            confBtn.style.borderColor = '#eee';
        }
    }else if(body.classList.contains('darkMode')){
        body.classList.remove('darkMode');
        body.classList.add('lightMode');
        container.style.border = '2px solid #121212';
        inBtn.style.background = '#eee';
        inBtn.style.left = '2px';
        outBtn.style.background = '#121212';
        confBtn.style.borderColor = 'black';
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
    }else{
        curveValue.classList.add('hide');
    }
 });

 border.addEventListener('click' , function(){
    if(border.checked == true){
        borderSec.classList.remove('hide');
    }else{
        borderSec.classList.add('hide');
    }
 })

 confBtn.addEventListener('click' , function(){
    div.style.width = widthDiv.value + "px" ;
    div.style.height = heightDiv.value + "px" ;
    div.style.background = color.value ;
    div.classList.remove('hide');
    if(border.checked == true){
        div.style.border = borderValue.value + "px solid " + borderColor.value ;
    }else{
        div.style.border = 'none';
    }
    if(curve.checked == true){
        div.style.borderRadius = curveValue.value + "px";
    }else{
        div.style.borderRadius = '0px';
    }if(textDiv.value !==''){
        defult.innerText = textDiv.value ;
        defult.style.color = textColor.value;    
    }else if(textDiv.value =='' & widthDiv.value !== ''|| heightDiv.value !== ''){
        defult.innerText = 'this is a defult text';
    }else if(textDiv.value =='' & widthDiv.value == ''& heightDiv.value == ''){
        defult.innerText = 'this is a defult box';
    }
})