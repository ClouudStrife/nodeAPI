const express = require('express')
const app = express()
const bodyParser = require('body-parser')


app.use((req,res,next) => {

  res.header("Access-Control-Allow-Origin","*");
  res.header("Access-Control-Allow-Methods", "POST, GET");
  res.header("Access-Control-Allow-Header","Origin, X-Requested-With, Content-Type, Accept");
  next();

})


app.get('/', (req, res) => {
    res.send('Welcome to Node API')
});

//GET
app.route('/api/heroes').get((req, res) => {
    res.send({
      heros: [{ name: 'Shazam' }, { name: 'Batman' }, {name: 'Superman'}]
    });
  });

app.route('/api/heroes/:name').get((req, res) => {
    const requestedHeroName = req.params['name']
    res.send({ name: requestedHeroName });   
});


//POST
app.use(bodyParser.json());

app.route('/api/heroes').post((req, res) => {
  res.send(201, req.body);
});

app.listen(3000, () => console.log('Example app listening on port 3000!'))
