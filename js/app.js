const cartArray = [];

function display(cartProduct) {
    const nameList = document.getElementById('name-list');
    nameList.innerHTML = '';
    for (let i = 0; i < cartProduct.length; i++) {
        if (5 > i) {
            const li = document.createElement('li');
            li.innerText = cartProduct[i]
            nameList.appendChild(li);
        } else {
            alert("Hello! I am an alert box!")
        }
    }
}

function addToCard(element) {
    element.disabled=true;
    element.style.backgroundColor="gray"

    const productName = element.parentNode.children[0].innerText;

    cartArray.push(productName)
    display(cartArray)
}

// budget calculation
document.getElementById('calculate-price').addEventListener('click', function () {
    const perPlayerPrice = getInputFieldValueById('per-player');

    const nameListElement = document.getElementById('name-list');
    const nameLengthString = nameListElement.children.length;
    const nameLength = parseInt(nameLengthString);

    const totalPlayerPrice = perPlayerPrice * nameLength;

    const playerExpense = document.getElementById('player-expenses');
    playerExpense.innerText = totalPlayerPrice;
})

document.getElementById('total-calculate-btn').addEventListener('click', function () {
    const playerTotalCost = getElementValueById('player-expenses');

    const managerCost = getInputFieldValueById('manager-cost');

    const coachCost = getInputFieldValueById('coach-cost');

    const totalCost = playerTotalCost + managerCost + coachCost;

    const totalElement = document.getElementById('total-cost');
    totalElement.innerText = totalCost;
})