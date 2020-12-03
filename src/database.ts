import mongoose from "mongoose";
import config from './config'

(async () => {
    try {
        const db = await mongoose.connect(`mongodb://${ config.MONGO_HOST }/${ config.MONGO_DATABASE }`, {
            useUnifiedTopology: true,
            useNewUrlParser: true
        });
        console.log('Database Connected to:', db.connection.name);
    } catch(error) {
        console.error(error);
    }

})()