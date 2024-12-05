const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/motorsport', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

// Define Schema and Model
const CarSchema = new mongoose.Schema({
    name: String,
    brand: String,
    year: Number,
});
const Car = mongoose.model('Car', CarSchema);

// Routes
app.get('/cars', async (req, res) => {
    const cars = await Car.find();
    res.json(cars);
});

app.post('/cars', async (req, res) => {
    const car = new Car(req.body);
    await car.save();
    res.json(car);
});

// Start Server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
