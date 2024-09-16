
let mark=document.getElementById('sidebar')
mark.style.marginLeft='-100px'
document.getElementById('menu-toggle').addEventListener('click', function() {
   document.getElementById('sidebar').classList.toggle('active');
 mark.style.margin='0px'
 mark.style.transition ='transform 0.5s ease';

 mark.style.width='250px'
 
});

document.getElementById('close-btn').addEventListener('click', function() {
   document.getElementById('sidebar').classList.remove('active');
    mark.style.margin='-300px'
    mark.style.transition ='transform 0.5s ease';
    body.style.opacity='0%'
  
});

let cros=document.getElementById('menu-toggle')
cros.addEventListener('mouseover',function(){
 cros.style.transform='rotatey(60deg)'
 cros.style.transition ='transform 0.3s ease';
 cros.style.color='red'
 cros.style.fontSize='24px'
 
   
});
cros.addEventListener('mouseout',function(){
   cros.style.transform='rotatey(0deg)'
   cros.style.fontSize='24px'
   cros.style. outline='0px ';
    cros.style.color='black'
});
let addcart=document.querySelectorAll('#addtocart')
addcart.forEach((item)=>{
item.addEventListener('mouseover',function(){
   item.style.color='white'
   item.style.backgroundColor='red'
   


})

})


addcart.forEach((item)=>{
item.addEventListener('mouseout',function(){
   item.style.color='black'
   item.style.backgroundColor='#F5F7F8'
  

})

})



let line=document.querySelectorAll('#underline')
line.forEach((items)=>{
items.addEventListener('mouseover',function(){
   items.style.textDecoration='underline';
   

})
})

line.forEach((items)=>{
   items.addEventListener('mouseout',function(){
      items.style.textDecoration='none';
      
   
   })
   });


   let Hoverme=document.querySelectorAll('.Hoverme')
   Hoverme.forEach((hover)=>{
     hover.addEventListener('mouseover',function(){
      hover.style.boxShadow = '5px 5px 10px rgba(0, 0, 0, 0.5)';
      hover.style.transition = 'transform 0.3s ease';
hover.style.transform = 'translate(0, 0) scale(1)';
hover.style.padding='20px'
     })
   })


   Hoverme.forEach((hover)=>{
      hover.addEventListener('mouseout',function(){
       hover.style.border= 'none'
       hover.style.boxShadow = '0px 0px 0px rgba(0, 0, 0, 0.0)';
       hover.style.outline='none'
      })
    })














//     // Get the add to cart buttons and cart container
// const addToCartButtons = document.querySelectorAll('.add-to-cart');
// const cartContainer = document.getElementById('cart-container');

// // Initialize an empty cart
// let cart = [];

// // Add event listeners to the buttons
// addToCartButtons.forEach(button => {
//   button.addEventListener('click', () => {
//     const productId = button.dataset.productId;
//     // Add the product to the cart
//     cart.push({ productId, quantity: 1 });
//     // Update the cart display
//     updateCartDisplay();
//   });
// });

// // Function to update the cart display
// function updateCartDisplay() {
//   cartContainer.innerHTML = '';
//   cart.forEach(item => {
//     const cartItem = document.createElement('div');
//     cartItem.textContent = `Product ${item.productId} - Quantity: ${item.quantity}`;
//     cartContainer.appendChild(cartItem);
//   });
// }


// let items = [];

// function addItem(itemName, itemPrice) {
//    let newItem = {
//      name: itemName,
//      price: itemPrice
//    };
//    items.push(newItem);
//  }
//  function displayItems() {
//    let itemList = '';
//    for (let i = 0; i < items.length; i++) {
//      itemList += `<li>${items[i].name} - ${items[i].price}</li>`;
//    }
//    document.getElementById('item-list').innerHTML = itemList;
//  }




//  let items = [];

//  function addItem(itemName, itemPrice) {
//    let newItem = {
//      name: itemName,
//      price: itemPrice
//    };
//    items.push(newItem);
//    displayItems();
//  }

//  function displayItems() {
//    let itemList = '';
//    for (let i = 0; i < items.length; i++) {
//      itemList += `<li>${items[i].name} - ${items[i].price}</li>`;
//    }
//    document.getElementById('item-list').innerHTML = itemList;
//  }

// document.getElementById("addtocart").addEventListener("click", function() {
//    // Get all the child elements of Hoverme
//    var hovermeContent = document.querySelectorAll("#Hoverme div");

//    // Loop through the elements and clone each one to add to cart-container
//    hovermeContent.forEach(function(item) {
//        var cartContainer = document.getElementById("cart-container");
//        var clonedItem = item.cloneNode(true); // Clone the full element (including images and other content)
//        cartContainer.appendChild(clonedItem);
//    });
// });
// let openshoping= document.querySelector('.shoping')
// let closeshoping= document.querySelector('.closeshoping')
// let list=document.querySelector('.list')
// let listcard=document.querySelector('.listcard')
// let body=document.querySelector('body')
// let total=document.querySelector('.total')
// let quantity=document.querySelector('.quantity')
// openshoping.addEventListener('click',()=>{
//    body.classList.add('active')
// })
// closeshopingshoping.addEventListener('click',()=>{
//    body.classList.remove('active')
// })
// let Products=[
// {
//    id:1,
//    name:'product name 1',
//    image:'1 PNG',
//    price:12000,
// },
// {
//    id:1,
//    name:'product name 2',
//    image:'2 PNG',
//    price:17000,
// },

// {
//    id:1,
//    name:'product name 3',
//    image:'3 PNG',
//    price:19000,
// },

// {
//    id:1,
//    name:'product name 4',
//    image:'4 PNG',
//    price:13000,
// },

// {
//    id:1,
//    name:'product name 5',
//    image:'5 PNG',
//    price:92000,
// },
// {
//    id:1,
//    name:'product name 6',
//    image:'6 PNG',
//    price:52000,
// }
// {
//    id:1,
//    name:'product name 7',
//    image:'7 PNG',
//    price:32000,
// },
// {
//    id:1,
//    name:'product name 8',
//    image:'8 PNG',
//    price:22000,
// }



// ];
// let listcards =[];
//  function initapp(){
// Products.forEach((value,key)=>{
//    let newdiv=document.createElement('div')
//    newdiv.classList.add('item')
//    newdiv.textContent=`
//    <img src="image/${value.image}"
//    <div class="title">${value.name}</div>
//    <div class="price">${value.price.toLocaleString()}</div>
//    <button onclick=" addtocard(${key})">Add to card </button>
//    `
//    list.appendChild('mewdiv');
// })


//  }
// initapp();
// function addtocard(key){
//    if (listcards[key]==null) {
//       listcards[key]=Products[key];
//       listcards[key].quantity=1;
//       reloadcard();
      
//    }
// }
// function reloadcard(){
//    listcard.textContent='';
//    let count=0;
//    let totalprice=0;
//    listcards.forEach((value,key)=>{
//       totalprice=totalprice+value.price
//       count=count+value.quantity;
//       if (!value ==null) {
//          let newdiv=document.createElement('li')
//          newdiv.textContent=`
//          <div> img src="image/${value.image}"/> </div>
//          <div>${value.name}</div>
//          <div>${value.price.toLocaleString()}</div>
//          <div>${value.quantity}</div>

//          <div>
//          <button onclick="changeQuantity(${key},${value.quantity - 1}})">-</button>
        
//          <div class="count">${value.quantity} <button onclick="changeQuantity(${key},${value.quantity + 1}})">+</button>
         

//          </div>
//          </div>
//          `;
//          listcard.appendChild('newdiv')
         
//       }
//    })
//    total.textContent=totalprice.toLocaleString();
//    quantity.textContent=count;
// }function changeQuantity(key,quantity){
//    if (quantity==0) {
//       delete listcards[key];
//    }else{
//       listcards[key].quantity=quantity;
//    }listcards[key].price=quantity*Products[key].price;
// reloadcard();
// }












































// let openshoping = document.querySelector('.shopping-card');
// let closeshoping = document.querySelector('.closeshoping');
// let list = document.querySelector('.list');
// let listcard = document.querySelector('.listcard');
// let body = document.querySelector('body');
// let total = document.querySelector('.total');
// let quantity = document.querySelector('.quantity');

// // Open and close shopping cart
// openshoping.addEventListener('click', () => {
//    body.classList.add('active');
// });
// closeshoping.addEventListener('click', () => {
//    body.classList.remove('active');
// });

// // Product list
// let Products = [
//     { id: 1, name: 'Product Name 1', image: '01s.png', price: 12000 },
//     { id: 2, name: 'Product Name 2', image: '02s.png', price: 17000 },
//     { id: 3, name: 'Product Name 3', image: '03s.png', price: 19000 },
//     { id: 4, name: 'Product Name 4', image: '04s.png', price: 13000 },
//     { id: 5, name: 'Product Name 5', image: '05s.png', price: 92000 },
//     { id: 6, name: 'Product Name 6', image: '06s.png', price: 52000 },
//     { id: 7, name: 'Product Name 7', image: '07s.png', price: 32000 },
//     { id: 8, name: 'Product Name 8', image: '08s.png', price: 22000 },
//     { id: 9, name: 'Product Name 9', image: '09s.png', price: 21000 },
//     { id: 10, name: 'Product Name 10', image: '10s.png', price: 25000 },
//     { id: 11, name: 'Product Name 11', image: '11s.png', price: 20000 },
//     { id: 12, name: 'Product Name 12', image: '12s.png', price: 11000 },
// ];

// // Cart array to store selected products
// let listcards = [];

// // Initialize app to display products
// function initapp() {
//     Products.forEach((value, key) => {
//         let newdiv = document.createElement('div');
//         newdiv.classList.add('item');
//         newdiv.innerHTML = `
//             <img src="images/${value.image}" alt="${value.name}" />
//             <div class="title">${value.name}</div>
//             <div class="price">${value.price.toLocaleString()}</div>
//             <button onclick="addtocart(${key})">Add to Cart</button>
            
//         `;
//         list.appendChild(newdiv);
//     });
// }

// // Function to add products to the cart
// function addtocart(key) {
//     let product = Products[key];
//     if (!listcards[product.id]) {
//         listcards[product.id] = { ...product, quantity: 1 };
//     } else {
//         listcards[product.id].quantity++;
//     }
//     reloadcart();
// }

// // Function to reload the cart and update total and quantity
// function reloadcart() {
//     listcard.innerHTML = '';
//     let count = 0;
//     let totalprice = 0;

//     Object.values(listcards).forEach((value) => {
//         if (value) {
//             let newdiv = document.createElement('li');
//             newdiv.innerHTML = `
//                 <div><img src="images/${value.image}" alt="${value.name}"/></div>
//                 <div>${value.name}</div>
//                 <div>${value.price.toLocaleString()}</div>
//                 <div>Quantity: ${value.quantity}</div>
//                 <div>
//                     <button onclick="changeQuantity(${value.id}, ${value.quantity - 1})">-</button>
//                     <span>${value.quantity}</span>
//                     <button onclick="changeQuantity(${value.id}, ${value.quantity + 1})">+</button>
//                 </div>
//             `;
//             listcard.appendChild(newdiv);

//             count += value.quantity;
//             totalprice += value.price * value.quantity;
//         }
//     });

//     total.textContent = totalprice.toLocaleString();
//     quantity.textContent = count;
// }

// // Function to change quantity of items in the cart
// function changeQuantity(id, qty) {
//     if (qty <= 0) {
//         delete listcards[id];
//     } else {
//         listcards[id].quantity = qty;
//     }
//     reloadcart();
// }

// // Initialize the app
// initapp();


let openshoping = document.querySelector('.shopping-card');

let list = document.querySelector('.list');
let listcard = document.querySelector('.listcard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

let Products = [
    { id: 1, name: 'Product Name 1', image: '01s.png', price: 12000 },
        { id: 2, name: 'Product Name 2', image: '02s.png', price: 17000 },
        { id: 3, name: 'Product Name 3', image: '03s.png', price: 19000 },
         { id: 4, name: 'Product Name 4', image: '04s.png', price: 13000 },
         { id: 5, name: 'Product Name 5', image: '05s.png', price: 92000 },
         { id: 6, name: 'Product Name 6', image: '06s.png', price: 52000 },
         { id: 7, name: 'Product Name 7', image: '07s.png', price: 32000 },
         { id: 8, name: 'Product Name 8', image: '08s.png', price: 22000 },
        { id: 9, name: 'Product Name 9', image: '09s.png', price: 21000 },
        { id: 10, name: 'Product Name 10', image: '10s.png', price: 25000 },
         { id: 11, name: 'Product Name 11', image: '11s.png', price: 20000 },
         { id: 12, name: 'Product Name 12', image: '12s.png', price: 11000 }
];


let listcards = [];


function initapp() {
    Products.forEach((value, key) => {
        let newdiv = document.createElement('div');
        newdiv.classList.add('item');
        newdiv.innerHTML = `
          <div><img src="images/${value.image}" alt="${value.name}"/></div>
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addtocart(${key})">Add to Cart</button>
        `;
        list.appendChild(newdiv);
    });
}

function addtocart(key) {
    let product = Products[key];
    if (!listcards[product.id]) {
        listcards[product.id] = { ...product, quantity: 1 };
    } else {
        listcards[product.id].quantity++;
    }
    reloadcart();
}


function reloadcart() {
    listcard.innerHTML = '';
    let count = 0;
    let totalprice = 0;

    Object.values(listcards).forEach((value) => {
        if (value) {
            let newdiv = document.createElement('li');
            newdiv.innerHTML = `
                <div><img src="images/${value.image}" alt="${value.name}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>Quantity: ${value.quantity}</div>
                <div>
                    <button onclick="changeQuantity(${value.id}, ${value.quantity - 1})">-</button>
                    <span>${value.quantity}</span>
                    <button onclick="changeQuantity(${value.id}, ${value.quantity + 1})">+</button>
                </div>
            `;
            listcard.appendChild(newdiv);

            count += value.quantity;
            totalprice += value.price * value.quantity;
        }
    });

    total.textContent = totalprice.toLocaleString();
    quantity.textContent = count;
}


function changeQuantity(id, qty) {
    if (qty <= 0) {
        delete listcards[id];
    } else {
        listcards[id].quantity = qty;
    }
    reloadcart();
}

initapp();
