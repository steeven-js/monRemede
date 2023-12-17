import { View, Text } from 'react-native'
import React from 'react'

const CategoryDetail = ({navigation}) => {
    return (
        <View>
            <Text onPress={() => navigation.goBack()}>Back</Text>
            <Text>CategoryDetail</Text>
        </View>
    )
}

export default CategoryDetail