
exports.up = function(knex) {
  return knex.schema.createTable('cars', tbl => {
      tbl.increments();
      tbl.integer('vin', 17)
      .unique();
      tbl.text('make');
      tbl.text('model');
      tbl.integer('mileage');
  });
};

exports.down = function(knex) {
  
};
