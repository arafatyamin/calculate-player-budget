const cartArray = [];

function display(cartProduct) {
    // console.log(cartProduct);
    const nameList = document.getElementById('name-list');
    nameList.innerHTML = '';
    for (let i = 0; i < cartProduct.length; i++) {
        // console.log(i)
        // console.log(cartProduct[i])
        const li = document.createElement('li');
        li.innerText = cartProduct[i]
        nameList.appendChild(li);
    }
}

function addToCard(element) {
    // console.log(element.parentNode);
    // console.log(element.parentNode.children[0].innerText);

    const productName = element.parentNode.children[0].innerText;
    // console.log(productName);

    cartArray.push(productName)
    // console.log(cartArray.length)
    display(cartArray)
}

// budget calculation
document.getElementById('calculate-price').addEventListener('click', function () {
    const perPlayerPrice = getInputFieldValueById('per-player');

    const nameListElement = document.getElementById('name-list');
    const nameLengthString = nameListElement.children.length;
    const nameLength = parseInt(nameLengthString);
    // console.log(nameLength)

    const totalPlayerPrice = perPlayerPrice * nameLength;
    console.log(totalPlayerPrice)

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

    console.log(playerTotalCost, managerCost, coachCost, totalCost);

})