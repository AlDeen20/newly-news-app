import React, { useState } from 'react';
import { FlatList, Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import BrandColors from '../../Shared/BrandColors';

function CategoryTextSlider(selectCategory) {
  const [active,setActivie]=useState(1);
  const DATA  = [
    { id: 1, name: 'Politics' },
    { id: 2, name: 'Technology' },
    { id: 3, name: 'Entertainment' },
    { id: 4, name: 'Sports' },
    { id: 5, name: 'International' },
    { id: 6, name: 'Local' }
  ];


    const onCategoryClick=(id)=>{
      setActivie(id)
    }

  return (
    <View>
        <FlatList
        showsHorizontalScrollIndicator={false}
        data={DATA}
        horizontal={true}
        renderItem={({item}) => (
          <TouchableOpacity style={styles.item} onPress={()=>{
            onCategoryClick(item.id);
            selectCategory(item.name);

          }}>
            
            <Text style={
              
              item.id==active? styles.selectText: styles.unSelectText
              
              }>{item.name}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={item => item.id.toString()}
        /> 
    </View>
  )
}
const styles = StyleSheet.create({
  item: {
    padding: 8,
    marginVertical: 15,
    marginHorizontal: 5,
    backgroundColor: BrandColors.lightGray,
    opacity: 0.7,
    borderRadius: 10,
  },
  selectText: {
    color:BrandColors.green,
    fontSize: 16,
    fontWeight:'bold'
    
  },
  unSelectText: {
    color:BrandColors.primary,
    fontSize: 16,
  },
});

export default CategoryTextSlider;
