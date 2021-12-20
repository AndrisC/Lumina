const express     = require('express');
const bluebird    = require("bluebird");
const dotenv      = require("dotenv");
const mongoose    = require("mongoose");
const app = express();
const port = 3000;

dotenv.config({ path: 'backend/.env' });

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })
//
// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`)
// })

mongoose.Promise = bluebird;
mongoose.connect(process.env.mongodb_url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
}).then( () => console.log( "[Mongo]    | Ready to use mongodb") )
.catch(err => {
  console.log(err)
  process.exit()
})

app.set( 'port', process.env.PORT || 4500 )

app.use((req, res) => {
  res.status(404).send({ msg: 'Not Found!' })
})

const server = app.listen(process.env.PORT, '0.0.0.0', () => {
  console.log("\nServer stared on " + process.env.PORT)
})

module.exports = server;
