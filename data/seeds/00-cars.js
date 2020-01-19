
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        { vin: '01234567890123456' , make: 'BMW', model: 'M8', mileage: '1000' },
        { vin: '98765432109876543' , make: 'Honda', model: 'Civic', mileage: '2000' },
        { vin: '12378945603219870' , make: 'Subaru', model: 'Crosstrek', mileage: '1500' },
      ]);
    });
};

