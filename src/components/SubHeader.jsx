import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import Iconf from 'react-native-vector-icons/Feather';
import IconS from 'react-native-vector-icons/SimpleLineIcons';

const SubHeader = () => {
  return (
    <View>
        <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={['#bbe8ef', '#bdeee9', '#c3f1e3']}
        style={styles.container}
      >
       
        <Iconf name="map-pin" size={16} color='#2c4341' style={styles.mapPinIcon}/>
      <Text style={styles.deliver}>Deliver to Himani - Bangalore 560037</Text>
      <IconS name="arrow-down" size={10} color='#000' style={styles.arrowIcon}/>
        

      </LinearGradient>
    </View>
  )
}

export default SubHeader


  const styles = StyleSheet.create({
    container: {
      height: 50, 
      width:420,
      flexDirection: 'row', 
      alignItems: 'center', 
      justifyContent: 'flex-start', 
    
    },
    mapPinIcon: {
      marginRight:5 ,
      marginLeft:13
    },
    deliverText: {
    
      flex: 1, 
      color: '#2c4341', 
      fontSize: 13, 
      
    },
    arrowIcon: {
      marginLeft: 5,
    },
    
 
  
   
});