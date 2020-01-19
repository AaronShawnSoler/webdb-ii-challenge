const dbCars = require('./dbConfig');

module.exports = {
    get,
    getById,
    insert
}

function get() {
    return dbCars('cars');
}

function getById(id) {
    return dbCars('cars')
    .where({ id })
    .first();
}

function insert(car) {
    return dbCars('cars')
    .insert(car)
    .then(ids => {
        return getById(ids[0]);
    })
}