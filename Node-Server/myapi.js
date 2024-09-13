import express from 'express';
import cors from 'cors';

const app = express();
const port = 3000;

app.use(cors());

//http://localhost:3000/
app.get('/',(req,res) =>{
    res.send('Hi, am boy');
});

app.listen(port,() => {
    console.log(`example app list on port ${port}.`);
});

//http://localhost:3000/api/getprofile/:userid/:orderid
app.get('/api/getprofile/:userid/:orderid',(req,res) =>{
    let {userid}= req.params;
res.send(req.params);
});

app.get('/api/getmyprofile',(req,res) => {
    let myprofile ={
        '_id':1000,
        'fname':'Cheeptana',
        'lname':'Yenlab',
        'major':'Information Tachnology',
        'img':'/public/remix/user1.jpg'
         };
    res.jsonp(myprofile);
})

//http://localhost:3000/api/myprofile
app.get('/api/myprofile',(req,res) => {
    let myHtml ='<h1>My profile</h1>';
    myHtml += '<p> Name: Cheeptana Yenlad</p>';
    myHtml += '<p>Email: Cheaptana.yen@rmutto.ac.th</p>';

    res.set('Content-Type', 'text/html');
    res.end(myHtml);
});