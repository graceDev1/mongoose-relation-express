import mongoose from 'mongoose';


mongoose.connect('mongodb://127.0.0.1:27017/relationdb',
{
    useUnifiedTopology:true, 
    useCreateIndex:true,
    useNewUrlParser:true
},()=> console.log('connect  to db'))

export default mongoose;