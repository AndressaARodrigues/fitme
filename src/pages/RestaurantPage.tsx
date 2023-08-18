import {useEffect, useState} from 'react';
import Footer from '../components/Footer';
import LogoImage from '../assets/Rectangle 28.png';
import './RestaurantPage.css';
import axios from 'axios';
import { useParams } from 'react-router-dom';

interface RestaurantData{
  name:string;
  rating: number;
  deliveryTime: string;
  topDishes: DishData[]; 
}

const Cart: React.FC = () => {

  const { id } = useParams<{ id: string }>();
  const[restaurantData, setRestaurantData] = useState<RestaurantData | null>(
    null
  );


  useEffect(() => {
    const headers = {
      'X-Parse-Application-Id': 'DSiIkHz2MVbCZutKS7abtgrRVsiLNNGcs0L7VsNL',
      'X-Parse-Master-Key': '0cpnqkSUKVkIDlQrNxameA6OmjxmrA72tsUMqVG9',
      'X-Parse-Client-Key': 'zXOqJ2k44R6xQqqlpPuizAr3rs58RhHXfU7Aj20V',
      'Content-Type': 'application/json',
    };

   
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

    
    axios
      .post('https://parseapi.back4app.com/graphql', data, { headers })
      .then((response) => {
        console.log('GraphQL Response:', response.data);
        const fitMe: RestaurantData | null = response.data?.data?.fitMe || null; 
        setRestaurantData(fitMe);
      })
      .catch((error) => {
        console.error('GraphQL Error:', error);
      });
  }, [id]); 

  return (
    <>
    {restaurantData ? (
      <div>
      <section className='containerHeader'>
        <div className='restaurantImage'>
          <img src={LogoImage} alt="Imagem de comida" />
        </div>
        <div className='restaurantDescription'>
          <p className='titleRestaurant'>{restaurantData.name}</p>
          <p>north indian, punjabi</p>
          <div className='restaurantInfo'>
            <div className='containerInfo'>
              <p><i className="fa-solid fa-star"></i> 4.0</p>
              <p>{restaurantData.rating}+ ratings</p>
            </div>
            <div className='containerInfo'>
              <p>{restaurantData.deliveryTime}</p>
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
          <ul>
            {restaurantData.topDishes.map((dish, index) => (
              <li key={index}>
                  <p>{dish.name}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className='portionDishes'>
          <p className='orange-text'>Portion Dishes</p>
              <ul>
                {restaurantData.topDishes.map((dish, index) => (
                  <li key={index}>
                    <p>{dish.name}</p>
                    <p>{dish.price}</p>
                    <p>{dish.description}</p>
                  </li>
                ))}
              </ul>
        </div>
          <div className='containerCart'>
            <div className='titleCart'>
              <p className='cart'>Cart</p>
              <p> items</p>
            </div>
            <p>from <span className='orange-text'>Lunch box</span></p>

              <div  className='subTotalTitle'>
                <p>Subtotal</p>
                <p>₹</p>
              </div>
              <p className='gray-text'>Extra charges may apply</p>
              <button className='checkout_btn' >Checkout</button>
            </div>
      </main>
    </div>
      ) : (
        <p>Loading...</p>
      )}
      <Footer/>
    </>
  );
};

export default Cart;

