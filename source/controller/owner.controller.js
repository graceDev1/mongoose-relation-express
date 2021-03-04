import ownerModel from '../models/owner.model';

function fSaveOwner(req,res){
    let {name, age, cars} = req.body;
    if(!name || !age || !cars ){
        return res.json({msg:'please fill all field'});
    }
    
    ownerModel.findOne({name})
    .then(owner => {
        if(owner) return res.json({msg: 'Owner exists'})
        const newOwner = new ownerModel({name, age, cars});
        newOwner.save()
        .then(owner => {
            res.json({
                owner:{
                    name: owner.name,
                    age: owner.age
                }
            })
        })
        .catch(err => res.json(err));
    })
}


function fListOwner(req,res){
    ownerModel.find()
    .populate('cars')
    .then(owner => res.json(owner))
    .catch(err => res.json(err));
}

export default {fSaveOwner, fListOwner}