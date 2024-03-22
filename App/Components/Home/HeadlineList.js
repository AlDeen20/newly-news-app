import React from 'react'
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native'

import BrandColors from '../../Shared/BrandColors'
import { useNavigation } from '@react-navigation/native';

function HeadlineList({newsData}) {
    const navigator=useNavigation();
  return (
   <View>
      
       
    <FlatList 
    data={newsData}
    renderItem={({item})=>(
        <View>
             <View style={{backgroundColor:BrandColors.lightGray, height:1, marginTop:10}}></View>
        <TouchableOpacity style={{marginTop:15, display:'flex', flexDirection:'row'}}
         onPress={()=>{navigator.navigate('readnews', {news:item})}}
        >
            
            <Image
            source={{uri:item.urlToImage}}
            style={{width:130, height: 130, borderRadius:10,}}

            />
            <View style={{marginRight:120, marginLeft:10}}>
            <Text numberOfLines={4} style={{fontSize:15, fontWeight:'bold'}}>{item.title}</Text>
            <Text numberOfLines={1} style={{fontWeight:'bold',color:BrandColors.primary, fontSize:13,marginTop:5}}>{item?.source?.name}</Text>
            </View>
           
        </TouchableOpacity>
        </View>
    )}
    />


   </View>
  )
}

export default HeadlineList