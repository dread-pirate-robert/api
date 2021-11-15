import express from 'express';
import formidable from 'formidable';
import db from 'quick.db';
const app = express();
const port = 3000;

app.post('/', (req, res) => {
var form = new formidable.IncomingForm()
form.parse(req, function (fields) {
    console.log(fields)
    var url = fields["url"]
    var key = fields["key"]
    
    if(!key) {
        res.status(400).send({error: 'Include a key'})
    }

    })
    
})

app.listen(port, () => {
    console.log('app running on {port}')
});
