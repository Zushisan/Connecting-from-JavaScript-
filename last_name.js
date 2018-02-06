
module.exports = function(client){

  const findByLast = function(name){

    const query =`SELECT * FROM famous_people WHERE last_name = $1`;

        // promise
    client.query(query, [name])
      .then(res => {console.log(res.rows[0]);})
      .catch(e => console.error(e.stack))
      .then(() => client.end())
  };


  return {
    findByLast: findByLast
  }
}
