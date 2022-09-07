import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import path from "path"

import authRoute from "./routes/auth.js";
import postsRoute from "./routes/posts.js";

// create app
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

//app config
app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

// production
if (process.env.NODE_ENV==='production'){
    app.use(express.static(path.join(__dirname, '.clinet/build')))
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '.client/build'))
    })
}

//handle routing
app.get('/', (req,res)=>{
        res.status(200).json({message:"app is running"});
})

app.use('/', authRoute);
app.use('/posts', postsRoute);

//run app
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => app.listen(PORT, () => console.log(`listening to the port ${PORT}`))).catch(err => console.log(err));
