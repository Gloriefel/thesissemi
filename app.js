const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const Nexmo = require('nexmo');
const socketio = require('socket.io');
 
const nexmo = new Nexmo({
  apiKey: '37970ab0',
  apiSecret: 'JsBpCZsf5f6PfO56'
}, {debug: true});

// init app
const app = express();

// // template set up
app.set('view engine', 'html');
app.engine('html', ejs.renderFile);

// // public folder set up
app.use(express.static(__dirname + '/public'));

// // bodyParser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

// // index route
app.get('/', (req, res) => {
    res.render('index');
    // res.render('homepage');
});

//catch form submit
app.post('/', (req, res) => {
    res.send(req.body);
    console.log(req.body);
    // const number = req.body.number;
    // const text = req.body.text;

    // nexmo.message.sendSms(
    //     '09125161614', number, text, {type: 'unicode'},
    //     (err, responseData) =>{
    //         if(err){
    //             console.log(err);

    //         }else {
    //             console.dir(responseData);
    //             const data ={
    //                 id: responseData.messages[0]['message-id'],
    //                 number: responseData.messages[0]['to']
    //             }
    //             io.emit('smsStatus', data);
    //         }
    //       }
    //     );
});


// // define portn
const port = process.env.PORT || 3000;
 
// // start server
const server = app.listen(port, () => console.log(`Server started on port ${port}`));

const io = socketio(server);
io.on('connection', (socket) =>{
    console.log('Connected');
    io.on('disconnect', () => {
        console.log('Disconnected');
    })
})