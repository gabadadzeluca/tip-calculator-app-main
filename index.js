// selecting tip %
const tips = document.querySelectorAll('.tip');
tips.forEach(tip =>{
    tip.addEventListener('click', function(event){
        calculateTip();
        tips.forEach(tip => {
            tip.classList.remove('active-tip');
            if(event.target.classList == tip.classList){
                // clear out costum tip field
                costumTip.value = '';
                event.target.classList.add('active-tip');
            }
        });
    })
})

// Bill input
const billInput = document.getElementById('bill');
billInput.addEventListener('input', calculateTip);

// Number of people
const numPeople = document.getElementById('people-count');
numPeople.addEventListener('input', calculateTip);


// Costum tip field
const costumTip = document.getElementById('costum');
costumTip.addEventListener('input', ()=>{
    tips.forEach(tip => {
        tip.classList.remove('active-tip');
    });
    calculateTip();
});

// Reset btn
const resetBtn = document.getElementById('reset-btn');
resetBtn.addEventListener('click', ()=>{
    //clear out fields !
    tips.forEach(tip =>{
        tip.classList.remove('active-tip');
    })
})




// Calculate output
function calculateTip(){
    let bill = parseFloat(billInput.value);
    let nofPeople = parseFloat(numPeople.value);
    let tip = 0;
    if(document.querySelector('.active-tip')){
        tip = parseFloat(document.querySelector('.active-tip').innerHTML);
    }else{
        tip = parseFloat(costumTip.value);
    }

    let total = bill + (bill*tip/100);
    let totalPricePerson = ((total / nofPeople)).toFixed(2);
    let totalTipPerson = (bill*tip/100)/nofPeople;
    display(totalTipPerson, totalPricePerson);
}

function display(x,y){
    if(isNaN(x) || isNaN(y)){
        console.log("NANNNNANN")
        x = y = '';
        
    }
    const totalTipPerson = document.getElementById('tip-total');
    totalTipPerson.innerHTML = '$' + x;
    const totalPricePerson = document.getElementById('total');
    totalPricePerson.innerHTML = '$' +  y;
}
