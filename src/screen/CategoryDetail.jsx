import { View, Text } from 'react-native'
import React from 'react'

const CategoryDetail = ({ route, navigation }) => {
    const { categoryId } = route.params;
    const { categoryName } = route.params;

    console.log('CategoryDetail component loaded with category ID:', categoryId);

    return (
        <View>
            <Text onPress={() => {
                console.log('Navigating back from CategoryDetail');
                navigation.goBack();
            }}>Back</Text>
            <Text>Category name: {categoryName}</Text>
        </View>
    );
};

export default CategoryDetail;
