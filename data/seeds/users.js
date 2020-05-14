
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {first_name: 'Juan', last_name: 'Aleman', email: 'juan@gmail.com', phone: '9562004000', password: 'juan', city: 'Pharr', state: 'Texas', country: 'USA', zipcode: '78577'   },
        {first_name: 'Gary', last_name: '', email: 'gary@gmail.com', phone: '9562004000', password: 'gary', city: '', state: '', country: 'USA', zipcode: ''   },
        {first_name: 'Ryan', last_name: '', email: 'ryan@gmail.com', phone: '9562004000', password: 'ryan', city: '', state: '', country: 'USA', zipcode: ''   },
        {first_name: 'Denise', last_name: '', email: 'denise@gmail.com', phone: '9562004000', password: 'denise', city: '', state: '', country: 'USA', zipcode: ''   },
        {first_name: 'Joshua', last_name: '', email: 'joshua@gmail.com', phone: '9562004000', password: 'joshua', city: '', state: '', country: 'USA', zipcode: ''   },
      ]);
    });
};
