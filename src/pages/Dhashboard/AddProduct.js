import React from 'react';
import toast from 'react-hot-toast';
import useTittle from '../../useTittle';

const AddProduct = () => {
       useTittle('Add product')

    const handleSubmit=(event)=>{
        event.preventDefault();
        const form=event.target;
        const name=form.name.value;
        const category=form.category.value;
        const marketPrice=form.marketPrice.value;
        const price=form.price.value;
        const location=form.location.value;
        const useOfyear=form.useOfyear.value;
        const selarName=form.selarName.value;
        const conditione=form.condition.value;
        const img=form.img.value;
        
        let id;
        if(category==='oppo'){
           id=3

        }
        else if(category==="sumsung"){
          id=2
        }
        else{
          id=1
        }


        const addinfo={
            id,
            name,
            marketPrice,
            price,
            location,
            useOfyear,
            selarName,
            conditione,
            img,
            category
            

        }
        console.log(addinfo)

        fetch('http://localhost:5000/products',{
            method:'POST',
            headers:{
              'content-type':'application/json'
            },
            body:JSON.stringify(addinfo)
          })
          .then(res=>res.json())
          .then(data=>{
            toast.success('Add Product Successfully')
            console.log(data)
  
          })
        
 
  
    }

    return (
        <div>
            <div>
            <form onSubmit={handleSubmit} className="card-body">
              <div className="form-control">
              <h1 className="text-5xl font-bold text-center">ADD A PRODUCT</h1>
                <label className="label">
                  <span className="font-bold label-text">Product name</span>
                </label>
                <input type="text" name='name' placeholder="Name" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="font-bold label-text">Category</span>
                </label>
                <input type="text" name='category' placeholder="Category" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="font-bold label-text">Market Price</span>
                </label>
                <input type="number" name='marketPrice' placeholder="marketPrice" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="font-bold label-text">Price</span>
                </label>
                <input type="number" name='price' placeholder="Enter Phone Price" className="input input-bordered" />
                </div>
                <div className="form-control">
                <label className="label">
                  <span className="font-bold label-text">Location</span>
                </label>
                <input type="text" name='location' placeholder="Write Your Location" className="input input-bordered" />
                </div>
                <div className="form-control">
                <label className="label">
                  <span className="font-bold label-text">Use Of Year</span>
                </label>
                <input type="number" name='useOfyear' placeholder="Enter use Of year" className="input input-bordered" />
                </div>
                <div className="form-control">
                <label className="label">
                  <span className="font-bold label-text">Selar Name</span>
                </label>
                <input type="text" name='selarName' placeholder="Write Selar Name" className="input input-bordered" />
                </div>
                <div className="form-control">
                <label className="label">
                  <span className="font-bold label-text">Condition</span>
                </label>
                <input type="text" name='condition' placeholder="Write Condition type " className="input input-bordered" />
                </div>
                <div className="form-control">
                <label className="label">
                  <span className="font-bold label-text">Image</span>
                </label>
                <input type="file" name='img' placeholder="image " className="input input-bordered" />
                </div>
              <div className="mt-6 form-control">
              <input className="btn btn-primary" type="submit" value="Submite" />
              </div>
            </form>
            </div>

        </div>
    );
};

export default AddProduct;