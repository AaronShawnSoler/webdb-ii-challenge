const server = require('./server');
const db = require('./data/dbCarsHelper');

const PORT = process.env.PORT || 8000;

server.get('/', (req, res) => {
    db.get()
    .then(data => res.send(data));
});

server.post('/', (req, res) => {
    if(
        req.body.vin &&
        req.body.make &&
        req.body.model &&
        req.body.mileage
    ) {
        const newCar = {
            vin: req.body.vin,
            make: req.body.make,
            model: req.body.model,
            mileage: req.body.mileage
        }
        db.insert(newCar);
        res.sendStatus(201);
    } else {
        res.status(400).json({ message: 'please enter required fields'})
    }
});

server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`)
})