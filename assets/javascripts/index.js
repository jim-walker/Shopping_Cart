$(document).ready(function () {

  var itemList = [
      {
          item:'Alex Reiger\'s Hack License',
          category:'80s',
          filtered:'false',
          cart:'false'
      },
      {
          item:'Arthur Fonserelli\'s Jacket',
          category:'70s',
          filtered:'false',
          cart:'false'
      },
      {
          item:'Jamie Sommers\' Tennis Racket',
          category:'70s',
          filtered:'false',
          cart:'false'
      },
  ];

const renderCat= function() {
    clearCat();
    for( let i = 0; i < itemList.length; i++ ) {
        if (itemList[i].filtered==='false'){
            const itemBtn = $('<button>');
            itemBtn.addClass('btn w-100 m-2');
            itemBtn.attr('item', itemList[i].item);
            itemBtn.attr('index', i);
            itemBtn.text(itemList[i].item);
            $('#listCat').append(itemBtn);
        }
    }
}

const renderCart = function() {
    clearCart();
    for( let i = 0; i < itemList.length; i++ ) {
        if (itemList[i].cart==='true'){
            const cartBtn = $('<button>');
            cartBtn.addClass(`btn btn-outline-success w-100 m-2`);
            cartBtn.attr('item', itemList[i].item);
            cartBtn.attr('index', i);
            cartBtn.text(itemList[i].item);
            $('#listCart').append(cartBtn);
        }
    }
}

const clearCat = function () {
    $('#listCat').empty();
}

const clearCart = function () {
    $('#listCart').empty();
}

renderCat();

const addItemToCart = function() {
    itemIndex=$(this).attr("index");
    if (itemList[itemIndex].cart==='false'){
        itemList[itemIndex].cart='true';
        renderCart();
    } else {
        alert(`Item is already in Shopping Cart`)
    }
}

const removeItemFromCart = function() {
    itemIndex=$(this).attr("index");
    itemList[itemIndex].cart='false';
    renderCart();
    } 

const unFiltered= function() {
    for( let i = 0; i < itemList.length; i++ ) {
        itemList[i].filtered='false';
    }
    renderCat();
}
const decadeFilter= function() {
    for( let i = 0; i < itemList.length; i++ ) {
        if (itemList[i].category===$(this).attr("value")){
            itemList[i].filtered='true';
        }
    }
    renderCat();
}

const resetCart=function() {
    for( let i = 0; i < itemList.length; i++ ) {
        itemList[i].cart='false';
    }
    renderCart();
}

  $('#all').on('click', unFiltered);
  $('#70s').on('click', decadeFilter);
  $('#80s').on('click', decadeFilter);
  $('#listCat').on('click', '.btn', addItemToCart);
  $('#listCart').on('click', '.btn', removeItemFromCart);
  $('#clearCart').on('click', resetCart);
});