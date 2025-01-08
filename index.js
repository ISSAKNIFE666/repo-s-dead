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


// 
var phones = [
    makePhone("Apple", "iPhone 14", 799, "./images/iphone14.jpg", "128GB", 3),
    makePhone("Samsung", "Galaxy S21", 999, "./images/images.jpg", "128GB", 2),
    makePhone("Google", "Pixel 6", 599, "./images/pixel6.jpg", "128GB", 4),
    makePhone("OnePlus", "OnePlus 9", 729, "./images/oneplus9.jpg", "256GB", 1),
    makePhone("Xiaomi", "Mi 11", 749, "./images/mi11.jpg", "128GB", 5),
    makePhone("Sony", "Xperia 5 II", 949, "./images/xper5.jpg", "128GB", 2),
    makePhone("Oppo", "Find X3 Pro", 1149, "./images/findx3.jpg", "256GB", 3),
    makePhone("LG", "V60 ThinQ", 799, "./images/v60.jpg", "128GB", 2),
    makePhone("Huawei", "P40 Pro", 899, "./images/p40pro.jpg", "256GB", 1),
    makePhone("Motorola", "Edge+", 999, "./images/edgemoto.jpg", "256GB", 4),
    makePhone("Asus", "ZenFone 8", 599, "./images/zenfone8.jpg", "128GB", 3),
    makePhone("Realme", "GT 6", 699, "./images/gt6.jpg", "128GB", 2),
    makePhone("Nokia", "8.3 5G", 649, "./images/nokia.jpg", "128GB", 1),
    makePhone("Vivo", "V21 5G", 499, "./images/vivo.jpg", "128GB", 6),
    makePhone("Lenovo", "Legion Phone Duel 2", 999, "./images/legion2.jpg", "512GB", 1)
];


// document.getElementById("phone1").innerHTML = phone1.brand+ " "+phone1.model + " priced at "+ phone1.price
phones.map(function(el){
    $('#content').append(`<div class="card">
  <img src=${el.img} alt="Phone" style="width:30%">
  <div class="container">
    <h4><b>${el.model}</b></h4>
    <p>${el.price+"$"}</p>
  </div>
</div>`)
})




$("#category-select")