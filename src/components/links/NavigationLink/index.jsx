import {SvgXml} from 'react-native-svg';
import {View, Text, TouchableOpacity} from 'react-native';
import {STANDARD_VECTOR_ICON_SIZE} from '../../../config/Constants';
import ic_arrow_right_dark_green from '../../../assets/icons/svg/ic_arrow_right_dark_green';
import { COLORS } from '../../../config/Colors';

import styles from './styles';


const NavigationLink = ({leftIcon, label, onPress}) => {

    return (
        <TouchableOpacity style={styles.link} onPress={onPress}>
            <View style={styles.linkIconAndLabelWrapper}>
                <View
                    style={[styles.linkIconWrapper, { backgroundColor: COLORS.secondary }]}>
                    {leftIcon}
                </View>
                <Text style={[styles.linkLabel, { color: COLORS.textLowContrast }]}>
                    {label}
                </Text>
            </View>

            {/* Arrow icon */}
            <SvgXml
                xml={ic_arrow_right_dark_green}
                width={STANDARD_VECTOR_ICON_SIZE}
                height={STANDARD_VECTOR_ICON_SIZE}
            />
        </TouchableOpacity>
    );
}

export default NavigationLink