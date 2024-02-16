import express from "express";
import userRouter from './routes/user.route';

const app = express();
app.use(express.json());

// connection
const start = async () => {
    try {
        app.listen(3000, () => {
            console.log("Server is connected");
        });
    } catch (err) {
        console.log(err);
    }
};

app.user('/user',userRouter);

start();

