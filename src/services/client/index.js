import axios from "./desis-erp";
import RoutesBuilder, { API, API_TESTE } from '../routes';

/*
exemplos

data: {
    user: 'mauricio',
    password: 'mauricio123',
    role: 'desenvolvedor',
    department: 'TI',
}

client: 'API',

path: 'cadastrar_usuario,
*/


function request({ client, data, method, path }) {
  const config = { client };
  const params = RoutesBuilder(client, path, data);
  const options = {
    method,
    ...params

  }
  return axios(options, config);
}

export function post({ client = API, data = {}, path }) {
  return request({ client, data, method: 'post', path })
}

export function get({ client = API, data = {}, path }) {
  return request({ client, data, method: 'get', path })
}

//delete é uma palavra reservada
export function remove({ client = API, data = {}, path }) {
  return request({ client, data, method: 'delete', path })
}

export function path({ client = API, data = {}, path }) {
  return request({ client, data, method: 'path', path })
}