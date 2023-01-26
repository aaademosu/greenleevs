import React from 'react';
import { BsCart } from 'react-icons/bs';
import { Link, useNavigate } from 'react-router-dom';
import { PostCart } from '../apis/api';
import { useStateContext } from '../contexts/ContextProvider';
import Spinner from './Spinner';
/* eslint-disable */

const GridStyle = ({ isLoading, filteredProducts }) => {
  const history = useNavigate();
  console.log("Category : ", filteredProducts);

  const { state } = useStateContext();
  const { cart } = state;

  const addToCartHandler = async () => {
    const product = filteredProducts.map((filtered) => filtered)
    const existItem = cart.cartItems.find((x) => x._id === product.product_id);
    const quantity = existItem ? existItem.quantity + 1 : 1;
    // const id = user.id
        // if (product.countInStock < quantity) {
    //   enqueueSnackbar('Sorry. Product is out of stock', { variant: 'error' });
    //   return;
    // }
    const body = {
      // product_id: product.product_id,
      quantity: quantity,
      // countInStock: product.countInStock,
    }
    PostCart(body)
    .then((res) => {
      console.log(res);
      // res.status
      enqueueSnackbar(`${product.label} added to the cart`, {
        variant: 'success', 
      });
      // history('/cart')
    })
  };
  return (
    <div>
       {isLoading
                  ? 
                  <Spinner /> 
                  :
      <div className='grid lg:grid-cols-3  md:grid-cols-2 pl-5 sm:grid-cols-2 gap-10 pt-10 justify-between items-center'>
        {filteredProducts && filteredProducts.map((cat) => (
          <Link to={`/product/${cat.slug}`} key={cat.product_id}>
            <div className='w-80 h-auto bg-white rounded-lg border flex flex-col justify-between p-5 space-y-5 hover:shadow-md'>
              <img src={cat.product_image} alt="" className='rounded-md w-auto h-auto' />
               <p className='text-xl bg-[#1F451A] rounded-md  gap-2 p-3 w-24 text-white'>{cat.brand?.label}</p>
              <div className='text-2xl text-start capitalize text-[#1F451A] font-normal'>{cat.label}</div>
              <div className=''>$ {cat.price}</div>
              <div onClick={() => history('/carts')} className='' >
                <button className='flex justify-center items-center text-center bg-[#1F451A] text-white cursor-pointer rounded-md  gap-2 p-3 w-full'>
                  <BsCart fontSize={28}/> Add to cart
                </button>
              </div>
            </div>     
          </Link>
        ))}
      </div>
    }
    </div>
  );
};

export default GridStyle;