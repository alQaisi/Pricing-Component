const slider=document.getElementById("slider");
const dollars=document.getElementById("dollars");
const yearlyBilling=document.getElementById("yearlyBilling");
const pageviews=document.getElementById("pageviews");
const pageviews2=document.getElementById("pageviews2");
const prices=[["10K PAGEVIES",8],
              ["50K PAGEVIES",12],
              ["100K PAGEVIES",16],
              ["500K PAGEVIES",24],
              ["1M PAGEVIES",36]];
let applyDiscount=false;
let value=40;
yearlyBilling.addEventListener("change",(evt)=>{
    applyDiscount=evt.srcElement.checked;
    updateCost(value);
})
const updateCost=(value)=>{
    if(applyDiscount==true){
        price=prices[value/20][1]-prices[value/20][1]*0.25;
        dollars.innerText=`$${price}.00`;
    }
    else
        dollars.innerText=`$${prices[value/20][1]/1.0}.00`;
};
slider.addEventListener("change",(evt)=>{
    value=evt.target.value;
    console.log(value);
    pageviews.innerText=prices[value/20][0];
    pageviews2.innerText=prices[value/20][0];
    updateCost(value);
});
