const { default: axios } = require('axios');

const getter = () => {
  axios
    .get(`https://64c3c20767cfdca3b6603e52.mockapi.io/api/cards/users`)
    .then(res => res)
    .catch(e => console.log(e));
};
