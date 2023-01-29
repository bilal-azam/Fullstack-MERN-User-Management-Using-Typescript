import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import { MONGO_URI } from '../configs/constants';
import app from './app';
  
mongoose.connect(MONGO_URI as string, { useNewUrlParser: true, useUnifiedTopology: true } as any)
    .catch((err) => {
        console.error(`MongoDB connection error: ${err}`);
    });

app.use(bodyParser.json());

const PORT = 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));