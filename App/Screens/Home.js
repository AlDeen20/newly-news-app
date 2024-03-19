import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import CategoryTextSlider from '../Components/Home/CategoryTextSlider'
import { StatusBar } from 'expo-status-bar'
import BrandColors from '../Shared/BrandColors'
import { AntDesign } from '@expo/vector-icons';
import TopHeadlineSlider from '../Components/Home/TopHeadlineSlider'
import HeadlineList from '../Components/Home/HeadlineList'
import GlobalApi from '../Services/GlobalApi'

function Home() {

    const [newsData,SetNewsData]=useState([]);
    useEffect(()=>{
        getTopHeadline();
    },[])
    const getTopHeadline=async()=>{
        const result = (await GlobalApi.getTopHeadline).data;
        SetNewsData(result.articles);
       
    };

  return (
  
    <ScrollView style={{backgroundColor:BrandColors.white}}>
        <View style={styles.header}> 
            
            <Text style={styles.appName}>Newly App</Text>
            <AntDesign name="notification" size={25} color="black" />

        </View>
        {/* Category slider */}
        <CategoryTextSlider/>
        {/* Top Headlines from news api */}
        <TopHeadlineSlider newsData={newsData}/>
       <HeadlineList newsData={newsData}/>
        
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    appName:{
        fontSize:25,
        fontWeight:'bold',
        color:BrandColors.primary,
     
        
    },
    header:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        
    },
});
export default Home