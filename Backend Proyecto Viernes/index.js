const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()
const port = 5000
let db = ""

app.use(express.json());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});


app.post('/api',async (req, res) => {
    const result = await db.collection("listingsAndReviews").find().limit(+req.body.limit).toArray();
    res.send(result);}
);

mongoose.connect('mongodb+srv://josemartin10:kjkszpj345@cluster0.eh936hg.mongodb.net/sample_airbnb?retryWrites=true&w=majority').then(() => {

})
.then(()=>{
  console.log('Mongo DB Connected!');
  db = mongoose.connection.db;
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});
