var phones = [
    makePhone("Apple", "iPhone 15 Pro", 739, "./images/15pro.png", "256GB", 4),
    makePhone("Apple", "iPhone 15 Pro Max", 949, "./images/15promax.png", "512GB", 0),
    makePhone("Apple", "iPhone 16 ", 799, "./images/16.png", "128GB", 1),
    makePhone("Apple", "iPhone 16 Plus", 899, "./images/16.plus.png", "256GB", 5),
    makePhone("Apple", "iPhone 16 Pro", 949, "./images/16.pro.png", "512GB", 2),
    makePhone("Apple", "iPhone 16 Pro Max", 1149, "./images/16pro-max-.png", "1TB", 0),
    makePhone("Samsung", "Galaxy S24 FE", 649, "./images/S24Fee.png", "128GB", 2),
    makePhone("Samsung", "Galaxy S24", 859, "./images/Sam-24.png", "256GB", 2),
    makePhone("Samsung", "Galaxy S24+", 999, "./images/s24++.png", "256GB", 1),
    makePhone("Samsung", "Galaxy S24 Ultra", 1419, "./images/S24UU.png", "512GB", 0),
    makePhone("Samsung", "Galaxy Z Fold6 ", 1899, "./images/summ.png", "256GB", 0),
    makePhone("Samsung", "Galaxy Z Flip6", 1099, "./images/ZFlip.png", "256GB", 2),
];
localStorage.setItem("phones",JSON.stringify(phones))



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






$("#catsel").on("change",function(){
  $('.phones').each(function(){
    if ($("#catsel").val().includes("All Categories")){
      $(this).parent().show()
    }
    if($(this).attr("alt").toLowerCase().includes($("#catsel").val().toLowerCase())){
          $(this).parent().show()
      }
      else {$(this).parent().hide()}
  
  })
})

$(".searchbut").on("click",function(){
  $('.phones').each(function(){
    if($(this).attr("alt").toLowerCase().includes($(".search").val().toLowerCase())){
          $(this).parent().show()
      }
      else {$(this).parent().hide()}
  
  })
})


$('.currentSelection').on('click',function(){
  var index = $(this).data('index');
  var selectedPhone = phones[index]; // Get the corresponding phone object
  selectCurrent(selectedPhone);
})



$(".bouton").on('click',function(){
  
     window.location.href='./index.html'})






