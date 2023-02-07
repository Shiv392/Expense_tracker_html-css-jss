const balance = document.getElementById('balance');
const money_plus = document.getElementById('money-plus');

const money_minus = document.getElementById("money-minus");

const list = document.getElementById('list');

const form = document.getElementById('form');

const text = document.getElementById('text');
const amount = document.getElementById("amount");

// const dummytransaction = [
//     { id: 1, 'text': 'shivsoni', 'amount': -20 },
//     { id: 2, 'text': 'raipur', 'amount': 300 },
//     { id: 2, 'text': 'gudhiyari', 'amount': 10 },
//     { id: 4, 'text': 'shiv', 'amount': 150 }

// ]

// let transactions = [];
const localstoragetransaction=JSON.parse(localStorage.getItem('transactions'));
let transactions=localStorage.getItem('transactions')!==null?localstoragetransaction:[]
//addtransaction
function addtransaction(e){
    e.preventDefault();
    if(!text.value||!amount.value){
        alert('plese enter text and value ')
    }
    else{
        const transaction={
       id:generateId(),
       text:text.value,
       amount: +amount.value
        }
        transactions.push(transaction);
        addTransactionDom(transaction);
        localstorage();
        updateValues();
        text.value="";
        amount.value=""
    }
}
//generate id
function generateId(){
    return Math.floor(Math.random()*10000000)
}

function addTransactionDom(transaction) {
    const sign = transaction.amount < 0 ? "-" : '+';
    const item = document.createElement('li');

    item.classList.add(
        transaction.amount < 0 ? "minus" : "plus"
    );
    item.innerHTML = `${transaction.text}<span>${sign}${Math.abs(transaction.amount)}</span>
<button class="delete-btn" onclick="removelist(${transaction.id})">X</button>
`

 list.appendChild(item)
}
//delete list
function removelist(id){
    transactions=transactions.filter(transaction=>transaction.id!==id);
    localstorage();
    init();
}
//update value
function updateValues(){
    const amount=transactions.map(ele=>ele.amount);
    const total=amount.reduce((acc,item)=>acc+=item,0).toFixed(2);
    const income=amount.filter(item=>item>0).reduce((acc,item)=>acc+=item,0).toFixed(2);
    const expense=(amount.filter(item=>item<0).reduce((acc,item)=>acc+=item,0)*-1).toFixed(2);

    balance.innerText=`Rs${total}`;
    money_plus.innerText=`Rs${income}`;
    money_minus.innerText=`Rs${expense}`;
}
//local storage
function localstorage(){
    localStorage.setItem('transactions',JSON.stringify(transactions))
}

//init app
function init(){
    list.innerHTML="";
    transactions.forEach(addTransactionDom);
    updateValues();
}

init();
form.addEventListener('submit',addtransaction)

// addTransactionDom(transaction)