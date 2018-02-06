// const pg = require("pg");
const settings = require("./settings"); // settings.json

const knex = require('knex')({
  client: 'pg',
  connection: {
    host : settings.hostname,
    user : settings.user,
    password : settings.password,
    database : settings.database
  }
});

const firstName = process.argv[2];
const lastName = process.argv[3];
const birthDate = process.argv[4]; // YYYY-MM-DD

let today = new Date(birthDate);
let n = today.toISOString();

knex('famous_people')
  .returning(['first_name', 'last_name', 'birthdate'])
  .insert({first_name: firstName, last_name: lastName, birthdate: n})
  .then(function(result){
    console.log(result)
  })
  .then(knex.destroy());

