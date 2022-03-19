var place=document.getElementById("place");
var total=document.getElementById("total-amount");
var size=document.getElementById("items");
var check=document.getElementById("check-section1");
var count=document.getElementById("count");
place.addEventListener("click",function(){
    location.assign("confrim.html");
    localStorage.clear();
})
$(document).ready(function() {
    var count=document.getElementById("count");
    var prod=JSON.parse(localStorage.getItem("prooductcard"));
    count.innerText=prod.length
});
var prod=JSON.parse(localStorage.getItem("prooductcard"));
var price=0;
if(prod!=null){
    size.innerText=" "+prod.length
    count.innerText=prod.length
for(var i=0;i<prod.length;i++){
    console.log(prod[i]);
    price +=parseInt(prod[i].price);
    check.innerHTML +=` <div class="checkout-card">
              <div>
                 <img class="checkout-product-img" src="${prod[i].img}">
              </div>
              <div>
                 <h4>${prod[i].name}</h4>
                 <p>x1</p>
                 <p><span>Amount: Rs </span>
                <span>${prod[i].price}</span></p>
               </div>
              </div> `
}
}else{
    size.innerText=" "+0;
    total.innerText=0;
}
total.innerText=price;


