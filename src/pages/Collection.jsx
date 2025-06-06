import React, { useContext, useEffect, useState } from 'react'
import Title from '../components/Title'
import ProductItem from '../components/ProductItem'
import { ShopContext } from '../context/ShopContext'
import { assest } from '../assets/assets'
import SkeletonProduct from '../components/SkeletonProduct'
const Collection = () => {

  const {search,products, showSearch,isLoading } = useContext(ShopContext);
  // console.log(products)
  
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [showFilter, setShowFilter] = useState(false);
  const [sortType, setSortType] = useState('relavent')
  

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)){
      setCategory(prev=>prev.filter(a=>a!==e.target.value))
    }
    else{
      setCategory(prev=>[...prev,e.target.value])
    }
  }

  const toggleSubCategory = (e) => {

    if (subCategory.includes(e.target.value)) {
      setSubCategory(prev => prev.filter(a => a !== e.target.value))
    }
    else {
      setSubCategory(prev => [...prev, e.target.value])
    }

  }

  const applyFilter = () => {

    let productsCopy = products.slice()

    if (showSearch && search) {
      productsCopy = productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
    }

    if (category.length > 0) {
      productsCopy = productsCopy.filter(item => category.includes(item.category));
    }

    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter(item => subCategory.includes(item.subCategory));
    }

    setFilterProducts(productsCopy)

  }
  

  const sortProduct = async () => {

    let fpCopy = filterProducts.slice();

    switch (sortType) {
      case 'low-high':
        setFilterProducts(fpCopy.sort((a, b) => (a.price - b.price)));
        break;

      case 'high-low':
        setFilterProducts(fpCopy.sort((a, b) => (b.price - a.price)));
        break;

      default:
        applyFilter();
        break;
    }

  }

   // Add this useEffect to handle initial load and products changes
  useEffect(() => {
    if (products.length > 0) {
      applyFilter();
    }
  }, [products])

  useEffect(() => {
    applyFilter()
  }, [category, subCategory, search, showSearch])

  useEffect(() => {
    sortProduct();
  }, [sortType])


  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 px-4 border-t'>
      {/* Filter Options */}
      <div className='min-w-60'>
        <p onClick={() => setShowFilter(!showFilter)} className='my-2 text-xl flex items-center cursor-pointer gap-2'>FILTERS<img className={`h-3 sm:hidden ${showFilter ? ' rotate-90' : ''}`} src={assest.dropdown_icon} alt="" /></p>

        {/* Category Filter */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : ''} sm:block`}>
          <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'><input className='w-3' value={"DELL"} onChange={toggleCategory} type="checkbox" /> DELL </p>
            <p className='flex gap-2'><input className='w-3' value={"HP"} onChange={toggleCategory} type="checkbox" /> HP </p>
            <p className='flex gap-2'><input className='w-3' value={"MAC"} onChange={toggleCategory} type="checkbox" /> MAC </p>
          </div>
        </div>

        {/* Sub Category Filter */}
        {/* <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>TYPE</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'><input className='w-3' value={"Topwear"} onChange={toggleSubCategory} type="checkbox" /> DELLL </p>
            <p className='flex gap-2'><input className='w-3' value={"Bottomwear"} onChange={toggleSubCategory} type="checkbox" /> Bottomwear </p>
            <p className='flex gap-2'><input className='w-3' value={"Winterwear"} onChange={toggleSubCategory} type="checkbox" /> Winterwear </p>
          </div>

        </div> */}
      </div>

      {/* Right Side */}
      <div className='flex-1'>

        <div className='flex justify-between text-base sm:text-2xl mb-4'>
          <Title text1={"ALL"} text2={"LAPTOPS"} />

          {/* Product Sort */}
          <select onChange={(e) => setSortType(e.target.value)} className='border-2 border-gray-300 text-sm px-2' name="" id="">
            <option value="relavent">Sort by: Relavent</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
          </select>
        </div>

        {/* Map Products */}
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
          {isLoading ? (
            // Show skeleton loaders while loading
            Array(8).fill(0).map((_, index) => (
              <SkeletonProduct key={index} />
            ))
          ) : filterProducts.length > 0 ? (
            filterProducts.map((item, index) => (
              <ProductItem 
                key={index} 
                id={item.product_id} 
                image={item.images} 
                name={item.name} 
                price={item.price} 
              />
            ))
          ) : (
            <div className="col-span-full text-center py-10">
              <p>No products found matching your criteria</p>
            </div>
          )}
        </div>

      </div>
    </div>
  )
}

export default Collection
