import { StyleSheet } from 'react-native';
import { DOSIS_BOLD, DOSIS_MEDIUM } from '../../../config/Constants';

// Exporting style
export default StyleSheet.create({
  mainWrapper: {
    flex: 1,
  },
  drawerHeaderImageBackground: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 140,
  },
  logo: {
    width: null,
    height: null,
    flex: 1,
    resizeMode: 'contain',
  },
  logoWrapper: {
    marginHorizontal: 10,
    padding: 10,
    borderRadius: 5,
    width: 70,
    aspectRatio: 1,
    backgroundColor: '#fff',
    borderRadius: 100,
  },
  brandName: {
    fontFamily: DOSIS_BOLD,
    fontSize: 14,
    color: '#fff',
  },
  brandSlogan: {
    fontFamily: DOSIS_MEDIUM,
    fontSize: 12,
    color: '#fff',
  },
  drawerItemLabel: {
    fontFamily: DOSIS_MEDIUM,
    fontSize: 14,
  },
  drawerItemIcon: {
    width: 25,
    height: 25
  },
});
