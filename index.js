const express = require("express");
const webpush = require("web-push");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

// Set static path
app.use(express.static(path.join(__dirname, "client")));

app.use(bodyParser.json());


const publicVapidKey =
  "BAY-zQTDhWz-npP23twURpRmvKB2e1yE6jxhSCOpKO7SBko7Wxk2iRmsv-tWw_jqJDLUohxOP69dQDpq_naf2yg";
const privateVapidKey = "PkRqmRnoabyHhyR9K3YEe4krdUxD9AA4iV0b-df5O88";

webpush.setVapidDetails(
  "mailto:flow669900@gmail.com",
  publicVapidKey,
  privateVapidKey
);

// Subscribe Route
app.post("/subscribe", (req, res) => {
  
  // Get pushSubscription object
  const subscription = req.body;

  // Send 201 - resource created
  res.status(201).json({});

  // Create payload
  const payload = JSON.stringify({ title: "Push Test",
 body:'uuuu'});

  // Pass object into sendNotification

  setInterval(() => {
    webpush
    .sendNotification(subscription, payload)
    .catch(err => console.error(err));
  
  }, 10000);



    
 
});

const port = process.env.PORT || 2100

app.listen(port, () => console.log(`Server started on port ${port}`));

// setInterval(() => {
//   if(new Date().toLocaleString().split(',')[1].replace(' ','').split(':')[0]
//   =='10'){
//     if(new Date().toLocaleString().split(',')[1].replace(' ','').split(':')[1]== '24' ){ 
//        console.log('yes')
//     webpush
//   .sendNotification(subscription, payload)
//   .catch(err => console.error(err));
// }
//   }

//  }, 2000);