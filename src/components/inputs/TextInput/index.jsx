import { Text, TextInput as RNTextInput } from 'react-native';
import React from 'react';
import { COLORS } from '../../../config/Colors';

import styles from './styles';

// Functional component
const CustomTextInput  = ({
    label,
    placeholder,
    value,
    onChangeText,
    autoCapitalize,
    keyboardType,
}) => {
    return (
        <>
            {/* Text input label */}
            <Text style={[styles.textInputLabel, { color: COLORS.primary }]}>
                {label}
            </Text>
            {/* Text input */}
            <RNTextInput
                placeholder={placeholder}
                placeholderTextColor={COLORS.gray2}
                style={[
                    styles.textInput,
                    {
                        borderColor: COLORS.primary,
                        backgroundColor: COLORS.secondary,
                        color: COLORS.tertiary,
                    },
                ]}
                value={value}
                onChangeText={onChangeText}
                autoCapitalize={autoCapitalize}
                keyboardType={keyboardType}
            />
        </>
    );
};

export default CustomTextInput ;
