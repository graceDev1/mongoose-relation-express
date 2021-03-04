import productModel from '../models/product.model';

function fSaveProduct(req,res){
    let {name, price,imageUrl, customer} = req.body;
    if(!name || !price || !imageUrl || !customer){
        return res.json({msg:'please fill all field'});
    }
    
    productModel.findOne({name})
    .then(product => {
        if(product) return res.json({msg: 'Product exists'})
        const newProduct = new productModel({name,price,imageUrl,customer});
        newProduct.save()
        .then(product => {
            res.json({
                product:{
                    name: product.name,
                    price: product.price
                }
            })
        })
        .catch(err => res.json(err));
    })
}

function fGetAllProduct(req,res){
    productModel.find()
    .populate('customer')
    .then(products => res.json(products))
    .catch(err=> res.json(err));
}


export default {fSaveProduct,fGetAllProduct};