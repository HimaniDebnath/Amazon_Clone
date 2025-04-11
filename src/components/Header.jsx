import { StyleSheet, TextInput, View } from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/AntDesign';
import Iconf from 'react-native-vector-icons/Feather';


const Header = () => {
  return (
    <View>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={['#88dae0', '#98e1d6', '#9ee4d4']}
        style={styles.container}
      >
        <View style={styles.inputRow}>
          <View style={styles.inputBox}>
         
           <Icon name="search" size={22} color="#1f1f1f" style={styles.icon} />
            <TextInput
           placeholder="Search Amazon.in"
           style={styles.TextInput}
           placeholderTextColor="gray"
            />
           <Icons name="scan1" size={22} color="#909594" />
         
         </View>
       <Iconf name="mic" size={22} color="black"/>

        </View>
        
      </LinearGradient>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: { 
    
    width: 400, // Set the width of the gradient container
    height: 80, // Set the height of the gradient container
    justifyContent: 'space-between', // Center text vertically
    alignItems: 'center', // Center text horizontally
    
    marginTop: 60, // Add some spacing for multiple headers
    flexDirection:'row'
    
  },
  TextInput: {
    flex:1,
    color: 'black', // Text color
    fontSize: 14, // Font size
    
  },
  inputBox: {
    alignItems: 'center',
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#a1bcc0',
    borderRadius: 8,
    backgroundColor: '#FFFFFF',
    width: '87%', // Set width relative to the parent container
    height: 50, // Increased height of the inputBox
    paddingHorizontal: 10, // Add horizontal padding
    alignSelf:'flex-start',
    marginLeft: 10,
    elevation:10
    
    
  },
  inputRow:{
    flexDirection: 'row', // Arrange inputBox and mic icon in a row
    alignItems: 'center', // Align items vertically on the same level
    justifyContent: 'space-between', // Space out the inputBox and mic
    width: '95%', // Full width of the row container
    paddingHorizontal: 10,
  },
  icon:{
    marginRight:10
  }
}); 