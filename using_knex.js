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

knex.select().table('famous_people')
  .then(function(rows){
    console.log(rows);
  })
  .catch(function(err){
    console.error(err);
  })
  .then(knex.destroy());

