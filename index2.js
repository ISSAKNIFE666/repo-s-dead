var currentPhone=JSON.parse(localStorage.getItem('current'))
console.log(currentPhone);

$('#content2').append(`<div class="card">
<img class="phones" src=${currentPhone.img} alt=${currentPhone.brand} style="width:30%">
<div class="container">
  <h4 class="currentSelection" "><b>${currentPhone.brand} ${currentPhone.model}</b></h4>
  <p id="pr">price: ${currentPhone.price+"$"}</p>
  <p id="str">storage: ${currentPhone.storage}</p>
  <button class='orderButton'>Order</button>

</div>
</div>`)


$(".orderButton").on('click',function(){
  if (currentPhone.quantity===0){alert('The phone has been deleted sorry !')
    window.location.href='./index.html'}
  else{
     window.location.href='./order.html'}
})



