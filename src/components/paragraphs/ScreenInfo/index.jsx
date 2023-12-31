import styles from './styles';
import { Text } from 'react-native'; import React from 'react'
import { COLORS } from '../../../config/Colors';

const ScreenInfo = ({ info }) => {
    return (
        <Text style={[styles.info, { color: COLORS.textLowContrast }]}>{info}</Text>
    )
}

export default ScreenInfo