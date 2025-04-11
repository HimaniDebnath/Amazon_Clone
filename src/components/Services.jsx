import { View, Text, ScrollView, StyleSheet, Image } from 'react-native'
import React from 'react'
import AmazonPay from '../assets/amazonpay.png'
import SendMoney from '../assets/sendmoney.jpg'
import Scan from '../assets/scan.jpg'
import Pay from '../assets/pay.jpg'
import Serv1 from '../assets/serv1.jpeg'
import { RecentSearch } from '../data/RecentSearch'

const Services = () => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} 
    style={styles.container}
    contentContainerStyle={{paddingRight:10}}>
    <View style={styles.serviceContainer}>
        <View style={styles.row}>
          <View style={styles.innerContainer}>
           <Image style={styles.image} source={AmazonPay}/>
           <Text style={styles.title}>Amazon Pay</Text>
          </View>
          <View style={styles.innerContainer}>
           <Image style={styles.image} source={SendMoney}/>
           <Text style={styles.title}>Send Money</Text>
          </View>
       </View>
        <View style={styles.row}>
          <View style={styles.innerContainer}>
           <Image style={styles.image} source={Scan}/>
           <Text style={styles.title}>Scan QR</Text>
          </View>
          <View style={styles.innerContainer}>
           <Image style={styles.image} source={Pay}/>
           <Text style={styles.title}>Pay Bills</Text>
          </View>
       </View>
    </View>
    {RecentSearch.map(item => (
    <View style={styles.outerContainer}  key={item.id}>
        <Text style={styles.outerContainertxt}>{item.title}</Text>
        <Image source={item.image} style={styles.serviceimg}/>
    </View>

    ))}
    </ScrollView>
  )
}

export default Services;

const styles = StyleSheet.create({
    container:{
        marginTop:-20,
        paddingHorizontal:10,
        borderRadius: 10, 
    
    },
    image:{
        height:50,
        width:50,
        borderRadius:50
    },
    serviceContainer:{
        backgroundColor:'#FFF',
        borderRadius:5,
        elevation:5,
       
    },
    row:{
        flexDirection:'row',
        alignItems:"center",
        justifyContent:'center',
       
    },
    innerContainer:{
        padding:10,
        alignItems:'center',    
        paddingTop:15
        
    },
    title:{
        fontSize:10,
        color:'black',
        marginTop:2
    },
    serviceimg:{
        height:120,
        width:'100%'
    },
    outerContainer:{
        backgroundColor:'white',
        borderRadius:5,
        elevation:5,
        marginLeft:8,
        padding:5,
        width:140
    },
    outerContainertxt:{
        fontSize:13,
        color:'black',
        marginBottom:8
    }

});