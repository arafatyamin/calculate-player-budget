const cartArray = [];

function display() {
    const nameList = document.getElementById('name-list');
    nameList.innerHTML = '';
    
    cartArray.map(item =>{
        const li = document.createElement('li');
        li.innerText = item
        nameList.appendChild(li);
    })
    
}

function addToCard(element) {
    if (cartArray.length < 5) {
        element.disabled=true;
        element.style.backgroundColor="gray"
        const productName = element.parentNode.children[0].innerText;

    cartArray.push(productName)
    display()
    }else {
        alert("don't select more than 5")
    }
}

// budget calculation
document.getElementById('calculate-price').addEventListener('click', function () {
    const perPlayerPrice = document.getElementById('perPlayer').value;

    const nameListElement = document.getElementById('name-list');
    const nameLengthString = nameListElement.children.length;

    const totalPlayerPrice = parseInt(perPlayerPrice) * parseInt(nameLengthString);
    const playerExpense = document.getElementById('player-expenses');
    playerExpense.innerText = totalPlayerPrice;
})

document.getElementById('total-calculate-btn').addEventListener('click', function () {
    const playerCost = document.getElementById('player-expenses').innerText;
    const managerCost = document.getElementById('manager-cost').value;

    const coachCost = document.getElementById('coach-cost').value;

    const totalCost = parseInt(playerCost) + parseInt(managerCost) + parseInt(coachCost);

    const totalElement = document.getElementById('total-cost');
    totalElement.innerText = totalCost;
})