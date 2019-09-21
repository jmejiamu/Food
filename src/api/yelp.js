import axios from 'axios';


export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers:{
        Authorization:
        'Bearer Ddx_401meUDwmua2IpaITu3U7vsh_lWmi3ZuW-F2jHc3WyvHo59OpiJhR6PUhgiCqinsZ5FbXToyZsbHIDl8plwLEL_DkQJ1kc8AxsTs9uOEvw4lVjUuOPl8SVB9XXYx'
    }
});
