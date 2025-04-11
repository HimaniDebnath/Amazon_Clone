import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Brand1 from '../assets/brand1.png'
import Brand2 from '../assets/brand2.jpg'
import Brand3 from '../assets/brand3.jpg'
import Brand4 from '../assets/brand4.jpeg'

const Brands = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Brands of the day</Text>
      <View style={styles.row}>
        <Image source={Brand1} style={styles.image}/>
        <Image source={Brand2} style={styles.image}/>
        
      </View>
      <View style={styles.row}>
      <Image source={Brand3} style={styles.image}/>
      <Image source={Brand4} style={styles.image}/>
        
      </View>
    </View>
  )
}

export default Brands

const styles = StyleSheet.create({
    container:{
        marginLeft:10
    },
    title:{
        fontSize:18,
        fontWeight:'bold',
        marginVertical:10
    },
    image:{
        height:150,
        width:180,
        marginTop:15,
        borderRadius:7
        
    },
    row:{

        flexDirection:'row',
        alignItems:'center',

    },

})