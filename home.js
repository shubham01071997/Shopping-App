var section1=document.getElementById("section1");
var section2=document.getElementById("section2");
$.get("https://5d76bf96515d1a0014085cf9.mockapi.io/product",function(response){
    for(var i=0;i<response.length;i++){ 
        if(response[i].isAccessory===false){   
            section1.innerHTML+=` 
            <div class="container">
              <a href="product.html?p=${response[i].id}">
              <img class="img1" src="${response[i].preview}">
              </a><p class="phide">${response[i].id}</p>
              <h3 class="info">${response[i].name}</h3>
              <h4 class="infoh4">${response[i].brand}</h4>
              <h5 class="infoh5">Rs ${response[i].price}</h5></div>
            </div>
            `
          }else{
         
            section2.innerHTML+= `
            <div class="container">
            <a href="product.html?p=${response[i].id}">
            <img class="img1" src="${response[i].preview}">
            </a><p class="phide">${response[i].id}</p>
            <h3 class="info">${response[i].name}</h3>
            <h4 class="infoh4">${response[i].brand}</h4>
            <h5 class="infoh5">Rs ${response[i].price}</h5></div>
          </div>
            `;
          }
               
    }
}).fail(function(err){
       console.log(err);
})
var head1=document.getElementById("section-head1");
head1.className="section-head";
$("#section-head1").text("Clothing for Men and Women");
var head2=document.getElementById("section-head2");
head2.className="section-head";
$("#section-head2").text("Accessories for Men and Women");


var head3=document.getElementById("section1");
head3.className="section1-margin";

var head4=document.getElementById("section2");
head4.className="section2-margin";

var owl = $('.owl-carousel');
owl.owlCarousel({
    items:1, 
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:1000,
    autoplayHoverPause:true
});
$(document).ready(function() {
  var count=document.getElementById("count");
  var prod=JSON.parse(localStorage.getItem("prooductcard"));
  count.innerText=prod.length
});