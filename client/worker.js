console.log("Service Worker Loaded...");
console.log('5t')
 //setInterval(() => {
  
  self.addEventListener("push", e => {
    console.log('6t')
    const data = e.data.json();
    console.log(data)
    console.log("Push Recieved...");
    self.registration.showNotification(data.title, {
      body: data.body,
      icon: "http://image.ibb.co/frYOFd/tmlogo.png"
    });
  });
 //}, 3000);

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