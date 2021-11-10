var title = localStorage.getItem('title')
var img = localStorage.getItem('image')
var price = localStorage.getItem('price')
let buttonclick = document.getElementsByClassName('btn-danger')


for(var i=0;i<buttonclick.length;i++)
{
    var button = buttonclick[i]
    button.addEventListener('click', removeItem)
}

function removeItem(event)
{
    let button = event.target
    button.parentElement.parentElement.remove()
    updateCartTotal()
}
window.onload = addItemTOCart(title,img,price)
window.onload = updateCartTotal()

console.log(title,img,price);
let n = fetch('https://6183e43b91d76c00172d1c72.mockapi.io/user')
.then(res=>res.json())
.then(data => data.map((ele)=>
{
    return ele.title 
}))
.catch((err) => console.log(err))

console.log(n);

// addItemTOCart(title,img,price)
function addItemTOCart(title,img,price)
{
    var cartRow = document.createElement('div')
    cartRow.classList.add('cart-row')
    var cartitems = document.getElementsByClassName('cart-items')[0]
    var carItemsNames = cartitems.getElementsByClassName('cart-item-title')
    for(var i=0;i<carItemsNames.length;i++)
    {
        if(carItemsNames[i].innerHTML == title)
        {
            alert('alredy added!')
            return
        }
    }
    var cartRowContents = `<div class="cart-ITEM cart-column">
    <img class="cart-item-image" src="${img}" alt="" >
    <span class="cart-item-title">${title}</span>
    </div>
    <span class="cart-PRICE cart-column">${price}</span>
    <div class="cart-quantity cart-column">
    <input class="cart-quantity-input" type="number" value="1">
    <button class="btn btn-danger" type="button">REMOVE</button>
    </div>`
    cartRow.innerHTML += cartRowContents
    cartitems.append(cartRow)
    cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click',removeItem)
    cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change',quantityChanged)
}

var quantityInput = document.getElementsByClassName('cart-quantity-input')
for(var i=0;i<quantityInput.length;i++)
{
    var input = quantityInput[i]
    input.addEventListener('change', quantityChanged)
}

function quantityChanged(event)
{
    var input = event.target
    if(isNaN(input.value) || input.value <= 0)
    {
        input.value = 1
    }
    updateCartTotal()
}

function updateCartTotal()
{
    var cartItemContainer = document.getElementsByClassName('cart-items')[0]
    var cartRows = cartItemContainer.getElementsByClassName("cart-row")
    var total = 0
    for(var i=0;i<cartRows.length;i++)
    {
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName('cart-PRICE')[0]
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
        var price =  parseFloat(priceElement.innerText.replace("RS:",''))
        var quantity = quantityElement.value
        total += price*quantity
    }
    total = Math.round(total * 100) / 100
    document.getElementsByClassName('cart-total-price')[0].innerText ="RS:" +total
}


var button = document.getElementById('goback')
button.addEventListener('click',goback)
function goback()
{
    window.location.href = 'sample.html'
}

