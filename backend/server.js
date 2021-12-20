const express     = require('express');
const bluebird    = require("bluebird");
const bodyParser  = require("body-parser");
const dotenv      = require("dotenv");
const mongoose    = require("mongoose");
const cors = require('cors');
const app = express();
const port = 3000;

dotenv.config({ path: 'backend/.env' });

app.use(cors());

app.use(bodyParser.json({ limit: '100mb' }));
app.use(bodyParser.urlencoded({ limit: '100mb', extended: true }));

const routes = require("./router");


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

app.use(routes);
app.use((req, res) => {
  res.status(404).send({ msg: 'Not Found!' })
})

const server = app.listen(process.env.PORT, '0.0.0.0', () => {
  console.log("\nServer stared on " + process.env.PORT)
})


module.exports = server;
