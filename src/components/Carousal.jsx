import { View, Text, Dimensions, StyleSheet, Image } from 'react-native'
import React, { useRef, useState } from 'react'
import CarouselSlider, {Pagination} from 'react-native-snap-carousel';
import {carousalData} from '../data/carousalData';



const sliderWidth = Dimensions.get('screen').width;
const itemWidth = sliderWidth * 0.999;

const Carousal = () => {
    const carousalRef = useRef();
    const [activeSlide, setActiveSlide] = useState(0);
    const renderItem = ({item}) => {
        return (
            <View style={styles.slide} key={item.id}>
                <Image source={item.img} style={styles.image}/>
            </View>
        );
    }
  return (
    <View style={styles.carousalContainer}>
    
      <CarouselSlider
              ref={carousalRef}
              data={carousalData}
              renderItem={renderItem}
              sliderWidth={sliderWidth}
              itemWidth={itemWidth}
              onSnapToItem={index => setActiveSlide(index)}
            />
      <Pagination
              dotsLength={carousalData.length}
              activeDotIndex={activeSlide}
              containerStyle={{ 
                position:'absolute',
                bottom:0,
                left:'26%'
              }}
              dotStyle={{
                  width: 10,
                  height: 10,
                  borderRadius: 5,
                  backgroundColor:"pink"
                  
              }}
              inactiveDotStyle={{
                width: 10,
                height: 10,
                borderRadius: 5,
                backgroundColor:'#FFFFFF'
              }}
              inactiveDotOpacity={0.4}
              inactiveDotScale={0.6}
            
            />     

    </View>
  )
}

const styles= StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f9f9f9',
                
      },
      slide: {
        backgroundColor: '#e1f5fe',
        borderRadius: 10,
        height: 240, 
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 5, // Shadow for Android
      },
      title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
      },
      image:{
        height:'100%',
        width:'100%'
      },
      carousalContainer:{
        position:'relative'
      }

});

export default Carousal