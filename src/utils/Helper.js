import FontAwesome from 'react-native-vector-icons/FontAwesome';


export const getRating = (rating = 0) => {
    if (typeof rating !== "number") {
        console.error("getRating received a non-number value:", rating);
        return [];
    }

    const ratingStar = [];
    const fullStar = <FontAwesome name="star" size={10} color="#ffa41c"/>;
    const halfStar = <FontAwesome name="star-half" size={10} color="#ffa41c"/>;
    const emptyStar = <FontAwesome name="star-o" size={10} color="#ffa41c"/>;

    for (let i = 0; i < 5; i++) {
        if (i < Math.floor(rating)) {
            ratingStar.push(fullStar);
        } else {
            ratingStar.push(emptyStar);
        }
    }
    if (rating % 1 !== 0) {
        ratingStar[Math.floor(rating)] = halfStar;
    }
    return ratingStar;
};
export const getProductFromApi = async (setProduct, setLoading) => {
    try {
      console.log("🔵 Fetching products from API...");
      
      setLoading(true); // ✅ Show loading before API call
  
      const response = await fetch("https://fakestoreapi.com/products");
      
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data = await response.json();
      console.log("🟢 API Response Data:", data); // ✅ Log API response
  
      setProduct(data); // ✅ Update product state
      setLoading(false); // ✅ Stop loading
    } catch (error) {
      console.error("🔴 Error fetching products:", error);
      setLoading(false); // ✅ Stop loading even if there's an error
    }
  };
  
  
  
  