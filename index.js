const express = require("express")
const app = express();


let hobbys = ['Lesen', 'Reiten', 'Freunde treffen'];
let einkaufsliste = ['Seile', 'Plasikplane', 'Gaffa'];


app.get('/hobbys', (req, res) => {
    res.json(hobbys);
});


app.get('/einkaufsliste', (req, res) => {
    res.json(einkaufsliste);
});



app.listen(3000)
