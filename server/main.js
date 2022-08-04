const mongoose = require('mongoose')
const express = require('express');
const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.json());


mongoose.connect('mongodb+srv://newUser:cqWsyV8hs5nRxSg4@cluster0.3dn96.mongodb.net/?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
    console.log("Connected successfully");
});

// Create Schema

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    policy: Boolean,
    userData: Array,

})

const userMain = mongoose.model('UserDetail', userSchema);

app.get('/', async(req, res) => {
    const get = await userMain.find()
    res.send(get)
})

app.post("/filter", async(req, res)=>{
    const get = await userMain.findOne({_id: req.body.id})
    // console.log(req.body)
    res.send(get)
    
})

app.post('/register', async (req, res) => {
    const data = new userMain(req.body)
    const get = await userMain.find({ email: data.email })
    if (get.length == 0) {
        await data.save();
        res.send("😊Sussessfull Registered")
    }
    else {
        res.send("You have already Registered")
    }
})

app.post('/login', async (req, res) => {
    const data = req.body
    const get = await userMain.find({ email: data.email })
    if (get.length == 1) {
        if (get[0].password == data.password) {
            // res.send("Login Successfully")
            res.send({ data: get, message: "Login Successfully" })
        }
        else {
            res.send("Wrong Password")
        }
    }
    else {
        res.send("Fill correct email")
    }
})

app.put('/addBlog/:_id', async (req, res) => {
    const get = await userMain.find(req.params)
    // console.log(...req.body)
    if(Array.isArray(req.body)=== false){
        let value = get[0].userData;
        value.push(req.body)
        let obj = { userData: value }
        let update = await userMain.updateOne(
            req.params,
            {
                $set: obj
            }
        )
        res.send("Posted Succesfully")
    }else{
        let obj = { userData: req.body}
        let update = await userMain.updateOne(
            req.params,
            {
                $set:obj
            }
        )
        res.send("Delete Succesfully")
    }


})

app.listen(8080)








