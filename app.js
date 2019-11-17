const express = require('express'),
      app = express(),
      routes = require('./routes/person'),
      index = require('./routes/index'),
      errorHandling = require('./middleware/errorHandling'),
      sendAsJson = require('./middleware/sendAsJson'),
      mongoose = require('mongoose');

let PORT = process.env.PORT || 3000,
    DATABASE_URL = process.env.DATABASE_URL || 'mongodb://localhost:27017/Lab7'
app.use(express.json());

mongoose.connect(DATABASE_URL,  {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false
})

mongoose.connection.on('error', error => console.log(`Connection to Lab7 database failed: ${error}`));
mongoose.connection.on('connected', () => console.log(`Connected to Lab7 database`));
mongoose.connection.on('disconnected', () => console.log(`Disconnected from Lab7 database`));

app.use('/persons', routes);
app.use('/',index)
app.use(errorHandling())
app.use(sendAsJson());


let server = app.listen(PORT, _ => {
  console.log(`GOT API running on port ${ PORT }`)
})