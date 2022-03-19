$(document).ready(function() {
  

    $(document).on("click", "#preview-section img", function() {

       $(this)
         .addClass("image-border")
         .siblings()
         .removeClass("image-border");
     });
     
   
    var c = window.location.search.split('=')[1];

  $.get("https://5d76bf96515d1a0014085cf9.mockapi.io/product/"+c,function(response){
         $('.container-image-section').attr('src',response.preview);
         $('.title').html(response.name);
         $('.brand').html(response.brand);
         $('#price').html(response.price);
         $('#dpara').html(response.description);
         var imageright=document.getElementById("preview-section");
         var imagenew=response.photos
         for(var i=0;i<imagenew.length;i++){
            imageright.innerHTML+=`
             <img id="${i}" class="image_preview" src="${imagenew[i]}">
              `;
            
              var change=document.getElementById("change-image");
              $(document).on("click", "#preview-section img", function(e) {
                  change.src=imagenew[e.currentTarget.id];
               });

        $('#0').addClass("image-border")
    }
        }).fail(function(err){
            console.log(err);
    })
    var count=document.getElementById("count");
    var prod=JSON.parse(localStorage.getItem("prooductcard"));
    count.innerText=prod.length
});  
      
function addtocart(){
    var price=document.getElementById("price");
    var name=document.getElementsByClassName("title");
    var imager=document.getElementById("change-image");
     var product={
         name:name[0].innerHTML,
         price:price.innerHTML,
         img:imager.src
         }
     if(localStorage.getItem("prooductcard")==null){
         var prooductcard=[];
          prooductcard.push(product);
         localStorage.setItem("prooductcard",JSON.stringify(prooductcard));
     }else{
        var data=JSON.parse(localStorage.getItem("prooductcard"));
        data.push(product);
        localStorage.setItem("prooductcard",JSON.stringify(data));
     }
     var count=document.getElementById("count");
     var prod=JSON.parse(localStorage.getItem("prooductcard"));
     count.innerText=prod.length
}

