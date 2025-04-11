import { View, Text, StyleSheet, Image, ScrollView, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";
import { getProductFromApi, getRating } from "../utils/Helper";
import primeLogo from "../assets/primeLogo.png";


const ProductScreen = () => {
  const [product, setProduct] = useState([]); // ✅ Fix: Ensure initial state is an empty array
  const [loading, setLoading] = useState(true); // ✅ Added loading state

  console.log("Product Data:", product); // ✅ Debugging

  useEffect(() => {
    console.log("Calling getProductFromApi...");
    
    if (typeof setLoading !== "function") {
      console.error("🚨 setLoading is NOT a function! Make sure it's defined in useState.");
      return;
    }
    
    getProductFromApi(setProduct, setLoading) // ✅ Pass setLoading here
      .then(() => console.log("Product data updated"))
      .catch((error) => console.error("Error in useEffect:", error));
  }, []);
  
  
  

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Results</Text>
      <Text style={styles.tagline}>
        Price and other details may vary based on product's size and color
      </Text>

      {/* ✅ Show loading indicator while fetching */}
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        product?.map((item) => (
          <View key={item.id} style={styles.productSection}>
            <View style={styles.productImg}>
              {/* ✅ Fix: Use item.image instead of prodImg */}
              <Image source={{ uri: item.image }} style={styles.image} />
            </View>

            <View style={styles.productDetails}>
              <Text style={styles.prodName}>{item.title}</Text>

              <View style={styles.row}>
                {/* ✅ Fix: Use item.rating.rate and item.rating.count */}
                <Text style={styles.rating}>{item.rating.rate} ⭐</Text>
                <Text style={styles.ratingCount}>({item.rating.count} reviews)</Text>
              </View>

              <View style={styles.row}>
                <Text style={styles.price}>₹ {item.price}</Text>
              </View>

              <Text style={styles.cashback}>
                Upto 5% cashback with Amazon Pay Credit Card
              </Text>
              <Image style={styles.logo} source={primeLogo} />
              <Text style={styles.cashback}>Category: {item.category}</Text>
            </View>
          </View>
        ))
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { padding: 10 },
  title: { fontSize: 18, fontWeight: "bold", marginTop: 40 },
  tagline: { fontSize: 11, color: "grey", marginBottom: 10 },
  productSection: { borderWidth: 1, borderColor: "#ddd", flexDirection: "row", marginVertical: 10, padding: 10, backgroundColor: "white" },
  productImg: { width: "40%", justifyContent: "center", alignItems: "center" },
  image: { width: 150, height: 200, resizeMode: "contain" },
  productDetails: { padding: 10, width: "60%" },
  prodName: { fontSize: 14, fontWeight: "bold", color: "black" },
  row: { flexDirection: "row", alignItems: "center", marginVertical: 5 },
  rating: { fontSize: 12, color: "#017185" },
  ratingCount: { fontSize: 12, color: "#555", marginLeft: 5 },
  price: { fontSize: 16, fontWeight: "bold" },
  cashback: { fontSize: 10, color: "grey", marginVertical: 2 },
  logo: { height: 17, width: 42, marginVertical: 3 },
});

export default ProductScreen;
