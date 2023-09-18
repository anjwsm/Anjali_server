const express = require('express');
const server = express();

// server.use((req,res,next)=>{
//     next();
// })
server.use(express.json()); // For parsing JSON data
server.use(express.urlencoded({ extended: true })); // from process

// set the view engine 
server.set('view engine', 'ejs');


// routes
server.get('/', (req,res ) =>{
   
 res.sendFile(__dirname + '/public/index.html');
});
server.post('/submit',(req,res)=>{

    console.log(req.body);
    // res.sendFile (__dirname + '/public/form.html');
    res.render('thankyou',
    {name:req.body.username,
    address:req.body.address
    });
    
})
 
server.get('/login' ,(req , res)=>{
 res.sendFile(__dirname + '/public/login.html' )
})

server.post('/authenticate' , (req ,res)=>{
console.log(req.body);
// if(req.body.password == '12345678'){
//     res.send('You are logged in')
// }
// else{ res.send ('Your ' + req.body.password + 'is incorrect')}

 if(req.body.password=='12345678'){
    res.render('success',{name: req.body.username})
 }else{
    res.render('failed',{name:req.body.username, password:req.body.password})
 }
}
)



// server.get('/anjali',(req,res)=>{
//     res.sendFile(__dirname + '/public/anjali.jpg');
// })

// server.get('/momolove',(req,res) =>{
//  res.redirect('https://www.google.com/');
// });






server.listen(3000,()=>{
    console.log("I am listening at port 3000");
})