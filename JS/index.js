// // Select the name, email, and phone number using their id
// const nameInput = document.querySelector("#nameInput")
// // console.log(nameInput);
// const emailInput = document.querySelector("#emailInput")
// // console.log(emailInput);
// const phoneInput = document.querySelector("#phoneInput")
// // console.log(phoneInput);
// const nextButton = document.querySelector("#next-button")
// // console.log(nextButton);

// const nameError = document.querySelector("#nameError")
// // console.log(nameError);
// const emailError = document.querySelector("#emailError")
// // console.log(emailError);
// const phoneError = document.querySelector("#phoneNumberError")
// // console.log(phoneError);

// // Handling nameInput, and nameError

// nameInput.addEventListener("focus",function() {
//     nameInput.style.border = "1px solid red"
// })
// nameInput.addEventListener("input", function(){
//     if(nameInput.value.trim().length >= 3){
//         nameInput.style.border = "1px solid blue";
//     }
//     else{
//         nameInput.style.border = "1px solid red"
//     }
    
// })

// emailInput.addEventListener("focus",function() {
//     emailInput.style.border = "1px solid red"
// })
// emailInput.addEventListener("input", function(){
//     if(emailInput.value.trim().length >= 3){
//         emailInput.style.border = "1px solid blue";
//     }
//     else{
//         emailInput.style.border = "1px solid red"
//     }
    
// })
// phoneInput.addEventListener("focus",function() {
//     phoneInput.style.border = "1px solid red"
// })
// phoneInput.addEventListener("input", function(){
//     if(phoneInput.value.trim().length >= 3){
//         phoneInput.style.border = "1px solid blue";
//     }
//     else{
//         phoneInput.style.border = "1px solid red"
//     }
    
// })

// nextButton.addEventListener("click",function(){
//     if(phoneInput.value.length <=3 && emailInput.value.length <=3 && phoneInput.value.length <=3){
       
//     }
//     // else{
//     //     nextButton.setAttribute("href","./blard-html.html");
//     // }
// })

// Tuesday, 13th of February, 2024
const nameInput = document.getElementById("nameInput");
const emailInput = document.querySelector("#emailInput");
const phoneInput = document.querySelector("#phoneInput");
const nextBtn = document.querySelector("#nextBtn");
const nextBtnTwo = document.querySelector("#nextBtn2");
const nameError = document.querySelector("#nameError");
const emailError = document.querySelector("#emailError");
const phoneError = document.querySelector("#phoneError");

console.log(nameInput.value);

// nameInput and nameError
nameInput.addEventListener("focus", function(){
    nameInput.style.border = "1px solid red";
})

nameInput.addEventListener("input", function(event){ //input event listes for when you type something
    const inputValue = nameInput.value.trim();
    if(inputValue.length >= 3){
        nameInput.style.border = "1px solid blue";
        nameError.innerHTML = ""
    }
    else if(inputValue.length === 0) {
        nameInput.style.border = "1px solid red";
        nameError.innerHTML = "This field is required"
    }else{
        nameInput.style.border = "1px solid red"; //This is the default color given
    }
});

nameInput.addEventListener("blur", function(){
    nameInput.style.border = "";
    nameError.innerHTML = "";
})

// emailInput, emailError
emailInput.addEventListener("focus", function(){
    emailInput.style.border = "1px solid red";
})

emailInput.addEventListener("blur", function () { //blur makes it go back to normal or default. It unfocuses, ie it is the opposite of focus
    emailInput.style.border = ""; 
    emailError.innerHTML = "";

  });

emailInput.addEventListener("input", function(event){
    const emailValue = emailInput.value.trim();
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (emailValue.length >= 5 && emailRegex.test(emailValue)) {
        emailInput.style.border = "1px solid blue";
        emailError.textContent = "";
      }else if(emailValue.length <= 3){
        emailInput.style.border = "1px solid red";
        emailError.textContent = "must be 6 characters long or more";
      }else {
        emailInput.style.border = "1px solid red";
        emailError.innerHTML = "Invalid email format";
      }
});

// phoneInput phoneError

phoneInput.addEventListener("focus", function () {
    if (phoneInput.value.trim().length !== 11 || isNaN(phoneInput.value.trim())) {
      phoneInput.style.border = "1px solid red";
    }
  });

  phoneInput.addEventListener("blur", function () {
    phoneInput.style.border = "";
    phoneError.innerHTML = "";

  });

  phoneInput.addEventListener("input", function (event) {
    const phoneValue = phoneInput.value.trim();

    if (phoneValue.length === 11 && !isNaN(phoneValue)) {
      phoneInput.style.border = "1px solid blue";
      phoneError.innerHTML = "";
    } else if (!isNaN(phoneValue) && phoneValue.length < 11 || phoneValue.length > 11) {
      phoneInput.style.border = "1px solid red";
      phoneError.textContent = "Enter a valid phone number";
    } else {
        phoneInput.style.border = "1px solid red";
        phoneError.textContent = "Invalid input";
    }
  });

//   Next Button
// nextBtn.addEventListener("click", function(){
//     if(emailValue.length <= 3 && emailValue.length === 0 && inputValue.length === 0 && inputValue.length < 3 && phoneValue.length < isNaN(phoneValue)) {
//         nextBtn.onClick() = function(){

//         }
//     }
// })

// Create a function to check the overall form validity
const isFormValid = () => {
    const nameValue = nameInput.value.trim();
    const emailValue = emailInput.value.trim();
    const phoneValue = phoneInput.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

     // Checking each input validation
    const isNameValid = nameValue.length >= 3;
    const isEmailValid = emailValue.length >= 5 && emailRegex.test(emailValue)
    const isPhoneValid = phoneValue.length === 11 && !isNaN(phoneValue)

return isNameValid && isEmailValid && isPhoneValid
}

// Add click event to the nextBtn
nextBtn.addEventListener('click',(event) => {
    if(!isFormValid()){
        event.preventDefault();
        nameInput.style.border = '1px solid red';
        nameError.innerHTML = 'This field is required';
        emailInput.style.border = '1px solid red';
        emailError.innerHTML = 'This field is required';
        phoneInput.style.border = '1px solid red';
        phoneError.innerHTML = 'This field is required';
        return
    }
    // Setting our local storage
    const nameValue = nameInput.value.trim();
    const emailValue = emailInput.value.trim();
    const phoneValue = phoneInput.value.trim();

    // Create an object to store all the information which will be sent to the local storage
    const formData = {
      name: nameValue,
      email: emailValue,
      phone: phoneValue
    }
    localStorage.setItem("auth", JSON.stringify(formData));

    // OR
    // localStorage.setItem("name", nameValue);
    // localStorage.setItem("email", emailValue);
    // localStorage.setItem("phone", phoneValue);
})
nextBtnTwo.addEventListener('click',(event) => {
    if(!isFormValid()){
        event.preventDefault();
        nameInput.style.border = '1px solid red';
        nameError.innerHTML = 'This field is required';
        emailInput.style.border = '1px solid red';
        emailError.innerHTML = 'This field is required';
        phoneInput.style.border = '1px solid red';
        phoneError.innerHTML = 'This field is required';
        return //To stop the code here
    }

    const nameValue = nameInput.value.trim();
    const emailValue = emailInput.value.trim();
    const phoneValue = phoneInput.value.trim();

    // Create an object to store all the information which will be sent to the local storage
    const formData = {
      name: nameValue,
      email: emailValue,
      phone: phoneValue
    }
    localStorage.setItem("auth", JSON.stringify(formData)); //auth is the key to the local storage
})

    const data = localStorage.getItem("auth") //You will use the key to get the item from the local storage
    console.log(data);
    const parsedData = JSON.parse(data) //opposite of stringify is parse. To get our data in JS object style
    console.log(parsedData);

    if(parsedData){
      nameInput.value = parsedData.name || ""
      emailInput.value = parsedData.email || ""
      phoneInput.value = parsedData.phone || ""
    }
    // OR
    // Destruring
    const {name,email,phone} = parsedData
    if(parsedData){
      nameInput.value = name || "" //name is from the local storage 
      emailInput.value = email || ""
      phoneInput.value = phone || ""
    }
  

// WEDNESDAY, 14TH OF FEBRUARY, 2024
// Local Storage - You can store information temporarily and get it whenever you need it. You can set items, get items (fetch), and remove items
// Saving items to your local storage using setItem method
// Syntax
// localStorage.setItem("key", value) All the information coming from the backend is stored in the value, the key is set by you

// Retreiving items from your local storage using getItem method - it takes one parameter

// Clearing items from your local storage using removeItem method


// THURSDAY, 15TH OF FEBRUARY, 2024
// Removing items from the local storage
setTimeout(() => {
  localStorage.removeItem("formData");
},5000)






