import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import CategoryListItem from './components/CategoryListItem';

export default function App() {
    return (
        <View style={styles.container}>
            <ScrollView style={{paddingLeft: 10, paddingRight: 10}}>
                <CategoryListItem></CategoryListItem>
                <CategoryListItem></CategoryListItem>
                <CategoryListItem></CategoryListItem>
                <CategoryListItem></CategoryListItem>
                <CategoryListItem></CategoryListItem>
                <CategoryListItem></CategoryListItem>
            </ScrollView>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
});
