import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      'Client-ID 3f48ddc1fd15fc02e72b839f320e662f3bcbd25f1a76213df1ba422cccd0cdd6'
  }
});
