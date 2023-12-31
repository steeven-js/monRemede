import styles from './styles';
import { Text } from 'react-native';
import React from 'react'

import { COLORS } from '../../../config/Colors';

const OrDivider = ({label}) => {
    return (
        <Text style={[styles.divider, { color: COLORS.textLowContrast }]}>
            {label}
        </Text>
    )
}

export default OrDivider