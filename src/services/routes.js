export const API = 'API';

export const API_TESTE = 'API_TESTE';

const routes = {};

routes[API] = {
  teste: () => ({ url: `/todos/1`, data: {} }),
  testeDesis: (params) => ({
    url: `/todos/1`,
    data: { todo: 1, name: 'testando', ...params.data }
  })
}

routes[API_TESTE] = {
  teste: (params) => ({ url: `/todos/1`, data: {} }),
  testeDesis: (params) => ({
    url: `/todos/1`,
    data: { todo: 1, name: 'testando', ...params.data }
  })

}

const RoutesBuilder = (api, path, params) => {
  try {
  // console.log('routes builder ', routes[api][path](params));
   return routes[api][path](params);
  } catch (e) {
    e.message = `Caminho de rota '${path}' não foi encontrado no objeto routes`;
    throw e;
  }
}

export default RoutesBuilder;