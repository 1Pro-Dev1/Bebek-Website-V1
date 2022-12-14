let emptyCart = document.querySelector(".empty-cart")
let checkoutbtn = document.querySelector(".button-cont a")
let purchase = document.querySelector(".purchase")

if (localStorage.getItem("products") == null){
    checkoutbtn.style.display = "none"
} else{
    emptyCart.style.display = "none"
    let productsStorage = localStorage.getItem("products");
    let productsArray = productsStorage.split(",")
    var productsContainer = document.querySelector(".products")
    for (let i = 0; i < productsArray.length; i++) {
        const e = productsArray[i];
        elementFactory(e)
    }
    
    function elementFactory(productName) {
        let mainCard = document.createElement("div")
        mainCard.classList.add("card", "mb-3")
    
        let row = document.createElement("div")
        row.classList.add("row")
        mainCard.appendChild(row)
    
        let col1 = document.createElement("div")
        col1.classList.add("col-md-4")
        row.appendChild(col1)
    
        let colImg = document.createElement("img")
        colImg.classList.add("img-fluid", "rounded-start")
        col1.appendChild(colImg)
    
        let col2 = document.createElement("div")
        col2.classList.add("col-md-8")
        row.appendChild(col2)
    
        let cardbody = document.createElement("div")
        cardbody.classList.add("card-body")
        col2.appendChild(cardbody)
    
        let cardtitle = document.createElement("h3")
        cardtitle.classList.add("card-title")
        cardbody.appendChild(cardtitle)
    
    
        let carddesc = document.createElement("p")
        carddesc.classList.add("card-text", "text-black-50")
        cardbody.appendChild(carddesc)
    
        let cardprice = document.createElement("p")
        cardprice.classList.add("card-text")
        cardbody.appendChild(cardprice)
    
        let pricesm = document.createElement("small")
        pricesm.classList.add("text-main-color")
        cardprice.appendChild(pricesm)
    
        productsContainer.appendChild(mainCard)
    
        if (productName == "product1"){
            colImg.src = "../imgs/product.png"
            cardtitle.innerText = "Large Baby Bottle 240mm"
            carddesc.innerText = `Keep your baby hydrated using Bebek's special 
            bottle with soft flexible nipple for high-quality healthy breastfeeding.`
            pricesm.innerText = `Price: 004 EGP`
    
        } else if(productName == "product2"){
            colImg.src = "../imgs/product.png"
            cardtitle.innerText = "Small Baby Bottle 180mm"
            carddesc.innerText = `Premium BPA-free plastic is perfect for your
            toddler's health since BPA is identified as harmful to babies' growth.`
            pricesm.innerText = `Price: 003 EGP`
    
        } else if(productName == "product3"){
            colImg.src = "../imgs/product2.png"
            cardtitle.innerText = "Soft Silicone Feeding Nipple"
            carddesc.innerText = `With anti-gas and anti-colic features, Bebek's
            soft nipple will help your newborn to calm down and sleep well.`
            pricesm.innerText = `Price: 002 EGP`
    
        } else if(productName == "product4"){
            colImg.src = "../imgs/product3.png"
            cardtitle.innerText = "Toddler Pacifier"
            carddesc.innerText = `Bebek's pacifier is supported with a clip to prevent 
            it from falling and getting dirty. It can also be easily cleaned or sterilized.`
            pricesm.innerText = `Price: 003 EGP`
    
        }

    }
}

checkoutbtn.addEventListener("click", () =>{
    productsContainer.remove()
    purchase.style.display = "block"
    checkoutbtn.style.display = "none"
    localStorage.clear()
})
