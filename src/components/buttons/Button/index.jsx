import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { COLORS } from '../../../config/Colors';

import styles from './styles';

const Button = ({ label, onPress, disabled }) => {
    return (
        <TouchableOpacity
            style={[styles.button, { backgroundColor: COLORS.secondary }]}
            onPress={onPress}
            disabled={disabled}>
            <Text style={[styles.buttonLabel, { color: COLORS.gray }]}>
                {label}
            </Text>
        </TouchableOpacity>
    );
};

export default Button;