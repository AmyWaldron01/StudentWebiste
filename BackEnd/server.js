//Now all working :))
const express = require('express')
const app = express()
const port = 4000
var bodyParser = require('body-parser')

app.get('/api/car', (req, res) => {
  carModel.find((error, data) => {
    console.log(data);
    res.json(data);
  })
})



// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

const cors = require('cors');
app.use(cors());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//mongodb+srv://admin:<password>@cluster0.8taek.mongodb.net/?retryWrites=true&w=majority
// getting-started.js
const mongoose = require('mongoose');
main().catch(err => console.log(err));
async function main() {
  // await mongoose.connect('mongodb+srv://admin:admin@cluster0.gr3hrrm.mongodb.net/?retryWrites=true&w=majority');
  await mongoose.connect('mongodb+srv://123:123@cluster0.burbnhe.mongodb.net/?retryWrites=true&w=majority');
  // use `await mongoose.connect('mongodb://user:password@localhost:27017/test');` if your database has auth enabled
}


const CarSchema = new mongoose.Schema({
  brand: String,
  model: String,
  year: String,
  rating: String
});

// Compile model from schema
const carModel = mongoose.model('CARS', CarSchema);

// const car1 = new carModel({ brand: 'BMW', model: 'M3', year: '2019', rating: '5' });
app.post('/api/cars', (req, res) => {
  console.log(req.body);

  carModel.create({
    brand: req.body.brand,
    model: req.body.model,
    year: req.body.year,
    rating: req.body.rating
  })

  res.send('Data Recieved');
})

//getting all cars
app.get('/api/cars', (req, res) => {
  carModel.find((error, data) => {
    res.json(data);
  })
})

//getting one by id
app.get('/api/car/:id', (req, res) => {
  console.log(req.params.id);
  carModel.findById(req.params.id, (error, data) => {
    res.json(data);
  })
})

// updating one by id
app.put('/api/car/:id', (req, res) => {
  console.log("Update: " + req.params.id);

  carModel.findByIdAndUpdate(req.params.id, req.body, { new: true },
    (error, data) => {
      res.send(data);
    })
})

//deleting one by id
app.delete('/api/car/:id', (req, res) => {
  console.log('Deleting: ' + req.params.id);
  carModel.findByIdAndDelete({ _id: req.params.id }, (error, data) => {
    res.send(data);
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


