import { View, Text } from 'react-native'
import React from 'react'

const CategoryScreen = ({navigation}) => {
    return (
        <View>
            <Text onPress={() => navigation.goBack()}>Back</Text>
            <Text>CategoryScreen</Text>
        </View>
    )
}

export default CategoryScreen