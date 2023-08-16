import {useState} from 'react';
import Footer from '../components/Footer';
import LogoImage from '../assets/Rectangle 28.png';
import './RestaurantPage.css';

interface CartItem {
  name: string;
  price: number;
  quantity: number;
  description: string; 
}

const Cart: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([
      {
        name: 'Brunch for 2 - Veg',
        price: 599,
        quantity: 1,
        description:
          'Brunch: One meal to rule them all! Grab this mega saver combo with your choice of 2 veg wraps, Aloo Paratha (2 pcs), chole and Curd lunchbox and 2 choco lava cakes. This is just bliss on a plate!',
      },
  ]);

  const handleAddToCart = (item: CartItem) => {
    const existingItem = cartItems.find(cartItem => cartItem.name === item.name);

    if (existingItem) {
      setCartItems(prevCartItems =>
        prevCartItems.map(cartItem =>
          cartItem.name === item.name
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      setCartItems(prevCartItems => [...prevCartItems, { ...item, quantity: 1 }]);
    }
  };

  const handleRemoveFromCart = (item: CartItem) => {
    const existingItem = cartItems.find(cartItem => cartItem.name === item.name);

    if (existingItem && existingItem.quantity > 1) {
      setCartItems(prevCartItems =>
        prevCartItems.map(cartItem =>
          cartItem.name === item.name
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        )
      );
    } else {
      setCartItems(prevCartItems =>
        prevCartItems.filter(cartItem => cartItem.name !== item.name)
      );
    }
  };

  const cartTotal = cartItems.reduce((total, cartItem) => total + cartItem.price * cartItem.quantity, 0);


  return (
    <>
      <section className='containerHeader'>
        <div className='restaurantImage'>
          <img src={LogoImage} alt="Imagem de comida" />
        </div>
        <div className='restaurantDescription'>
          <p className='titleRestaurant'>LunchBox - Meals and Thalis</p>
          <p>north indian, punjabi</p>
          <div className='restaurantInfo'>
            <div className='containerInfo'>
              <p><i className="fa-solid fa-star"></i> 4.0</p>
              <p>100+ ratings</p>
            </div>
            <div className='containerInfo'>
              <p>30min</p>
              <p>Deliery Time</p>
            </div>
            <div>
              <p>200</p>
              <p>Cost for two</p>
            </div>
          </div>
        </div>
        <div className='containerOffers'>
          <p className='orange-text offers'>Offers</p>
          <p> <i className="fa-solid fa-tag fa-rotate-90"></i> 50% off up to ₹100 | Use code TRYNEW</p>
          <p> <i className="fa-solid fa-tag fa-rotate-90"></i> 20% off | Use code PARTY</p>
        </div>
      </section>
      <main className='containerMenu'>
        <div className='menuFoods'>
          <p className='orange-text'>Recommended</p>
          <p>Breakfast Box</p>
          <p>Lunch Box</p>
          <p>Combo box</p>
          <p>Biriyani Box</p>
        </div>
        <div className='portionDishes'>
        {cartItems.map((cartItem, index) => (
            <div key={index}>
              <p>{cartItem.name}</p>
              <p>{cartItem.price}</p>
              <p>{cartItem.description}</p>
              <button onClick={() => handleAddToCart(cartItem)}>Add+</button>
            </div>
        ))}
        </div>
        {cartItems.length > 0 && (
          <div className='containerCart'>
            <div className='titleCart'>
              <p className='cart'>Cart</p>
              <p>{cartItems.length} items</p>
            </div>
            <p>from <span className='orange-text'>Lunch box</span></p>
            {cartItems.map((cartItem, index) => (
              <div key={index} className='item'>
                <p>{cartItem.name}</p>
                <p>
                  - {cartItem.quantity} {cartItem.quantity > 1 ? 'units' : 'unit'}
                  <button onClick={() => handleRemoveFromCart(cartItem)}>-</button>
                  <button onClick={() => handleAddToCart(cartItem)}>+</button>
                </p>
              </div>
            ))}

              <div  className='subTotalTitle'>
                <p>Subtotal</p>
                <p>₹{cartTotal}</p>
              </div>
              <p className='gray-text'>Extra charges may apply</p>
              <button className='checkout_btn' >Checkout</button>
            </div>
         
        )}
      </main>

      <Footer/>
    </>
  );
};

export default Cart;

