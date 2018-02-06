const pg = require("pg");
const settings = require("./settings"); // settings.json

const client = new pg.Client({
  user     : settings.user,
  password : settings.password,
  database : settings.database,
  host     : settings.hostname,
  port     : settings.port,
  ssl      : settings.ssl
});


let queryVar = process.argv[2];
// const subquery = `SELECT last_name FROM famous_people WHERE last_name = "Lincoln"`
const peoples = require('./last_name')(client);


client.connect((err,) => {
  if (err) {
    return console.error("Connection Error", err);
  }

  peoples.findByLast(queryVar);

});
