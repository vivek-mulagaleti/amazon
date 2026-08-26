class Cart{
    cartItems;
    localStorageKey;

    constructor(localStorageKey){
        this.localStorageKey= localStorageKey;
        this.loadFromStorage();
    }
    loadFromStorage() {
    this.cartItems = JSON.parse(localStorage.getItem(this.localStorageKey));

    if (!this.cartItems) {
      this.cartItems = [
        {
          productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
          quantity: 2,
          deliveryOptionId: "1",
        },
        {
          productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
          quantity: 1,
          deliveryOptionId: "2",
        },
      ];
    }
  }
  saveToStorage() {
    localStorage.setItem(this.localStorageKey, JSON.stringify(this.cartItems));
  }

  addToCart(productId) {
    let matching;

    this.cartItems.forEach((cartItem) => {
      if (productId === cartItem.productId) {
        matching = cartItem;
      }
    });

    if (matching) {
      matching.quantity++;
    } else {
      this.cartItems.push({
        productId: productId,
        quantity: 1,
        deliveryOptionId: "1",
      });
    }

    this.saveToStorage();
  }

  removeFromCart(productId) {
    const newCart = [];

    this.cartItemscart.forEach((cartItem) => {
      if (cartItem.productId !== productId) {
        newCart.push(cartItem);
      }
    });

    this.cartItemst = newCart;
    this.saveToStorage();
  }


  updateDeliveryOption(productId, deliveryOptionId) {
    let matching;

    this.cartItems.forEach((cartItem) => {
      if (productId === cartItem.productId) {
        matching = cartItem;
      }
    });

    if (matching) {
      matching.deliveryOptionId = deliveryOptionId;
    }

    this.saveToStorage();
  }
}


const cart=new Cart('cart-oop');


console.log(cart);
