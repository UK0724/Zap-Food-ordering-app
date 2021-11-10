// var addtocartbuttons = document.getElementsByClassName('cartbutton')
// for(var i=0;i<addtocartbuttons.length;i++)
// {
//     var button = addtocartbuttons[i]
//     button.addEventListener('click', addToCartButtonClicked)
// }
// function addToCartButtonClicked(event)
// {
//     var button  = event.target
//     var cartItem = button.parentElement.parentElement
//     var title = cartItem.getElementsByClassName('cart-name')[0].innerText
//     var img = cartItem.getElementsByClassName('cart-img')[0].src
//     var price = cartItem.getElementsByClassName('cart-price')[0].innerText
//     // console.log(title,img,price)
//     localStorage.setItem('title',title)
//     localStorage.setItem('image',img)
//     localStorage.setItem('price',price)
//     axios.post('https://6183e43b91d76c00172d1c72.mockapi.io/user',
//     {
//         'title':title,
//         'image':img,
//         'price':price
//     }).then((res)=>console.log(res))
//     .catch((err) => console.log(err))
//     // alert('Item added!')
//     // window.location.href = 'cart.html'
// }


let heading = document.querySelectorAll('.heading')
for(var i =0;i<heading.length;i++)
{
    button = heading[i]
    button.addEventListener('click',display)
}

function display(event)
{
    button = event.target
    console.log(button.innerText);
    let tali = document.getElementsByClassName('tali')[0]
    let burger = document.getElementsByClassName('burger')[0]
    let snacks = document.getElementsByClassName('snacks')[0]
    tali.style.display = 'none'
    burger.style.display = 'none'
    snacks.style.display = 'none'
    if (button.innerText == 'Non-veg')
    {
        if( tali.style.display == 'none')
        {
            tali.style.display = 'grid'
        }
        else if(tali.style.display == 'grid')
        {
            tali.style.display = 'none'
        }       
    }
    else if(button.innerText == 'Veg')
    {
        console.log('burger');
        
        if( burger.style.display == 'none')
        {
            burger.style.display = 'grid'
        }
        else if(burger.style.display == 'none')
        {
            burger.style.display = 'grid'
        }
    }
    else
    {   
        if( snacks.style.display == 'none')
        {
            snacks.style.display = 'grid'
        }
        else if(snacks.style.display == 'grid')
        {
            snacks.style.display = 'none'
        }
    }
}