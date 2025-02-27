const defaults = {
    cartModal: '.js-ajax-cart-modal', // classname
    cartModalContent: '.js-ajax-cart-modal-content', // classname
    cartModalClose: '.js-ajax-cart-modal-close', // classname
    cartDrawer: '.js-ajax-cart-drawer', // classname
    cartDrawerContent: '.js-ajax-cart-drawer-content-cart', // classname
    cartDrawerClose: '.js-ajax-cart-drawer-close', // classname
    cartDrawerTrigger: '.js-ajax-cart-drawer-trigger', // classname
    cartOverlay: '.js-ajax-cart-overlay', // classname
    cartCounter: '.js-ajax-cart-counter', // classname
    addToCart: '.js-ajax-add-to-cart', // classname
    removeFromCart: '.js-ajax-remove-from-cart', //classname
    removeFromCartNoDot: 'js-ajax-remove-from-cart', //classname,
    checkoutButton: '.js-ajax-checkout-button',
};

const cartModal = document.querySelector(defaults.cartModal);
const cartModalContent = document.querySelector(defaults.cartModalContent);
const cartModalClose = document.querySelector(defaults.cartModalClose);
const cartDrawer = document.querySelector(defaults.cartDrawer);
const cartDrawerContent = document.querySelector(defaults.cartDrawerContent);
const cartDrawerClose = document.querySelector(defaults.cartDrawerClose);
const cartDrawerTrigger = document.querySelector(defaults.cartDrawerTrigger);
const cartOverlay = document.querySelector(defaults.cartOverlay);
const cartCounter = document.querySelector(defaults.cartCounter);
const addToCart = document.querySelectorAll(defaults.addToCart);
let removeFromCart = document.querySelectorAll(defaults.removeFromCart);
const checkoutButton = document.querySelector(defaults.checkoutButton);
const htmlSelector = document.documentElement;

for (let i = 0; i < addToCart.length; i++) {

    addToCart[i].addEventListener('click', function(event) {

        event.preventDefault();
        const formID = this.parentNode.getAttribute('id');
        console.log(formID);

        addProductToCart(formID);

    });

}

function addProductToCart(formID) {
    $.ajax({
        type: 'POST',
        url: '/cart/add.js',
        dataType: 'json',
        data: $('#' + formID)
            .serialize(),
        success: addToCartOk,
        error: addToCartFail,
    });
}

function fetchCart() {
    $.ajax({
        type: 'GET',
        url: '/cart.js',
        dataType: 'json',
        success: function(cart) {
            onCartUpdate(cart);

            if (cart.item_count === 0) {
                cartDrawerContent.innerHTML = '<div class="center-cart-empty">Cart is empty</div>';
                checkoutButton.classList.add('is-hidden');
              	document.getElementById('uvilizer_subtotal_span').innerHTML='<span class="Bold-theme-hook-DO-NOT-DELETE bold_cart_total" style="display:none !important;"></span><span class="money" data-currency-usd="$0.00">$0.00</span>'; 
  	            $('.js-ajax-cart-counter').html(0);
              	if(document.querySelector('.after-premium-add')){
                    PremiumDivs = document.querySelectorAll('.after-premium-add');
                    for (let i = 0; i < PremiumDivs.length; i++) {
                        PremiumDivs[i].style.display='block';
                    }    
                }
            } else {
                renderCart(cart);
                checkoutButton.classList.remove('is-hidden');
            }
			//Currency.convertAll('USD', jQuery('#currencies').val(), 'span.money', 'money_format');
        },
    });
}

function changeItem(line, callback) {
    const quantity = 0;
    $.ajax({
        type: 'POST',
        url: '/cart/change.js',
        data: 'quantity=' + quantity + '&line=' + line,
        dataType: 'json',
        success: function(cart) {
            if ((typeof callback) === 'function') {
                callback(cart);
            } else {
                onCartUpdate(cart);
                fetchCart();
                removeProductFromCart();
            }
        },
    });
}


function changeQty(line, quantity) {
    $.ajax({
        type: 'POST',
        url: '/cart/change.js',
        data: 'quantity=' + quantity + '&line=' + line,
        dataType: 'json',
        success: function(cart) {            
                onCartUpdate(cart);
                fetchCart();
        },
    });
}

function onCartUpdate(cart) {
    console.log('items in the cart?', cart.item_count);
}

function addToCartOk(product) {
    cartModalContent.innerHTML = product.title + ' was added to the cart!';
    cartCounter.innerHTML = Number(cartCounter.innerHTML) + 1;
    openAddModal();
    openCartOverlay();
    fetchCart();
}

function removeProductFromCart() {
    cartCounter.innerHTML = Number(cartCounter.innerHTML) - 1;
}

function addToCartFail() {
    cartModalContent.innerHTML = 'The product you are trying to add is out of stock.';
    openAddModal();
    openCartOverlay();
}

function renderCart(cart) {

    clearCartDrawer();
  
  	var cart_subtotal=0;
  	var cart_qty=0;
  	var is_premium = false;

    cart.items.forEach(function(item, index) {
      
      var strike_price='';
      if(typeof item.properties!='undefined' && item.properties!=null){
        if(typeof item.properties.strike_price!='undefined'){
          var real_strike_price = parseFloat(item.properties.strike_price);
          strike_price='<span class="strike-through"><span class="money" style="margin-right: 10px;" data-currency-usd="$'+real_strike_price.toFixed(2)+'">$'+real_strike_price.toFixed(2)+'</span></span>'
        }
      }

        const productTitle = '<div class="ajax-cart-item__title">' + item.title + '</div>';
        const productImage = '<div class="col-md-5 text-center"><img class="ajax-cart-item__image" src="' + item.image + '" /></div>';
      const productPrice = '<div style="display:none;"><span class="Bold-theme-hook-DO-NOT-DELETE bold_cart_item_price" style="display:none !important;"></span>$'+ ((item.price/100).toFixed(2)) +'</div><div class="ajax-cart-item__price"><span class="Bold-theme-hook-DO-NOT-DELETE bold_cart_item_total" style="display:none !important;"></span>'+strike_price+'<span class="money" data-currency-discount="'+strike_price+'" data-currency-usd="$'+ ((item.price/100).toFixed(2)) +'">$'+ ((item.price/100).toFixed(2)) +'</span></div>';
        const productQuantity = '<div class="ajax-cart-item__quantity"><button class="uvilizer-step-down-button btn cart-item__stepper-button" title="Remove one" ><span aria-hidden="true">-</span></button><span class="theuvilizer-qty">' + item.quantity + '</span><button class="uvilizer-step-up-button btn cart-item__stepper-button" title="Add one" ><span aria-hidden="true">+</span></button></div>';
        const productRemove = '<div class="ajax-cart-item__remove ' + defaults.removeFromCartNoDot + '">Remove</div>';

        const concatProductInfo = '<div class="ajax-cart-item__single row  align-items-center" data-line="' + Number(index + 1) + '">' + productImage +'<div class="col-md-7" >'+ productTitle + productPrice + productQuantity + productRemove + '</div></div>';

        cartDrawerContent.innerHTML = cartDrawerContent.innerHTML + concatProductInfo;
      
      	cart_subtotal+=(item.line_price/100);
       cart_qty+=parseInt(item.quantity);
      
      if(item.title.startsWith('Premium Warranty')){
      	is_premium=true;
      }

    });

    removeFromCart = document.querySelectorAll(defaults.removeFromCart);

    for (let i = 0; i < removeFromCart.length; i++) {
        removeFromCart[i].addEventListener('click', function() {
            const line = this.parentNode.parentNode.getAttribute('data-line');
           
            changeItem(line);
        });
    }
  
  	changeDownCartQty = document.querySelectorAll('.uvilizer-step-down-button');

    for (let i = 0; i < changeDownCartQty.length; i++) {
        changeDownCartQty[i].addEventListener('click', function() {
            const line = this.parentNode.parentNode.parentNode.getAttribute('data-line');
            var qty = parseInt(this.parentNode.querySelector('.theuvilizer-qty').innerHTML,10);
          	if(qty>1){
            	qty -= 1;
          		changeQty(line,qty);
            }
        });
    }
  
  	
  	changeUpCartQty = document.querySelectorAll('.uvilizer-step-up-button');

    for (let i = 0; i < changeUpCartQty.length; i++) {
        changeUpCartQty[i].addEventListener('click', function() {
            const line = this.parentNode.parentNode.parentNode.getAttribute('data-line');
            var qty = parseInt(this.parentNode.querySelector('.theuvilizer-qty').innerHTML,10);
          	qty += 1;
          	changeQty(line,qty);            
        });
    }
  	document.getElementById('uvilizer_subtotal_span').innerHTML='<span class="Bold-theme-hook-DO-NOT-DELETE bold_cart_total" style="display:none !important;"></span><span class="money" data-currency-usd="$'+cart_subtotal.toFixed(2)+'">$'+cart_subtotal.toFixed(2)+'</span>'; 
  	$('.js-ajax-cart-counter').html(cart_qty);	
  	
  	if(document.querySelector('.after-premium-add') && !is_premium){
  		PremiumDivs = document.querySelectorAll('.after-premium-add');
        for (let i = 0; i < PremiumDivs.length; i++) {
            PremiumDivs[i].style.display='block';
        }    
  	}
  	

}

function openCartDrawer() {
    cartDrawer.classList.add('is-open');
    document.querySelector('body').classList.add('full-height-div');    
}

function closeCartDrawer() {
    cartDrawer.classList.remove('is-open');
    document.querySelector('body').classList.remove('full-height-div');
}

function clearCartDrawer() {
    cartDrawerContent.innerHTML = '';
}

function openAddModal() {
    cartModal.classList.add('is-open');
}

function closeAddModal() {
    cartModal.classList.remove('is-open');
}

function openCartOverlay() {
    cartOverlay.classList.add('is-open');
    htmlSelector.classList.add('is-locked');
}

function closeCartOverlay() {
    cartOverlay.classList.remove('is-open');
    htmlSelector.classList.remove('is-locked');
}

cartModalClose.addEventListener('click', function() {
    closeAddModal();
    closeCartOverlay();
});

cartDrawerClose.addEventListener('click', function() {
    closeCartDrawer();
    closeCartOverlay();
});
// cart is empty stanje
cartOverlay.addEventListener('click', function() {
    closeAddModal();
    closeCartDrawer();
    closeCartOverlay();
});

cartDrawerTrigger.addEventListener('click', function(event) {
    event.preventDefault();
    fetchCart();
    openCartDrawer();
    openCartOverlay();
});

document.addEventListener('DOMContentLoaded', function() {
    fetchCart();
});