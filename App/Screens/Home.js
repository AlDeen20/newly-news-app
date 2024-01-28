import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import CategoryTextSlider from '../Components/Home/CategoryTextSlider'
import { StatusBar } from 'expo-status-bar'
import BrandColors from '../Shared/BrandColors'
import { AntDesign } from '@expo/vector-icons';

function Home() {
  return (
    <View>
        <View style={styles.header}> 
            
            <Text style={styles.appName}>Newly App</Text>
            <AntDesign name="notification" size={25} color="black" />
        
        </View>
       
        <CategoryTextSlider/>
        
       
        
    </View>
  )
}

const styles = StyleSheet.create({
    appName:{
        fontSize:25,
        fontWeight:'bold',
        color:BrandColors.primary,
    },
    header:{
        display:'flex',flexDirection:'row', justifyContent:'space-between', alignItems:'center'
    },
});
export default Home