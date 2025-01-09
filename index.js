
// var phones = [
//     makePhone("Apple", "iPhone 15 Pro", 739, "./images/15pro.jpg", "256GB", 4),
//     makePhone("Apple", "iPhone 15 Pro Max", 949, "./images/15promax.jpg", "512GB", 4),
//     makePhone("Apple", "iPhone 16 ", 799, "./images/16.jpg", "128GB", 1),
//     makePhone("Apple", "iPhone 16 Plus", 899, "./images/16plus.jpg", "256GB", 5),
//     makePhone("Apple", "iPhone 16 Pro", 949, "./images/16pro.jpg", "512GB", 2),
//     makePhone("Apple", "iPhone 16 Pro Max", 1149, "./images/16promax.jpg", "1TB", 3),
//     makePhone("Samsung", "Galaxy S24 FE", 649, "./images/s24fe.jpg", "128GB", 2),
//     makePhone("Samsung", "Galaxy S24", 859, "./images/s24.jpg", "256GB", 2),
//     makePhone("Samsung", "Galaxy S24+", 999, "./images/s24+.jpg", "256GB", 1),
//     makePhone("Samsung", "Galaxy S24 Ultra", 1419, "./images/s24u.jpg", "512GB", 4),
//     makePhone("Samsung", "Galaxy Z Fold6 ", 1899, "./images/zfold.jpg", "256GB", 3),
//     makePhone("Samsung", "Galaxy Z Flip6", 1099, "./images/zflip.jpg", "256GB", 2),
// ];
// localStorage.setItem("phones",JSON.stringify(phones))



function makePhone(brand,model,price,img,storage,quantity=1){
  return {
      brand:brand,
      model:model,
      price:price,
      img:img,
      storage :storage,
      favorite :false,
      quantity:quantity
  }
}

function selectCurrent(x){
localStorage.setItem('current',JSON.stringify(x))
window.location.href="./index2.html"
}

// 
var phones=JSON.parse( localStorage.getItem('phones'))
console.log(phones);


// document.getElementById("phone1").innerHTML = phone1.brand+ " "+phone1.model + " priced at "+ phone1.price
phones.map(function(el,index){
$('#content').append(`<div class="card">
<img class="phones" src=${el.img} alt=${el.brand} style="width:30%">
<div class="container">
<h4 class="currentSelection" data-index="${index}"><b>${el.brand} ${el.model}</b></h4>
<p id="pr">${el.price+"$"}</p>
<p id="str">${el.storage}</p>
</div>
</div>`)
})
﻿





$("#category-select").on("change",function(){
  $('.phones').each(function(){
    if ($("#category-select").val().includes("All Categories")){
      $(this).parent().show()
    }
    if($(this).attr("alt").toLowerCase().includes($("#category-select").val().toLowerCase())){
          $(this).parent().show()
      }
      else {$(this).parent().hide()}
  
  })
})

