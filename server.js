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
// key hero and enter name of the hero to add to array
app.post("/superheroes", (req, res)=>{
    console.log(req.body);
    res.send(req.body.hero);
  //superHeroes.push(req.body.hero);
})

//update a superhero
app.put('/superheroes/:index', (req,res) =>{
  superHeroes[req.params.index] = req.body;
  res.redirect(`/superheroes/${req.params.index}`)
})


app.delete('/superheroes/:index', (req,res, next) =>{
    //req.params.index
    hero.findByIdAndRemove({_id: req.params.id}
    //console.log(req.params.id);
    res.send(hero);
//   superheroes.splice(req.params.index, 1);
//   res.redirect('/superheroes')
})


const port = process.env.PORT || 3000;
app.listen(port, ()=>{
  console.log(`Here to save the day on ${port}`)
}); 