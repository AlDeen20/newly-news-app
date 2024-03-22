import { useNavigation, useRoute } from '@react-navigation/native'
import React, { useEffect } from 'react'
import { Image, Text, View, StyleSheet, SafeAreaView, Share } from 'react-native'
import BrandColors from '../Shared/BrandColors';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import * as WebBrowser from 'expo-web-browser';
function ReadNews() {
    const newsData = useRoute().params.news;
    const navigation=useNavigation();
    const shareNews =()=>{
        Share.share({
            message:newsData.title+"\nRead More: "+newsData.url
        });
    }

    return (
        <ScrollView style={styles.container}>
            <View style={{marginTop:15, marginBottom:5, display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
                <TouchableOpacity onPress={()=>{ navigation.goBack()}}>

                <Ionicons name="arrow-back-circle-outline" size={30} color="#3480eb" />
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{
                    shareNews();
                }}>

                <Feather name="share-2" size={30} color="#3480eb" />
                </TouchableOpacity>
            
           
            </View>
            <View>
                <Image
                    source={{ uri: newsData.urlToImage }}
                    style={styles.image}
                    resizeMode="cover" // Adjust resizeMode as needed
                />
               
                <Text style={styles.title}>{newsData.title}</Text>
                <Text style={styles.source}>{newsData?.source?.name}</Text>
                <Text style={styles.description}>{newsData.description}</Text>
                <TouchableOpacity onPress={()=>{
                   WebBrowser.openBrowserAsync(newsData.url);
                }}>
                <Text style={styles.read_more}>Read More . . .</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: BrandColors.white,
        
        
    },
    image: {
        width: '100%',
        height: 300, 
        borderRadius: 15
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: BrandColors.black,
        marginVertical: 10,
        paddingHorizontal: 10,
    },
    source: {
        fontSize: 16,
        color: BrandColors.primary,
        paddingHorizontal: 10,
        marginTop:5,
        marginBottom:5
        
    },
    description: {
        fontSize: 16,
        color: BrandColors.black,
        paddingHorizontal: 10,
        lineHeight:25
    },
    read_more: {
        fontSize: 18,
        color: BrandColors.primary,
        paddingHorizontal: 10,
        marginTop:5,
        marginBottom:5,
        fontWeight:'bold'
        
    },
});

export default ReadNews;
