// FusionAPI.js 
// This file creates an Axios Instance with the base yelp API URL
// and headers containing the API key

import axios from 'axios';

export default axios.create({
  baseURL: 'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3',
  headers: {
    Authorization: `Bearer 0TB3OzcFRLTZnaL47cG11zD3jeYKzObo9ijr8zFuwmTSrgeCSBwe3IKJ88xA93GQrDq9B_mfEX18U5LR3YFaTceYY7XJQ5fnP65WpOwDNzOuoXEi7UwE0uwk1GpoYXYx`,
    origin: 'localhost:3000',
  }
});