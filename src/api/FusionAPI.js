// FusionAPI.js 
// This file creates an Axios Instance with the base yelp API URL
// and headers containing the API key

import axios from 'axios';

export default axios.create({
  baseURL: 'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3',
  headers: {
    Authorization: `Bearer MgUMX9bRVS3fu8wM681nku65utWm0QKIaOAn9j3HV5eBKAEG4Ogsv8dkGLS6KVUdND44L03f50H5Cv-0ybYHam39DCqmExAWTfrCbWCs3fBxM11UTvajtUFB_89yYXYx`,
    origin: 'localhost:3000',
  }
});