import dbconnect from '../connection/index';

let customerSchema = dbconnect.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
})


export default dbconnect.model('customer', customerSchema);