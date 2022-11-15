let body = document.body;
let currencyRow1 = document.querySelector('#currency-row1');
let currencyRow2 = document.querySelector('#currency-row2');

currencyRow1.addEventListener("mouseover", e=>{
    if(e.target.tagName==='DIV'){
        e.target.style.backgroundColor="#833AE0";
        e.target.style.borderColor="#833AE0";
    }
})