
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














    // Get the add to cart buttons and cart container
const addToCartButtons = document.querySelectorAll('.add-to-cart');
const cartContainer = document.getElementById('cart-container');

// Initialize an empty cart
let cart = [];

// Add event listeners to the buttons
addToCartButtons.forEach(button => {
  button.addEventListener('click', () => {
    const productId = button.dataset.productId;
    // Add the product to the cart
    cart.push({ productId, quantity: 1 });
    // Update the cart display
    updateCartDisplay();
  });
});

// Function to update the cart display
function updateCartDisplay() {
  cartContainer.innerHTML = '';
  cart.forEach(item => {
    const cartItem = document.createElement('div');
    cartItem.textContent = `Product ${item.productId} - Quantity: ${item.quantity}`;
    cartContainer.appendChild(cartItem);
  });
}


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