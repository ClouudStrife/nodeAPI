const express = require('express')
const app = express()
const bodyParser = require('body-parser')

var cors = require('cors')



app.use(cors({origin: 'http://localhost:4200'}))


app.get('/', (req, res) => {
    res.send('Welcome to Node API')
});

//GET
app.route('/api').get((req, res, next) => {
    res.send({
      users: [{ email: 'caio.b.santos@hotmail.com', senha: 'teste' }, { email: 'ana.ana@hotmail.com', senha: 'teste2'  }]
    });
  });


//POST
app.use(bodyParser.json());

app.post('/api/add', function(req, res, next){
  res.send(req.body);
  
  user = {
    email: req.body.email,
    senha: req.body.senha
  }

  console.log(user.email, user.senha);
});

app.listen(3000, () => console.log('Example app listening on port 3000!'))
