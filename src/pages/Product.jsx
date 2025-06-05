import React, { useContext, useEffect, useState } from 'react'
import { useParams,Link } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';
import { assest } from '../assets/assets'
import axios from 'axios';
import RelatedProducts from '../components/RelatedProducts';
 
const Product = () => {

  const { productId } = useParams();
  const { products, currency, addToCart,baseURL } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [size, setSize] = useState("")
  const [image, setImage] = useState("")

  const fetchProductData = async () => {
    console.log(productData)
    products.map((item) => {
      if (item.product_id === productId) {
        setProductData(item);
        setImage(item.images[0])
        return null;
      }
    })

  }
 // Add this useEffect to handle initial load and products changes
  useEffect(() => {
    if (products.length > 0) {
       fetchProductData();
    }
  }, [products])
  
  useEffect(() => {
    fetchProductData() 
  }, [productId])
  const handlePayOnline = async () => {
    try {
      // Create order on backend
      const response = await axios.post(`${baseURL}/api/create-order/`, {
        product_id: productData.product_id,
      });

      const { order_id, amount, currency, key } = response.data;


        const options = {
          key: key,
          amount: amount,
          currency: currency,
          name: 'Numlock IT Solutions',
          description: `Payment for ${productData.name}`,
          order_id: order_id,
          image: 'https://your-logo-url.com/logo.png', // Add your logo URL
          handler: async function (response) {
            try {
              // Verify payment on backend
              const verifyResponse = await axios.post(`${baseURL}/api/verify-payment/`, {
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_order_id: response.razorpay_order_id,
                razorpay_signature: response.razorpay_signature,
              });
              alert('Payment successful!');
              // Redirect or update UI
            } catch (err) {
              console.error('Payment verification failed:', err);
              alert('Payment verification failed. Please contact support.');
            }
          },
          prefill: {
            email: "skofficial665@gmail.com",
            contact: '1234567890', // Replace with dynamic phone number
          },
          theme: {
            color: '#1f56d0',
          },
        };
        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
    } catch (error) {
      console.error('Error creating order:', error);
      alert('Failed to initiate payment. Please try again.');
    }
  };

  return productData ? (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100 mx-4 sm:m-auto'>

      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>  {/* -------- Product Row ---------- */}

        {/* -------- Product Images ---------- */}

        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
          <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
            {productData.images.map((item, index) => (<img key={index} onClick={() => setImage(item)} className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer' src={`${item}`} alt="img" />))}
          </div>
          <div className='w-full sm:w-[80%]'>
            <img className='w-full h-auto' src={`${image}`} alt="" />
          </div>
        </div>

        {/* -------- Product Info ---------- */}

        <div className='flex-1'>

          <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>
          <div className='flex items-center gap-1 mt-2'>
            <img className='w-3.5' src={assest.star_icon} alt="" />
            <img className='w-3.5' src={assest.star_icon} alt="" />
            <img className='w-3.5' src={assest.star_icon} alt="" />
            <img className='w-3.5' src={assest.star_icon} alt="" />
            <img className='w-3.5' src={assest.star_dull_icon} alt="" />
            <p className='pl-2'>(122)</p>
          </div>
          <p className='mt-5 text-3xl font-medium'>{currency}{productData.price}</p>
          <p className='mt-5 text-gray-500 md:w-4/5'>{productData.description}</p>
          <div className='flex gap-4 my-8'>
          
          <Link to={"https://wa.link/nub0g7"} className='bg-green-600 rounded-full text-white px-8 py-3 text-sm active:bg-gray-700'>BUY NOW</Link>
          </div>
          
           <button
              onClick={handlePayOnline}
              className="bg-black text-white px-8 py-3 text-sm active:bg-gray-700"
            >
              Pay Online
            </button>

          <hr className='mt-10 sm:w-4/5' />

          <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
            <p>100% Original product.</p>
            <p>Cash on delivery is available on this product.</p>
            <p>Easy return and exchange policy within 7 days.</p>
          </div>
        </div>


      </div>

      <div className='mt-20'>
        <div className='flex'>
          <b className='border px-5 py-3 text-sm'>Description</b>
          <p className='border px-5 py-3 text-sm'>Reviews (122)</p>
        </div>
        <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500'>
          <p>An e-commerce website is an online platform that facilitates the buying and selling of products or services over the internet. It serves as a virtual marketplace where businesses and individuals can showcase their products, interact with customers, and conduct transactions without the need for a physical presence. E-commerce websites have gained immense popularity due to their convenience, accessibility, and the global reach they offer.</p>
          <p>E-commerce websites typically display products or services along with detailed descriptions, images, prices, and any available variations (e.g., sizes, colors). Each product usually has its own dedicated page with relevant information.</p>
        </div>
      </div>

      <RelatedProducts category={productData.category} subCategory={productData.subCategory} />
    </div>
  ) : <div className=' opacity-0'></div>
}

export default Product