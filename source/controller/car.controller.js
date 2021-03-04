import carModel from '../models/cars.model';

function fSaveCar(req,res){
    let {make, model} = req.body;
    if(!make || !model ){
        return res.json({msg:'please fill all field'});
    }
    
    carModel.findOne({make})
    .then(car => {
        if(car) return res.json({msg: 'Product exists'})
        const newCar = new carModel({make,model});
        newCar.save()
        .then(car => {
            res.json({
                car:{
                    make: car.make,
                    model: car.model
                }
            })
        })
        .catch(err => res.json(err));
    })
}


function fListCard(req,res){
    carModel.find()
    .then(cars => res.json(cars))
    .catch(err => res.json(err));
}

export default {fSaveCar, fListCard}