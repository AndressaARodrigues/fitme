import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Footer from '../components/Footer';
import FoodImage1 from '../assets/Rectangle1.png';
import FoodImage2 from '../assets/Rectangle2.png';
import FoodImage3 from '../assets/Rectangle3.png';
import ImageBanana from '../assets/banana.png';
import ImageMaca from '../assets/maca.png';
import RestaurantImage1 from '../assets/Restaurant1.png';
import RestaurantCard from '../components/RestaurantCard';
import './Home.css';

interface Restaurant {
  node: {
    objectId: string;
    name: string;
    cuisine: string; //não vem nada da api para esse campo
    rating: number;
    deliveryTime: string;
    image: string;  //não vem nada da api para esse campo
  };
}

const Home: React.FC = () => {
  // Estado para armazenar a lista de restaurantes
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  // Estado para controlar o carregamento dos dados
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Cabeçalhos da requisição GraphQL
    const headers = {
      'X-Parse-Application-Id': 'DSiIkHz2MVbCZutKS7abtgrRVsiLNNGcs0L7VsNL',
      'X-Parse-Master-Key': '0cpnqkSUKVkIDlQrNxameA6OmjxmrA72tsUMqVG9',
      'X-Parse-Client-Key': 'zXOqJ2k44R6xQqqlpPuizAr3rs58RhHXfU7Aj20V',
      'Content-Type': 'application/json',
    };

     // Corpo da consulta GraphQL
    const data = {
      query: `
        query GetAllRestaurants {
            fitMes {
                count
                edges {
                    node {
                        objectId
                        name
                        rating
                        deliveryTime
                        image
                    }
                }
            }
        }
      `,
    };

    // Enviar a consulta GraphQL usando Axios
    axios.post("https://parseapi.back4app.com/graphql", data, { headers })
      .then((response) => {
        // Exibir os dados da resposta no console
        console.log("GraphQL Response:", response.data);
        const fitMes: Restaurant[] = response.data?.data?.fitMes?.edges || [];
        // Atualizar o estado com a lista de restaurantes e marcar o carregamento como concluído
        setRestaurants(fitMes);
        setLoading(false);
      })
      .catch((error) => {
        // Em caso de erro, exibir uma mensagem de erro no console e marcar o carregamento como concluído
        console.error("GraphQL Error:", error);
        setLoading(false);
      });
    }, []); 

  return (
    <>
      <section className="hero-section">
        <div className="hero-text">
          <p className="title">
            Premium 
            <span className="orange-text"> quality</span>
            <br/>Food for your 
            <span className="icon-container">
              <img src={ImageBanana} alt="Icone de banana" className='icon'/>
            </span>
            <span className="orange-text">healthy</span>
            <span className="icon-container">
              <img src={ImageMaca} alt='Icone de maçã' className='icon'/>
            </span>
            <span className="orange-text"> & Daily life</span>
          </p>
          <p className="subtitle">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
        <div className="food-images">
          <img src={FoodImage1} alt='Food 1' className='food-image1' />
          <img src={FoodImage2} alt='Food 2' className='food-image2' />
          <img src={FoodImage3} alt='Food 3' className='food-image3' />
        </div>
      </section>
      <main className="restaurants-section">
        <p className='title-restaurant'>Restaurants</p>
         
        {loading ? ( // Exibir "Loading..." enquanto os dados estão sendo carregados
          <p>Loading...</p>
        ) : (
          <div className="restaurant-cards">   
            {restaurants.map((restaurant, index) => (
              <RestaurantCard
                key={index}
                name={restaurant.node.name}
                cuisine={"south indian"} 
                rating={restaurant.node.rating}
                deliveryTime={restaurant.node.deliveryTime}
                image={RestaurantImage1}
              />
            ))}
          </div>
        )}
      </main>

      <Footer />
    </>
  );
};

export default Home;
