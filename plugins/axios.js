export default function ({ $axios, store, redirect }) {
  $axios.onError( error => console.log(error))
}
