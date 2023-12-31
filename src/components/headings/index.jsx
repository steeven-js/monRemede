import React from 'react'
import styles from './styles';
import {Text} from 'react-native';
import { COLORS } from '../../config/Colors';

const ScreenTitle = ({title}) => {
    return (
        <Text style={[styles.screenTitle, { color: COLORS.gray }]}>
            {title}
        </Text>
    )
}

export default ScreenTitle