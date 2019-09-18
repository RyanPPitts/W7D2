const express = require('express');
const app = express();
const superHeroes = ['unbeatable squirrel girl', 'superman', 'hulk'];
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}))
// app.set('view engine', 'ejs');

// index route

app.get("/superheroes", (req, res) =>{
  res.send(superHeroes);
  //res.send('hello world');
});

// Index page
//req.params -- an object containing parameter values parsed from a URL path. 
// req. params the superhero object.
// show only the super heroes per comma.
// For example if you have the route /user/:name , 
//then the "name" from the URL path wil be available as req.params.name .

app.get('/superheroes/:index', function (req,res) {
res.send(superHeroes[req.params.index]);
//sres.send(superHeroes);
});


// Create post route.  Post to the array
// posting a new hero (hero) to the array using the req.body - We are putting the new item into the body
app.post("/superheroes", (req, res)=>{
  superHeroes.push(req.body.hero);
})

//update a superhero
// app.put('/superheroes/:index', function (req,res) {
//   superHeroes.push(req.body.hero)
// })



app.delete('/superheroes/:index', function (req,res){
  res.send(req.params.index);
})


// });


// app.get('/mars-missions/missions', (req,res) =>{
//   //res.render('show.ejs');
//   res.send(missions);
// });

// // id of each mission
// app.get('/mars-missions/missions/:id', (req,res) =>{
//   res.render('views', {name : missions[req.params.id]});
//   //res.send(missions[req.params.id]);
// });

// app.post('/mars-missions', (req,res)=>{
//   res.send(mission);
// })


const port = process.env.PORT || 3000;
app.listen(port, ()=>{
  console.log(`Here to save the day on ${port}`)
}); 