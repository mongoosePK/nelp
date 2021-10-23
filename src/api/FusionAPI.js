// FusionAPI.js 
// This file creates an Axios Instance with the base yelp API URL
// and headers containing the API key

import axios from 'axios';

export default axios.create({
  baseURL: 'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3',
  headers: {
    Authorization: `Bearer `,
    origin: 'localhost:3000',
  }
});