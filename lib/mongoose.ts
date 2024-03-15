import mongoose from 'mongoose';

let isConnected = false;

export const connectToDB = async () => {
    mongoose.set('strictQuery', true);
    if(!process.env.MONGODB_URI) return console.log(
        'No MongoDB URI. Set the MONGODB_URI environment variable'
    );

    if(isConnected) return console.log('MongoDB is already connected');

    try {
        await mongoose.connect(process.env.MONGODB_URI);
        isConnected = true;
        console.log('MongoDB connected');
    } catch (error) {
        console.log(error);
    }
}