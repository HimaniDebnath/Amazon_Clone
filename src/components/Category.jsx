import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'


import { categories } from '../data/categories';
import { useNavigation } from '@react-navigation/native';

const Category = () => {
  const navigation = useNavigation();
  return (
    <ScrollView horizontal style={styles.container}>
        {categories.map(item =>(

        <TouchableOpacity onPress={()=> navigation.navigate('ProductScreen')}
         style={styles.category} key={item.id}>
        <Image source={item.image} style={styles.imgstyle}/>
      <Text style={styles.title}>{item.title}</Text>
        </TouchableOpacity>
        ))}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    container:{
        paddingTop:8,
        backgroundColor:'#FFF',
        paddingBottom:7
  
    },
    imgstyle:{
        height:50,
        width:60,
        padding:5
        

    },
    title:{
        fontSize:12,
        color:'#2c4341',
        padding:2
    },
    category:{
        paddingHorizontal:8,
        alignItems:'center'
    }

});
export default Category

