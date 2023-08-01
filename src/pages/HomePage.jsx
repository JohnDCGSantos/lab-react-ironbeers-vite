import { Link } from 'react-router-dom';
import allBeersImage from '../assets/beers.png';
import randomBeerImage from '../assets/random-beer.png';
import newBeerImage from '../assets/new-beer.png';
import '../HomePage.css';
const HomePage = () => {
    return (
      <div>
        <div className='welcome'>
        <h2 className='h2Home'>Welcome to IronBeers!</h2>
        <p>Explore the world of beers.</p>
        </div>
        <ul>
          
          <li>
          <Link to="/beers">
            <h3>All Beers</h3>
            <div className='all'>
            <img  src={allBeersImage} alt="All Beers" />
            </div>
          </Link>
        </li>
  
          <li>
          <Link to="/random-beer">
          
            <h3>Random Beer</h3>
            <div className='all'>
            <img  src={randomBeerImage} alt="Random Beer" />
            </div>
          </Link>
        </li>

        <li>
          <Link to="/new-beer">
          <h3>New Beer</h3>
          <div className='all'>
            <img  src={newBeerImage} alt="New Beer" />
            </div>
            
          </Link>
        </li>
      </ul>
    </div>
  );
};
  
  export default HomePage;