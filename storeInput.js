let button = document.querySelector("button");
let textEl = document.querySelector(".text");
let numEl = document.querySelector(".number");
let emailEl = document.querySelector(".email")
let dateEl = document.querySelector (".date")

button.addEventListener("click", function() {
 text = textElem.value;
 number = numEl.value;
 email = emailEl.value;
 button = button.value;
 
 
    // 1. Update the four variables - text, number, email, and date.
    //  - Save the value of the four different inputs.
    //  - Go to the html to use the class names.

    // DO NOT CHANGE THIS CODE
    let resultsDiv = document.querySelector('#results');
    resultsDiv.innerHTML = "";
    resultsDiv.innerHTML += `<p>Text: ${text}</p>`;
    resultsDiv.innerHTML += `<p>Number: ${number}</p>`;
    resultsDiv.innerHTML += `<p>Email: ${email}</p>`;
    resultsDiv.innerHTML += `<p>Date: ${date}</p>`;

});
