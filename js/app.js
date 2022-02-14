let submitCount = 0;
function getPin() {
    let pin = Math.round(Math.random() * 10000);
    if ((pin + '').length == 4) {
        return pin;
    }
    else {
        return getPin();
    }
}

function generatePin() {
    document.getElementById('display-pin').value = getPin();
}

document.getElementById('pin-generator').addEventListener('click', function () {
    generatePin();
})

document.getElementById('button-container').addEventListener('click', function (event) {
    const inputText = event.target.innerText;
    let displayNumber, displayElement;
    displayElement = document.getElementById('display-number');
    if (!isNaN(inputText)) {
        const displayText = displayElement.value;
        displayNumber = displayText + inputText;
        displayElement.value = displayNumber;
    }
    else if (submitCount == 3) {
        document.getElementById('alert').style.display = 'block';
    }
    else if (inputText == 'Submit') {
        let matchedPinMsg, unMatchedPinMsg;
        matchedPinMsg = document.getElementById('matched-pin');
        unMatchedPinMsg = document.getElementById('unmatched-pin');
        const givenPin = document.getElementById('display-pin').value;
        displayNumber = document.getElementById('display-number').value;
        if (givenPin == displayNumber) {
            matchedPinMsg.classList = 'notify';
            unMatchedPinMsg.classList = 'notify, d-none';
        }
        else {
            unMatchedPinMsg.classList = 'notify';
            matchedPinMsg.classList = 'notify, d-none';
        }
        submitCount++;
    }
    else if (inputText == 'C') {
        displayElement.value = '';
    }
    else {
        const displayText = displayElement.value;
        displayElement.value = displayText.replace(displayText[displayText.length - 1], '');
    }
})