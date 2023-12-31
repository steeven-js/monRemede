import { View, Text, TextInput as RNTextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { COLORS } from '../../../config/Colors';

import styles from './styles';

const PasswordTextInput = ({ label, placeholder, value, onChangeText }) => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <View>
            {/* Text input label */}
            <Text style={[styles.textInputLabel, { color: COLORS.primary }]}>
                {label}
            </Text>
            {/* Password input */}
            <View style={[styles.textInputContainer]}>
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
                    secureTextEntry={!showPassword}
                    value={value}
                    onChangeText={onChangeText}
                />
                {/* Toggle password visibility button */}
                <TouchableOpacity
                    style={styles.visibilityToggle}
                    onPress={togglePasswordVisibility}>
                    <Text style={{ color: COLORS.primary }}>
                        {showPassword ? 'Cacher' : 'Voir'}
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default PasswordTextInput;
