  var itemList = [
      {
          item:'Alex Reiger\'s Hack License',
          category:'80\'s TV',
          filtered:'false',
          cart:'false'
      },
      {
          item:'Arthur Fonserelli\'s Jacket',
          category:'70\'s TV',
          filtered:'false',
          cart:'false'
      },
      {
          item:'Jamie Sommers\' Tennis Racket',
          category:'70\'s TV',
          filtered:'false',
          cart:'false'
      },
  ];

    const initData = function() {
    for( let i = 0; i < itemList.length; i++ ) {
      const itemBtn = $('<button>');
      itemBtn.addClass('btn w-100 m-2');
      itemBtn.attr('item', itemList[i].item);
      itemBtn.attr('category', itemList[i].category);
      itemBtn.attr('filtered', itemList[i].filtered);
      itemBtn.attr('cart', itemList[i].cart);
      itemBtn.text(itemList[i].item);
      $('#catalog').append(itemBtn);
    }
  }
  
  initData();

const addItemToCart = function() {
    if ($(this).attr("cart") === 'false'){
    $(this).attr("cart","true")
    const item = $('<h2>').addClass('btn btn-outline-success w-100 m-2');
    item.text($(this).attr("item"));
    $('#listContent').append(item);
    }
}

const changeColor=function(){
    console.log(this);
    const dItem=$(this).addClass('btn-outline-danger');
    $('#listContent').append(dItem);
}
const revertColor=function(){
    console.log(this);
    const rItem=$(this).removeClass('btn-outline-danger');
    $('#listContent').append(rItem);
}

  $('#catalog').on('click', '.btn', addItemToCart);
  $('#listContent').one('mouseenter', '.btn', changeColor);
  $('#listContent').one('mouseleave', '.btn', revertColor);