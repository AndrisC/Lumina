import Robolt from 'robolt';
// const vueCrudengine = require('vue-crudengine');

export default ( ctx, inject ) => {
  // the constructor expects two parameters: axios, backend crudengine prefix
  const API = new Robolt(ctx.$axios, 'api', 'static', {deleted: {$ne: true}})

  ctx.$API = API
  inject( 'API', API )
}
