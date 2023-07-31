
import Cookies from 'js-cookie';
export const fetchCartData = (setProducts) => {
    fetch("https://webwines-389de0eff6d3.herokuapp.com/api/basket", {
      credentials: "include",
    })
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        console.log("data", data)
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  
  
  export const fetchProducts = (setShopProducts) => {
    fetch("https://webwines-389de0eff6d3.herokuapp.com/api/products-list")
    .then((response) => response.json())
    .then((data) => {
      setShopProducts(data)
    })
    .catch((error) => {
      console.log("Error: " , error);
    });
  };
  
  

// ...

export const handleDeleteFromBasket = async (id, setProducts) => {
  try {
    const csrfToken = Cookies.get('csrftoken'); // 
    const response = await fetch("https://webwines-389de0eff6d3.herokuapp.com/api/basket-update/", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        "X-CSRFToken": csrfToken, 
      },
      body: JSON.stringify({
        action: "delete",
        productid: id,
      }),
    });

    // ...
    fetchCartData(setProducts)
  } catch (error) {
    console.error(error);
  }
};

export const handleAddToBasket = async (product, setProducts) => {
  try {
    const csrfToken = Cookies.get('csrftoken'); 

    const response = await fetch("https://webwines-389de0eff6d3.herokuapp.com/api/basket-update/", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        "X-CSRFToken": csrfToken, 
      },
      body: JSON.stringify({
        action: "add",
        productid: product.id,
        qty: 4,
      }),
    });

    fetchCartData(setProducts)
    // ...
  } catch (error) {
    console.error(error);
  }
};

  