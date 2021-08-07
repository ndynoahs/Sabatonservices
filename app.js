const express = require('express');
const path = require ('path');
//Init App
const app = express();



//Load View engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));



//Home Route
app.get('/', function(req, res){
    res.render('index');
});
app.get('/sabatons-club', function(req, res){
    res.render('sabatons-club');
});
app.get('/rates', function(req, res){
    res.render('rates');
});
app.get('/about-us', function(req, res){
    res.render('about-us');
});
app.get('/contact-us', function(req, res){
    res.render('contact-us');
});
app.get('/plumbing-rates', function(req, res){
    res.render('plumbing-rates');
});
app.get('/drainage-rates', function(req, res){
    res.render('drainage-rates');
});
app.get('/water-treatment', function(req, res){
    res.render('water-treatment');
});
app.get('/locations', function(req, res){
    res.render('location');
});
//Add Route
app.get('/articles/add', function(req, res){
    res.render('add_article' , {
       title:' Add Article' 
    });
});

//start Server
// app.listen(process.env.PORT || 5000)
app.listen(3000, function(){
    console.log('Server started on port 3000...')
});