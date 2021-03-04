import customerModel from '../models/customer.model';

function fSaveCustomer(req,res){
    let {name, email} = req.body;
    if(!name || !email){
        res.status(500).json({msg:'please fill all field'});
    }

    customerModel.findOne({email})
    .then(customer=> {
        if(customer) return res.json({msg:'customer already exists'});
        let newCustomer = new customerModel({name, email});
        newCustomer.save()
        .then(customer => {
           res.json({
               customer: {
                   name: customer.name,
                   email: customer.email
               }
           })
        })
    })
    .catch(err => res.json(err));
}


function fGetCustomer(req,res){
    customerModel.find()
    .then(customer => res.json(customer))
    .catch(err=> console.log(err));
}


export default {fSaveCustomer, fGetCustomer}