import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { COLORS, IndependentColors } from '../../../config/Colors';

import styles from './styles';

const Button = ({ label, onPress, disabled }) => {
    return (
        <TouchableOpacity
            style={[styles.button, { backgroundColor: COLORS.accent }]}
            onPress={onPress}
            disabled={disabled}>
            <Text style={[styles.buttonLabel, { color: IndependentColors.white }]}>
                {label}
            </Text>
        </TouchableOpacity>
    );
};

export default Button;