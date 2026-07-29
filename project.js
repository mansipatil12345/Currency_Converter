const BASE_URL =
"https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies";

const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const msg = document.querySelector(".msg")
//check the accessibility 
// for (code in countryList){
//     console.log(code,countryList[code]);
// }

window.addEventListener("load",()=>{
    updateExchangeRate();
})

for (let select of dropdowns){
    for(currCode in countryList){
        let newOption = document.createElement("option")
        newOption.innerText=currCode;
        newOption.value = currCode;
        if(select.name==="from" && currCode==="USD"){
            newOption.selected="selected";//select that code
        }else  if(select.name=="to" && currCode=="INR"){
            newOption.selected="selected";
        }
        select.append(newOption);
    }
    select.addEventListener("change",(evt)=>{
        updateFlag(evt.target)
    })
}


const updateFlag = (element)=>{
    // console.log(element) //ele on which change event ocurred
    let currCode = element.value;
    let countryCode = countryList[currCode];
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    let img = element.parentElement.querySelector("img");
    img.src= newSrc;
};


btn.addEventListener("click",(evt)=>{
    evt.preventDefault(); //default action should stop everything would be handled by user explicitly
    updateExchangeRate();
});

const updateExchangeRate=("load",async()=>{
    let amount = document.querySelector(".amount input");
    let amtval = amount.value;
    // console.log(amtval);
    if(amtval===""||amtval<1){
        amtval=1;
        amount.value="1";
    }

    const URL =`${BASE_URL}/${fromCurr.value.toLowerCase()}.json`;
    let response = await fetch(URL);
    console.log(response)
    let data = await response.json();
    // console.log(data);
    let rate = data[fromCurr.value.toLowerCase()][toCurr.value.toLowerCase()];
    // console.log(rate);
    //amount is element will tae amtval as mentioned above
    let finalAmount = amtval*rate;
    msg.innerText = `${amtval} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`;
});






