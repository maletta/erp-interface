import axios from 'axios';
import RoutesBuilder, { API, API_TESTE } from '../routes';

const HOST = process.env.REACT_APP_API;
const HOST_TESTE = process.env.REACT_APP_API;
const headers = {
  // 'Accept-Language': 'pt-BR',
  //  'Content-Type': 'application/json',
  // 'Access-Control-Allow-Origin': '*',
}


axios.interceptors.request.use((config, ...rest) => {

  console.log('fazendo requisição ', config, HOST);
  console.log('fazendo requisição rest', Object.keys(config));
  console.log('URL ANTIGA', config.url)
  console.log('url NOVA', HOST);
  //config.url = "https://jsonplaceholder.typicode.com/todos/1";
  config.url = `${HOST}`;
  config.headers = {
    ...config.headers,
    ...headers,
  }

  return config;

}, error => {

  console.log('erro na requisição ');
  return Promise.reject(error);
});

axios.interceptors.response.use(config => {

  console.log('passando pela resposta ', config);

  return config;
}, error => {

  console.log('erro na resposta ', error);
  return Promise.reject(error);
})


export default axios;