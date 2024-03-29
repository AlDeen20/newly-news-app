import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import CategoryTextSlider from '../Components/Home/CategoryTextSlider';
import { StatusBar } from 'expo-status-bar';
import BrandColors from '../Shared/BrandColors';
import { AntDesign } from '@expo/vector-icons';
import TopHeadlineSlider from '../Components/Home/TopHeadlineSlider';
import HeadlineList from '../Components/Home/HeadlineList';
import GlobalApi from '../Services/GlobalApi';

function Home() {
    const [newsData, setNewsData] = useState([]);

    const fetchData = async (category) => {
        try {
            const result = (await GlobalApi.getByCategory(category)).data;
            setNewsData(result.articles);
        } catch (error) {
            console.error('Error fetching news data:', error);
        }
    };

    const selectCategory = (category) => {
        fetchData(category);
    };

    useEffect(() => {
        const initialCategory = 'business';
        fetchData(initialCategory);
    }, []);

    return (
        <ScrollView style={{ backgroundColor: BrandColors.white }}>
            <View style={styles.header}>
                <Text style={styles.appName}>Newly App</Text>
                <AntDesign name="notification" size={25} color="black" />
            </View>
            {/* Category slider */}
            <CategoryTextSlider selectCategory={selectCategory} />
            {/* Top Headlines from news api */}
            <TopHeadlineSlider newsData={newsData} />
            <HeadlineList newsData={newsData} />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    appName: {
        fontSize: 25,
        fontWeight: 'bold',
        color: BrandColors.primary,
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
});

export default Home;
