const online = document.querySelector("#online");
const storage = document.querySelector("#storage");
const profile = document.querySelector("#profile");
const checkBoxOne = document.querySelector("#flexCheckDefault1");
const checkBoxTwo = document.querySelector("#flexCheckDefault2");
const checkBoxThree = document.querySelector("#flexCheckDefault3");

 // update prices for each plan
//  const isYearly = toggleBtn.checked  //This line means isYearly = true
//     localStorage.setItem("yearly",isYearly)
//  online.innerHTML = isYearly ? "+$10/yr" : "+$1/mo";
//  storage.innerHTML = isYearly ? "+$10/yr" : "+$2/mo";
//  profile.innerHTML = isYearly ? "+$20/yr" : "+$2/mo";

// Retrieve data from local storage
const data = localStorage.getItem("yearly")
const isYearly = JSON.parse(data)

// to Update the plan checked by the user
function updatePlanOne() {
    const isPlanOne = checkBoxOne.checked   
    // console.log(isPlanOne);
    
    localStorage.setItem("planOne",isPlanOne)
    
}

function updatePlanTwo() {
    const isPlanTwo = checkBoxTwo.checked   
    // console.log(isPlanTwo);
    
    localStorage.setItem("planTwo",isPlanTwo)
    checkBoxOne.innerHTML = isPlanOne ? "Online service":"";
    checkBoxTwo.innerHTML = isPlanTwo ? "Larger storage": "";
}
function updatePlanThree() {
    const isPlanThree = checkBoxThree.checked   
    // console.log(isPlanThree);
    
    localStorage.setItem("planThree",isPlanThree)
    
    
checkBoxThree.innerHTML = isPlanThree ? "Customizable profile" :"";
}


checkBoxOne.addEventListener("change", updatePlanOne);
checkBoxTwo.addEventListener("change", updatePlanTwo);
checkBoxThree.addEventListener("change", updatePlanThree);








   




