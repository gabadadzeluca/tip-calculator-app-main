const billInput = document.getElementById('bill');
const peopleInput = document.getElementById('people-count');
const costumInput = document.getElementById('costum');
const resetBtn = document.getElementById('reset-btn');
const tips = document.querySelectorAll('.tip');

// billInput.addEventListener('input', billFunction);
// peopleInput.addEventListener('input', peopleFunction);
costumInput.addEventListener('input', costumFunction);
// resetBtn.addEventListener('click', resetAll);
tips.forEach(tip => tip.addEventListener('click', selectTip));


// select tip by click
function selectTip(event){
    tips.forEach(tip => {
        tip.classList.remove('active-tip');
        if(event.target.classList == tip.classList){
            event.target.classList.add('active-tip');
        }
    });
}


function costumFunction(){
    tips.forEach(tip => {
            tip.classList.remove('active-tip');
        })
    //
    //

}



