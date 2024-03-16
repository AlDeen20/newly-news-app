import React, { useEffect, useState } from 'react'
import { View, Text, FlatList, TouchableOpacity, Image, Dimensions } from 'react-native'
import GlobalApi from '../../Services/GlobalApi'
import BrandColors from '../../Shared/BrandColors';

function TopHeadlineSlider({newsData}) {
  
  return (
    <View style={{marginTop:15}}>

        <FlatList
            data={newsData}
            horizontal={true}
           showsHorizontalScrollIndicator={false}
            renderItem={({item})=>(
                <TouchableOpacity 
                
                style={{width:Dimensions.get("screen").width*0.80, marginRight:10}}
                >
                    <Image source={{uri:item.urlToImage}}
                    style={{height:Dimensions.get("screen").width*0.77, borderRadius:10}}
                    />
                    <Text 
                    numberOfLines={3}
                    style={{
                    marginTop:10,
                    fontSize:20,
                    fontWeight:'bold'

                    }}>{item.title}</Text>
                    <Text style={{
                        marginTop:5,color:BrandColors.primary
                    }}>{item?.source?.name}</Text>
                </TouchableOpacity>
            )}

        />

       
    </View>
  )
}

export default TopHeadlineSlider