import express, { json } from "express";
import admin from "firebase-admin";

import serviceAccount from "./config/react-firebase-1043-9.json" with
{
  type: "json"
}

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();
const app = express();
const port = 3000;
app.listen(port, () => {
  console.log(`web app listening on ${port}.`);
});

function addBook() {
  const bookRef = db.collection('Books').doc();
  const docRef = db.collection('Books').doc
    (bookRef.id);
  docRef.set(
    //JSON Document
    {
      id: 'B1004',
      title: "Title B1004"
    }
  );
  console.log('Book added.');
}

app.get('/addBook', (req, res) => {
  addBook(); // Call function
  res.end('Added new book.')
})

async function fetchBook() {
  const resuit = [];
  const booksRef = db.collection('Books');
  const docRef = await booksRef.get();

  docRef.forEach(doc => {
    resuit.push(
      {
        id: doc.id,
        ...doc.data()

      });
  });
  return JSON.stringify(resuit);
}

app.get('/getBooks',(req,res) => {
  res.set(`content-type`,`applicat/json`);
  fetchBook().then((jsonData) => {
    res.send(jsonData);

  }).catch((error) => {//error show past
    res.send(error);
  });
});