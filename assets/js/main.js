let body = document.body;
let currencyRow1 = document.querySelector('#currency-row1');
let currencyRow2 = document.querySelector('#currency-row2');
let p1= document.querySelector('.area1>p');
let p2= document.querySelector('.area2>p');
let input1 = document.querySelector('#input1')
let input2 = document.querySelector('#input2')

let state1= 'RUB';
let state2= 'USD';
// If clicked state
currencyRow1.addEventListener("click", e=>{
    if(e.target.className==='currency1'){
        let arr = [];
        for( let elem of e.target.parentElement.children){
            arr.push(elem)
        }
        arr.forEach((item)=>{
            if(item===e.target){
                console.log(item, e.target)
                e.target.classList.add('violet')
                console.log(e.target.classList)
            }
            if(item!==e.target){
                item.classList.remove('violet')
            }
    })

        fetch(`https://api.exchangerate.host/latest?base=${e.target.innerText}&symbols=${state2}`)
        .then(r=>r.json())
        .then(data=>{
            state1=e.target.innerText;
            p1.innerText=`1 ${state1} = ${(+Object.values(data.rates)).toFixed(3)} ${state2}`;
            p2.innerText=`1 ${state2} = ${(1/Object.values(data.rates)).toFixed(3)} ${state1}`;

            if(input2.value==='' || typeof input2.value==='string'){
                input2.value=(input1.value*Object.values(data.rates)).toFixed(3);
            }
            else if(input1.value===''){
                input1.value=(input2.value/Object.values(data.rates)).toFixed(3);
            }
        })
    }
})

currencyRow2.addEventListener("click", e=>{
    if(e.target.className==='currency2'){


        fetch(`https://api.exchangerate.host/latest?base=${e.target.innerText}&symbols=${state2}`)
        .then(r=>r.json())
        .then(data=>{
            state2=e.target.innerText;
            p1.innerText=`1 ${state1} = ${(+Object.values(data.rates)).toFixed(3)} ${state2}`;
            p2.innerText=`1 ${state2} = ${(1/Object.values(data.rates)).toFixed(3)} ${state1}`;

            if(input2.value==='' || typeof input2.value==='string'){
                input2.value=(input1.value*Object.values(data.rates)).toFixed(3);
            }
            else if(input1.value===''){
                input1.value=(input2.value/Object.values(data.rates)).toFixed(3);
            }
        })
    }
})