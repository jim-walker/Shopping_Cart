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
    let tester = $(this).attr("cart");
    if ($(this).attr("cart") === 'false'){
    const item = $('<div>').addClass('text-success');
    item.text($(this).attr("item"));
    $('#listContent').append(item);
    }
}

  $('#catalog').on('click', '.btn', addItemToCart);