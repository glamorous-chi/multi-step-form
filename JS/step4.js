const arcadeYear = document.querySelector("#arcadeYear");
const arcade = document.querySelector("#arcade");
const online = document.querySelector("#online")
const larger = document.querySelector("#larger")
const total = document.querySelector("#total");
const four = document.querySelector("#four");
const namedPlan = document.querySelector("#namedPlan");
const checkBoxOne = document.querySelector("#flexCheckDefault1");
const checkBoxTwo = document.querySelector("#flexCheckDefault2");
const checkBoxThree = document.querySelector("#flexCheckDefault3");


const data = localStorage.getItem("yearly")
const isYearly = JSON.parse(data)
  
arcadeYear.innerHTML = isYearly ? "Yearly" : "Monthly";
arcade.innerHTML = isYearly ? "$90/yr" : "$9/mo";
online.innerHTML = isYearly ? "$10/yr" : "$1/mo";
larger.innerHTML = isYearly ? "$20/yr" : "$2/mo";
total.innerHTML = isYearly ? "$120/yr" : "$12/mo";

const planOne = localStorage.getItem("planOne");
    const parsedplanOne = JSON.parse(planOne) 
    console.log(parsedplanOne);

    const planTwo = localStorage.getItem("planTwo");
    const parsedplanTwo = JSON.parse(planTwo)
    console.log(parsedplanTwo);

    const planThree = localStorage.getItem("planThree");
const parsedDataThree = JSON.parse(planThree) 
console.log(parsedDataThree);











