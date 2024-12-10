const products=[
    {
        id:1,
        image:"./../image-waffle-desktop.jpg",
        name:"Waffle",
        long:"  Waffle with Berries",
        price:6.50,
    },
    {
        id:2,
        image:"./../image-creme-brulee-desktop.jpg",
        name:" Crème Brûlée",
        long:"  Vanilla Bean Crème Brûlée",
        price:7.3,
    },
    {
        id:3,
        image:"./../image-macaron-desktop.jpg",
        name:" Macaron",
        long:"   Macaron Mix of Five",
        price:8.10,
    },
    {
        id:4,
        image:"./../image-tiramisu-desktop.jpg",
        name:"  Tiramisu",
        long:"    Classic Tiramisu",
        price:5.50,
    },
    {
        id:5,
        image:"./../image-baklava-desktop.jpg",
        name:"  Baklava",
        long:"     Pistachio Baklava",
        price:4.40,
    },
    {
        id:6,
        image:"./../image-tiramisu-desktop.jpg",
        name:"  kkaklava",
        long:"     Pistachio Baklava",
        price:4.20,
    },
    {
        id:7,
        image:"./../image-baklava-desktop.jpg",
        name:"  aaalava",
        long:" tachio Baklava",
        price:6.50,
    },
    {
        id:8,
        image:"./../image-cake-desktop.jpg",
        name:"  cake",
        long:" tachio cake",
        price:8.40,
    },
    {
        id:9,
        image:"./../image-brownie-desktop.jpg",
        name:"  cake",
        long:" tachio cake",
        price:8.00,
    },
];
const cards=document.querySelector(".cards");
let quantity=document.querySelector(".quantity");
const rightlist=document.querySelector(".right-lists")
let total=document.querySelector(".total");
const hidden=document.querySelector("#hidden")
function creatlist(){
    products.forEach((value,key)=>{
        let newdev=document.createElement("div");
                newdev.classList.add("card")
                newdev.innerHTML=`<div class="image">
                        <img src=${value.image}>
                        <button onclick="addtocart(${key})" class="btn">add to cart</button>
                    </div>
                    <div class="text">
                        <p>${value.name}</p>
                        <h3> ${value.long}</h3>
                        <span>$${value.price}</span>
                    </div>`
            cards.append(newdev)
    })
}
creatlist();
let productcart=[];

function addtocart(key){
    if(productcart[key]==null){
        productcart[key]=products[key]
        productcart[key].quantity=1
    }
    reloadcart()
}

function reloadcart(){
rightlist.innerHTML="";
let count=0;
let totalprice=0;
productcart.forEach((value,key)=>{
    count=count+value.quantity;
    totalprice=totalprice+value.price;

        if(value !== null){
            
            const newDiv=document.createElement("div");
            newDiv.classList.add("list")
            newDiv.innerHTML=`
                            <img src=${value.image}>
                            <h3>${value.name}</h3>
                            <div class="price">$${value.price}</div>
                            <div>
                            <button onclick="(change(${key},${value.quantity-1}))">-</button>
                            <span>${value.quantity}</span>
                            <button onclick="(change(${key},${value.quantity+1}))">+</button>
                            </div>`
                            rightlist.append(newDiv)
        }
        if(productcart.length >0) {
            document.getElementById("hidden").style.display="none";
            document.getElementById("tprice").style.display="block";
            document.getElementById("btn").style.display="block";

        } else{
             document.getElementById("hidden").style.display="block";
            document.getElementById("tprice").style.display="none";
            document.getElementById("btn").style.display="none";

        }
              
})
quantity.innerHTML=count;
total.innerHTML=totalprice;

}

function change(key,quantity){
    if(quantity==0){
       delete productcart[key]
    }else{
        productcart[key].quantity=quantity
        console.log(products[key].price)
        productcart[key].price=quantity*products[key].price
    }
    reloadcart()  
}


const btn=document.querySelector("#btn")
btn.addEventListener("click",()=>{
    alert("thank you ")
})