import {Text} from 'react-native';
import React from 'react'
import { COLORS } from '../../../config/Colors';

import styles from './styles';

const Question = ({question}) => {
    return (
        <Text style={[styles.question, { color: COLORS.textLowContrast }]}>
            {question}
        </Text>
    )
}

export default Question