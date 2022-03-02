import React from 'react';
import {
    Image,
    Text,
    View,
    StyleSheet,
} from 'react-native';
import SkiiImage from '../assets/ski.png';
export default function CategoryListItem(props) {
    console.log(props);
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{props.name}</Text>
            <Image style={styles.categoryImage} source={SkiiImage}></Image>
        </View>
    )
}
const mBottom = 16;
const styles = StyleSheet.create({
    container: {
        // width: 355,
        height: 170,
        backgroundColor: "yellow",
        padding: 16,
        alignItems: "center",
        justifyContent: "center",
        shadowColor: 'black', // màu đổ bóng
        shadowOpacity: 0.5, // độ mờ
        shadowRadius: 5, // độ tỏa 
        shadowOffset: {  // độ lệch đổ bóng , (xuống , qua phải)
            width: 0, height: 0,
        },
        marginBottom: mBottom,
    },
    title: {
        textTransform: 'uppercase',
        fontWeight: 'bold',
    },
    categoryImage: {
        width: 64,
        height: 64,
    }
})