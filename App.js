import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import CategoryListItem from './components/CategoryListItem';

export default function App() {
    return (
        <View style={styles.container}>
            <CategoryListItem></CategoryListItem>
            <CategoryListItem></CategoryListItem>
            <CategoryListItem></CategoryListItem>
            <CategoryListItem></CategoryListItem>
            <CategoryListItem></CategoryListItem>
            <CategoryListItem></CategoryListItem>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
