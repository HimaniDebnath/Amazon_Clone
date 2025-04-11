import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Recommend from '../assets/recommend.jpg'

const Deals = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recommended deals for you</Text>
      <Image source={Recommend} style={styles.image}/>
      <View style={styles.bottomSection}>
        <View style={styles.row}>
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btntxt}>18% off</Text>
      </TouchableOpacity>
        <Text style={styles.deal}>Deal</Text>

        </View >
        <View style={styles.row}>
        <Text style={styles.discountPrice}>₹ 1,549.00</Text>
        <Text style={styles.mrp}>M.R.P</Text>
        <Text style={styles.actualPrice}>₹ 1,895.00</Text>
        </View>

        <Text style={styles.productName}>Everyuth Kit for Glowing Skin for all skin types</Text>
        <Text style={styles.allDeals}>See all deals</Text>

      </View>
    </View>
  )
}

export default Deals

const styles = StyleSheet.create({
    container:{

    },
    title:{
        fontSize:18,
        fontWeight:'bold',
        paddingHorizontal:10
    },
    image:{
        height:300,
        width:'100%',
        marginVertical:10
    },
    bottomSection:{
        paddingHorizontal:10
    },
    btn:{
        backgroundColor:'#be0201',
        width:55,
        alignItems:'center',
        padding:2,
        borderRadius:3
    },
    btntxt:{
        color:'white',
        fontSize:12
    },
    deal:{
        color:'#be0201',
        fontWeight:'bold',
        marginLeft:6,
        fontSize:12
    },
    row:{
        flexDirection:'row',
        alignItems:'center'
    },
    discountPrice:{
        fontSize:16,
        marginVertical:5
    },
    mrp:{
        fontSize:10,
        marginHorizontal:5,
        color:'grey'
    },
    actualPrice:{
        fontSize:10,
        textDecorationLine:'line-through',
        color:'grey'
    },
    productName:{
        fontSize:14
    },
    allDeals:{
        color:'#017185',
        fontSize:14,
        marginVertical:10,
        
    }

})