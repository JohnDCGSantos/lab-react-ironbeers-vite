import { useState } from 'react';
import axios from 'axios';

const AddBeerPage = () => {
  const [beerData, setBeerData] = useState({
    name: '',
    tagline: '',
    description: '',
    first_brewed: '',
    brewers_tips: '',
    attenuation_level: '',
    contributed_by: '',
    image_url: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setBeerData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('https://ih-beers-api2.herokuapp.com/beers/new', beerData);
      console.log('New beer created:', response.data);
    } catch (error) {
      console.error('Error creating new beer:', error);
    }
  };

  return (
    <div>
      <h1>Create a New Beer</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={beerData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Tagline:</label>
          <input
            type="text"
            name="tagline"
            value={beerData.tagline}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            name="description"
            value={beerData.description}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>First Brewed:</label>
          <input
            type="text"
            name="first_brewed"
            value={beerData.first_brewed}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Brewer&apos;s Tips:</label>
          <input
            type="text"
            name="brewers_tips"
            value={beerData.brewers_tips}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Attenuation Level:</label>
          <input
            type="number"
            name="attenuation_level"
            value={beerData.attenuation_level}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Contributed By:</label>
          <input
            type="text"
            name="contributed_by"
            value={beerData.contributed_by}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="image_url">Beer Image URL:</label>
          <input type="text" name="image_url" value={beerData.image_url} onChange={handleChange} required />
        </div>
        <button type="submit">Add Beer</button>
      </form>
    </div>
  );
};

export default AddBeerPage;
