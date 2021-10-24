// FusionAPI.js 
// This file creates an Axios Instance with the base yelp API URL
// and headers containing the API key

import axios from 'axios';

export default axios.create({
  baseURL: 'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3',
  headers: {
    Authorization: `Bearer T83PYVPBCoulInjfkeAGC_6XfRe3PFM4u10pcDekzQaaTCRYTuqf5F97Uj7c_AyUvzowwsoleUr6RBfByR8dyhYm5bzaVJ3EXDC7g-5aqetBl4jQ26Z_aa0v_FVzYXYx`,
    origin: 'localhost:3000',
  }
});