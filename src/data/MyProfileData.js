import {SvgXml} from 'react-native-svg';
import {STANDARD_VECTOR_ICON_SIZE} from '../config/Constants';
import ic_bag_dark_green from '../assets/icons/svg/ic_bag_dark_green';
import ic_bell_dark_green from '../assets/icons/svg/ic_bell_dark_green';
import ic_chat_dark_green from '../assets/icons/svg/ic_chat_dark_green';
import ic_heart_dark_green from '../assets/icons/svg/ic_heart_dark_green';
import ic_wallet_dark_green from '../assets/icons/svg/ic_wallet_dark_green';
import ic_coupon_dark_green from '../assets/icons/svg/ic_coupon_dark_green';
import ic_location_dark_green from '../assets/icons/svg/ic_location_dark_green';

const MyProfileData = [
  {
    leftIcon: (
      <SvgXml
        xml={ic_location_dark_green}
        width={STANDARD_VECTOR_ICON_SIZE}
        height={STANDARD_VECTOR_ICON_SIZE}
      />
    ),
    label: 'Addresses',
  },
  {
    leftIcon: (
      <SvgXml
        xml={ic_bag_dark_green}
        width={STANDARD_VECTOR_ICON_SIZE}
        height={STANDARD_VECTOR_ICON_SIZE}
      />
    ),
    label: 'Orders',
  },
  {
    leftIcon: (
      <SvgXml
        xml={ic_heart_dark_green}
        width={STANDARD_VECTOR_ICON_SIZE}
        height={STANDARD_VECTOR_ICON_SIZE}
      />
    ),
    label: 'Wishlist',
  },
  {
    leftIcon: (
      <SvgXml
        xml={ic_wallet_dark_green}
        width={STANDARD_VECTOR_ICON_SIZE}
        height={STANDARD_VECTOR_ICON_SIZE}
      />
    ),
    label: 'Wallet',
  },
  {
    leftIcon: (
      <SvgXml
        xml={ic_coupon_dark_green}
        width={STANDARD_VECTOR_ICON_SIZE}
        height={STANDARD_VECTOR_ICON_SIZE}
      />
    ),
    label: 'Coupons',
  },
  {
    leftIcon: (
      <SvgXml
        xml={ic_bell_dark_green}
        width={STANDARD_VECTOR_ICON_SIZE}
        height={STANDARD_VECTOR_ICON_SIZE}
      />
    ),
    label: 'Notifications',
  },
  {
    leftIcon: (
      <SvgXml
        xml={ic_chat_dark_green}
        width={STANDARD_VECTOR_ICON_SIZE}
        height={STANDARD_VECTOR_ICON_SIZE}
      />
    ),
    label: 'Messages',
  },
];

// Exporting
export default MyProfileData;
