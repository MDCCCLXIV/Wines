

export const fetchCartData = (setProducts) => {
    fetch("http://localhost:8000/basket/", {
      credentials: "include",
    })
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  
  
  export const fetchProducts = (setShopProducts) => {
    fetch("http://localhost:8000/products-list")
    .then((response) => response.json())
    .then((data) => {
      setShopProducts(data)
    })
    .catch((error) => {
      console.log("Error: " , error);
    });
  };
  
  
  export const handleDeleteFromBasket = async (id ,setProducts) => {
      try {
        const response = await fetch("http://localhost:8000/update/", {
          method: "POST",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            action: "delete",
            productid: id,
          }),
        });
  
        if (!response.ok) {
          throw new Error("Failed to add to basket.");
        }
        console.log("data")
        fetchCartData(setProducts);
      } catch (error) {
        console.error(error);
      }
    };
  
  export const handleAddToBasket = async (product, setProducts) => {
          try {
        const response = await fetch("http://localhost:8000/update/", {
          method: "POST",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            action: "add",
            productid: product.id,
            qty: 4,
          }),
        });
        const data = await response.json()
        console.log(data)
        if (!response.ok) {
          throw new Error("Failed to add to basket.");
        }
        fetchCartData(setProducts);
      } catch (error) {
        console.error(error);
      }
    };
  