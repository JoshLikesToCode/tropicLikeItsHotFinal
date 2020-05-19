	if (document.readyState == 'loading') {
   		 document.addEventListener('DOMContentLoaded', ready);
	} else { // ready
	    	ready();
	}

	function ready() {
		// clear cart
   		var removeCartItemBtn = document.getElementsByClassName('btn-danger');
    		for (var j = 0; j < removeCartItemBtn.length; j++) {
       			var button = removeCartItemBtn[j];
        		button.addEventListener('click', removeCartItem);
   	 }

    	var quantityInputs = document.getElementsByClassName('cart-quantity-input');
    		for (var j = 0; j < quantityInputs.length; i++) {
        		var input = quantityInputs[j];
        		input.addEventListener('change', quantityChanged);
    	}

    	var addToCartBtn = document.getElementsByClassName('btn-primary');
    		for (var j = 0; j < addToCartBtn.length; j++) {
        		var button = addToCartBtn[j];
        		button.addEventListener('click', addToCartClicked);
    	}

   	document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseClicked);
	}
	
	// purchase made
	function purchaseClicked() {
    	//alert('TropicLikeItsHot would like to thank you for your purchase!');
    	var cartItems = document.getElementsByClassName('cart-items')[0];
    		while (cartItems.hasChildNodes()) {
        		cartItems.removeChild(cartItems.firstChild);
    		}
   	 updateCartTotal();
	}

	function removeCartItem(event) {
    		var btnClicked = event.target;
   		btnClicked.parentElement.parentElement.remove();
    		updateCartTotal();
	}
	
	// add more fruits
	function quantityChanged(event) {
    	var input = event.target;
	// use isNaN & loop to verify legal quantity
    	if (isNaN(input.value) || input.value <= 0) {
        	input.value = 1;
    	}
    	updateCartTotal();
	}

	function addToCartClicked(event) {
    		var button = event.target;
   	 	var shopItem = button.parentElement.parentElement;
		// add product title
    		var title = shopItem.getElementsByClassName('shop-item-title')[0].innerText;
		// add product price
    		var price = shopItem.getElementsByClassName('shop-item-price')[0].innerText;
		// add product img
    		var imageSrc = shopItem.getElementsByClassName('shop-item-image')[0].src;
		// add all of the above to cart
    		addItemToCart(title, price, imageSrc);
    		updateCartTotal();
	}

	function addItemToCart(title, price, imageSrc) {
    		var cartRow = document.createElement('div');
    		cartRow.classList.add('cart-row');
    		var cartItems = document.getElementsByClassName('cart-items')[0];
    		var cartItemNames = cartItems.getElementsByClassName('cart-item-title');
    		for (var j = 0; j < cartItemNames.length; j++) {
        		if (cartItemNames[j].innerText == title) {
            			alert('Please dont add items twice, you can adjust the quantity of your order in the cart');
            			return;
        	}
    	}

	// put it all together
    	var cartRowContents = `
        	<div class="cart-item cart-col">
            		<img class="cart-item-image" src="${imageSrc}" width="100" height="100">
            		<span class="cart-item-title">${title}</span>
        	</div>
        	<span class="cart-price cart-col">${price}</span>
        	<div class="cart-quantity cart-col">
            		<input class="cart-quantity-input" type="number" value="1">
            		<button class="btn btn-danger" type="button">REMOVE</button>
        	</div>`

    	cartRow.innerHTML = cartRowContents;
    	cartItems.append(cartRow);
    	cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem);
    	cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged);
	}

	function updateCartTotal() {
    		var cartItemContainer = document.getElementsByClassName('cart-items')[0];
    		var cartRows = cartItemContainer.getElementsByClassName('cart-row');
    		var total = 0;
    		for (var j = 0; j < cartRows.length; j++) {
        		var cartRow = cartRows[j];
        		var priceElement = cartRow.getElementsByClassName('cart-price')[0];
        		var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0];
        		var price = parseFloat(priceElement.innerText.replace('$', ''));
        		var quantity = quantityElement.value;
			// get total
        		total = total + (price * quantity);
    		}	
	// make total display as whole number
    	total = Math.round(total * 100) / 100;
	// display total
    	document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total;
	}




	function passvalues() {
		var theTotal =
			document.getElementsByClassName('cart-total-price')[0].innerText;
			localStorage.setItem("key", theTotal);
			return false;
	}
