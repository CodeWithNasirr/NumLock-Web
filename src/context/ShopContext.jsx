import { createContext, useEffect, useState } from "react";
// import { products } from "../assets/assets";
import { useNavigate } from "react-router-dom"; 
import { toast } from "react-toastify";
import axios from "axios";
import API_BASE_URL from "../../config";

export const ShopContext = createContext();  
   
const ShopContextProvider = (props) => {
    const baseURL = API_BASE_URL; // Define your base URL
    const [products, setProducts] = useState([]);
    const currency = '₹'; 
    const delivery_fee = 10;
    const navigate = useNavigate();
    const [search, setSearch] = useState('');
    const [showSearch, setShowSearch] = useState(false);
    const [cartItems, setCartItems] = useState({});
    const [visible,setVisble]=useState(false)
    const [isLoading, setIsLoading] = useState(true);

    // Fetch products from API with loading state
    useEffect(() => {
        const fetchProducts = async () => {
            setIsLoading(true);
            try {
                const response = await axios.get(`${API_BASE_URL}/api/product/`);
                setProducts(response.data.data);
                // Cache products in localStorage
                localStorage.setItem('cachedProducts', JSON.stringify(response.data.data));
                localStorage.setItem('cacheTimestamp', Date.now());
            } catch (error) {
                setError(error.response?.data || "Error fetching products");
                // Try to load from cache if available
                const cachedProducts = localStorage.getItem('cachedProducts');
                if (cachedProducts) {
                    setProducts(JSON.parse(cachedProducts));
                }
            } finally {
                setIsLoading(false);
            }
        };

        // Check if we have recent cached data (less than 1 hour old)
        const cacheTimestamp = localStorage.getItem('cacheTimestamp');
        const cachedProducts = localStorage.getItem('cachedProducts');
        
        if (cachedProducts && cacheTimestamp && (Date.now() - parseInt(cacheTimestamp) < 3600000)) {
            setProducts(JSON.parse(cachedProducts));
            setIsLoading(false);
            // Still fetch fresh data in background
            fetchProducts();
        }
         else {
            fetchProducts();
        }
    }, []);

    const addToCart = async (itemId, size) => {

        if (!size) {
            toast.error('Select product size');
            return;
        }

        let cartData = structuredClone(cartItems);

        if (cartData[itemId]) {
            if (cartData[itemId][size]) {
                cartData[itemId][size] += 1;
            }
            else {
                cartData[itemId][size] = 1;
            }
        }
        else {
            cartData[itemId] = {};
            cartData[itemId][size] = 1
        }
        setCartItems(cartData)

    }

    const updateQuantity = async (itemId, size, quantity) => {

        let cartData = structuredClone(cartItems);
        cartData[itemId][size] = quantity;
        setCartItems(cartData);

    }

    const getCartCount = () => {
        let totalCount = 0;
        for (const items in cartItems) {
            for (const item in cartItems[items]) {
                try {
                    if (cartItems[items][item] > 0) {
                        totalCount += cartItems[items][item];
                    }
                } catch (error) {
                }
            }
        }
        return totalCount;
    }

    const getCartAmount = () => {
        let totalAmount = 0;
        for (const items in cartItems) {
            let itemInfo = products.find((product) => product._id === items);
            for (const item in cartItems[items]) {
                try {
                    if (cartItems[items][item] > 0) {
                        totalAmount += itemInfo.price * cartItems[items][item];
                    }
                } catch (error) {
                }
            }
        }
        return totalAmount;
    }

    const value = {
        isLoading,
        visible,setVisble, 
        currency, delivery_fee,
        products,
        navigate,
        search, setSearch,
        showSearch, setShowSearch,
        addToCart, updateQuantity,
        cartItems,
        getCartCount, getCartAmount,
        baseURL

    }

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )


}

export default ShopContextProvider;