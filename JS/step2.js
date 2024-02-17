const arcade = document.querySelector("#arcade");
const arcadePrice = document.querySelector("#arcadePrice");
const advanced = document.querySelector("#advanced");
const advancedPrice = document.querySelector("#advancedPrice");
const pro = document.querySelector("#pro");
const goBackOne = document.querySelector("#goBack1");
const goBackTwo = document.querySelector("#goBack2");
const proPrice = document.querySelector("#proPrice");
const toggleBtn = document.querySelector("#flexSwitchCheckChecked");
const isPlan = document.querySelector("#four");

// const nameInput1 = document.getElementById("nameInput");
// const emailInput = document.querySelector("#emailInput");
// const phoneInput = document.querySelector("#phoneInput");

console.log(toggleBtn); //This gives us true becuase the toggle button is checked by default in the HTML input element
// console.log(nameInput);

// Function to update the price
function updatePrice() {
    const isYearly = toggleBtn.checked  //This line means isYearly = true
    localStorage.setItem("yearly",isYearly)
   
    // update prices for each plan
    arcadePrice.innerHTML = isYearly ? "$90/yr" : "$9/mo";
    advancedPrice.innerHTML = isYearly ? "$120/yr" : "$12/mo";
    proPrice.innerHTML = isYearly ? "$150/yr" : "$15/mo";

    arcade.innerHTML = isYearly ? "2 months free" : "";
    advanced.innerHTML = isYearly ? "2 months free" : "";
    pro.innerHTML = isYearly ? "2 months free" : "";
}

updatePrice();


// four.addEventListener('click',(event) => {
// const plan = isPlan.clicked
// localStorage.setItem("change",plan)
// })


// function to toggle from monthly to yearly
toggleBtn.addEventListener("change", updatePrice);




// const parsedData = JSON.parse(data) //opposite of stringify is parse. To get our data in JS object style
// console.log(parsedData);

// if(parsedData){
//     nameInput.value = parsedData.name || ""
//     emailInput.value = parsedData.email || ""
//     phoneInput.value = parsedData.phone || ""
//   }

// // goBackOne.addEventListener("click", function(e) {
// //     // Retrieve local storage data
    
// // })

// // const data = localStorage.getItem("formData") //opposite of stringify is parse
// //     const parsedData = JSON.parse(data)
// //     console.log(parsedData);
// Update plan message

























