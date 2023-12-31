import {TouchableOpacity, Text} from 'react-native';
import React from 'react'
import { COLORS } from '../../../config/Colors';

import styles from './styles';

const Link = ({ label, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <Text style={[styles.label, { color: COLORS.accent }]}>{label}</Text>
        </TouchableOpacity>
    )
}

export default Link