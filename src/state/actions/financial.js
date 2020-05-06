import * as ActionTypes from '../action-types';
import axios from 'axios';
import {get,path,post,remove} from '../../services/client';


export const payActionOld = (payload) => {
  return dispatch => {
    return fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json()
        .then(t =>
          dispatch({ type: ActionTypes.PAY, payload, t }))
          );
  }
}

export const payAction = (payload) => {
  const config = {
    client: 'API_TESTE',
    path: 'testeDesis',
    data: {
      name: 'mauricio',
      password: 'mauricio123',
    }
  }
  return dispatch => {
    return get(config)
      .then(response => {
        console.log('response ', response);
        return response;
      }
        //.then(r => r.json()
        //  .then(t =>
        //    dispatch({ type: ActionTypes.PAY, payload, t }))
        //
        //)
        );
  }
}
// dispatch(
//   {
//     type: PAY,
//     payload,
//     t
//   }
// )



export const demandAction = (payload) => {
  return dispatch => {
    return axios.get('https://jsonplaceholder.typicode.com/todos/1')
      .then(r => dispatch(
        {
          type: ActionTypes.DEMAND,
          payload,
          r
        }
      ))
  }
}
