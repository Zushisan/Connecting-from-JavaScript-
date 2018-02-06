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
const query =
`SELECT * from famous_people
  where last_name = $1`


client.connect((err,) => {
  if (err) {
    return console.error("Connection Error", err);
  }

  // promise
  client.query(query, [queryVar])
    .then(res => {console.log(res.rows[0]);
                  client.end();
                })
    .catch(e => console.error(e.stack))


});
