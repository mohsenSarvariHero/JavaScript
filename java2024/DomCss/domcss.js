console.log("start projects")

function changeBtn() {
    let buttonSubscribe = document.querySelector('.btnsubscribe');
    //console.log(textButton)
    if(buttonSubscribe.innerText === "Subscribe"){
        buttonSubscribe.innerHTML = "Subscribed";
        buttonSubscribe.classList.add('subscribed');
    }else{
        buttonSubscribe.innerHTML = "Subscribe";
        buttonSubscribe.classList.remove('subscribed');
    }

}

function printValue() {
    let inputField = document.querySelector('.inputF');
    let outputField = document.querySelector('.output');
    let inputValue = inputField.value.trim(); // Get the input value

    // Display the value below the input field
    if (inputValue && !isNaN(inputValue)) {
        if(inputValue <= 40 ){
            outputField.textContent = `You entered: $${Number(inputValue) + 10}`;

        }else{
            outputField.textContent = `Free Shopping`;

        }
    } else {
        outputField.textContent = "Please enter a value.";
    }
    
}

function enterclick(event){
    if(event.key === 'Enter'){
        printValue()
    }
}

