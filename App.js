import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, FlatList, SafeAreaView } from 'react-native';
import CategoryListItem from './components/CategoryListItem';

export default function App(props) {
    const [category, setCategory] = useState([
        { id: 1, name: 'Dung Cu Truot Tuyet' },
        { id: 2, name: 'Ao truot tuyet' },
        { id: 3, name: 'Van truot tuyet' },
    ]
    )
    return (
        <View style={styles.container}>
            {/* {category.map(category => (
                    <CategoryListItem key={category.id} name={category.name}></CategoryListItem>
                ))} */}
            <SafeAreaView>
                <FlatList style={{paddingLeft: 10, paddingRight: 10}}
                    data={category}
                    renderItem={({ item }) => <CategoryListItem name={item.name} />}
                    keyExtractor={(item) => `${item.id}`}
                />
            </SafeAreaView>
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
// import React from 'react';
// import { StyleSheet, View, Text } from 'react-native';
// import PagerView from 'react-native-pager-view';

// export default function App() {
//   return (
//     <PagerView style={styles.pagerView} initialPage={0}>
//       <View key="1">
//         <Text>First page</Text>
//       </View>
//       <View key="2">
//         <Text>Second page</Text>
//       </View>
//       <View key="3">
//         <Text>Second page</Text>
//       </View>
//     </PagerView>
//   );
// };

// const styles = StyleSheet.create({
//   pagerView: {
//     flex: 1,
//   },
// });
