function makePhone(brand,model,price,storage,quantity=1){
    return {
        brand:brand,
        model:model,
        price:price,
        storage :storage,
        favorite :false,
        quantity:quantity
    }
}
document.getElementById("phone1").style.display = phone1




var phone1 = makePhone("apple","iphone 16 pro",6000,"512gb","10")
console.log();
