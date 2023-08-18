import {useEffect, useState} from 'react';
import Footer from '../components/Footer';
import LogoImage from '../assets/Rectangle 28.png';
import './RestaurantPage.css';
import axios from 'axios';
import { useParams } from 'react-router-dom';

interface Restaurants{
  name:string;
  rating: number;
  deliveryTime: string;
  topDishes: Dishes[]; 
}

interface Dishes{
  name: string;
  price: number;
  description: string;
}

const API_URL = "https://parseapi.back4app.com/graphql";

const HEADERS = {
  'X-Parse-Application-Id': 'DSiIkHz2MVbCZutKS7abtgrRVsiLNNGcs0L7VsNL',
  'X-Parse-Master-Key': '0cpnqkSUKVkIDlQrNxameA6OmjxmrA72tsUMqVG9',
  'X-Parse-Client-Key': 'zXOqJ2k44R6xQqqlpPuizAr3rs58RhHXfU7Aj20V',
  'Content-Type': 'application/json',
};

const Cart: React.FC = () => {

  const { id } = useParams();
  const[restaurants, setRestaurants] = useState<Restaurants>();
  const [dishes, setDishes] = useState<Dishes[]>([]);

  useEffect(() => {
    const data = {
      query: `
        query GetRestaurantById {
          fitMe(id: "${id}") {
            name
            image
            location
            topDishes {
              ...AllDishes
            }
          }
        }
        fragment AllDishes on Dish {
          name
          description
          image
          price
        }
      `
    };

    axios.post(API_URL, data , { headers : HEADERS})
      .then((response) => {
        console.log("Restaurant data successfully:", response.data); 
       
        const restaurants = response.data.data.fitMe; 
        const dishes = response.data.data.fitMe.topDishes;
        
        setRestaurants(response.data.data.fitMe);
        console.log("Restaurants data:", restaurants);
        
        setDishes(response.data.data.fitMe.topDishes);
        console.log("Dishes data: ", dishes);
      })
      .catch((error) => {
        if (error.response) {
           console.error("Response error:", error.response.data);
        } else{
          console.error("Error setting up request:", error.message);
        }
      });
  }, [id]);

  return (
    <>
      <div>
      <section className='containerHeader'>
        <div className='restaurantImage'>
          <img src={LogoImage} alt="Imagem de comida" />
        </div>
        {restaurants && (
        <div className='restaurantDescription'>
          <p className='titleRestaurant'>{restaurants.name}</p>
          <p>north indian, punjabi</p>
          <div className='restaurantInfo'>
            <div className='containerInfo'>
              <p><i className="fa-solid fa-star"></i> 4.0</p>
              <p>{restaurants.rating}+ ratings</p>
            </div>
            <div className='containerInfo'>
              <p>{restaurants.deliveryTime}</p>
              <p>Delivery Time</p>
            </div>
            <div>
              <p>200</p>
              <p>Cost for two</p>
            </div>
          </div>
        </div>
        )}
        <div className='containerOffers'>
          <p className='orange-text offers'>Offers</p>
          <p> <i className="fa-solid fa-tag fa-rotate-90"></i> 50% off up to ₹100 | Use code TRYNEW</p>
          <p> <i className="fa-solid fa-tag fa-rotate-90"></i> 20% off | Use code PARTY</p>
        </div>
      </section>
      <main className='containerMenu'>
        <div className='menuFoods'>
          <p className='orange-text'>Recommended</p>
          <ul>
            {dishes &&
               dishes.map((dishes, index) => (
                <li key={index}>
                    {dishes.name}
                </li>
            ))}
          </ul>
        </div>
        <div className='portionDishes'>
              <ul>
                {dishes &&
                dishes.map((dishes, index) => (
                  <li key={index}>
                    <p>{dishes.name}</p>
                    <p>{dishes.price}</p>
                    <p>{dishes.description}</p>
                  </li>
                ))}
              </ul>
        </div>
          <div className='containerCart'>
            <div className='titleCart'>
              <p className='cart'>Cart</p>
              <p> items</p>
            </div>
            {restaurants && (
            <p>from <span className='orange-text'>{restaurants.name}</span></p>
            )}
              <div  className='subTotalTitle'>
                <p>Subtotal</p>
                <p>₹</p>
              </div>
              <p className='gray-text'>Extra charges may apply</p>
              <button className='checkout_btn' >Checkout</button>
            </div>
      </main>
    </div>
      <Footer/>
    </>
  );
};

export default Cart;

