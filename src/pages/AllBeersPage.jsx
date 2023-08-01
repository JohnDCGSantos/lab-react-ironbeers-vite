import  { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../AllBeers.css'

const AllBeersPage = () => {
  const [beers, setBeers] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  

  useEffect(() => {
    
    const fetchBeers = async () => {
      try {
        const response = await axios.get('https://ih-beers-api2.herokuapp.com/beers');
        setBeers(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching beers:', error);
      }
    };

    fetchBeers();
  }, []);

  useEffect(() => {
    const fetchBeersBySearch = async () => {
      try {
        const response = await axios.get(
          `https://ih-beers-api2.herokuapp.com/beers/search?q=${searchQuery}`
        );
        setBeers(response.data);
      } catch (error) {
        console.error('Error fetching beers by search:', error);
      }
    };

    fetchBeersBySearch();
  }, [searchQuery]);

  return (
    <div>
      
      <div className='search-beers'>
      <input 
        type="text"
        placeholder="Search beers..."
        value={searchQuery}
        onChange={handleSearchInputChange}
      />
      </div>
      <ul >
      {beers.map((beer) => (
    <li className='card' key={beer._id}>
      <Link to={`/beers/${beer._id}`}>
      <h2 className='h2All'>{beer.name}</h2>
        <div className='beer-item'>
          <div className='beer-img'>
            <img src={beer.image_url} alt={beer.name}  />
            <p >Contributed by: {beer.contributed_by}</p>
          </div>
         
            <div className='tagline'>
            
            <p>{beer.tagline}</p>
          
          </div>
        </div>
      </Link>
    </li>
  ))}
</ul>
    </div>
  );
};

export default AllBeersPage;
