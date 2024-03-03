import React from 'react';
import { FlatList, Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import BrandColors from '../../Shared/BrandColors';

function CategoryTextSlider() {
  
  const DATA  = [
    { id: 1, name: 'Politics' },
    { id: 2, name: 'Technology' },
    { id: 3, name: 'Entertainment' },
    { id: 4, name: 'Sports' },
    { id: 5, name: 'International' },
    { id: 6, name: 'Local' }
  ];

 
    
  return (
    <View>
        <FlatList
        data={DATA}
        horizontal={true}
        renderItem={({item}) => (
          <TouchableOpacity style={styles.item}>
            <Text style={styles.title}>{item.name}</Text>
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
    marginVertical: 8,
    marginHorizontal: 5,
    backgroundColor: BrandColors.lightGray,
    opacity: 0.7,
    borderRadius: 10,
  },
  title: {
    fontSize: 16,
  },
});

export default CategoryTextSlider;
