import { StyleSheet } from 'react-native';
import { COLORS, SHADOWS, SIZES } from '../../constants'; // Update the path to your constants

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: SIZES.small,
    borderRadius: SIZES.small,
    backgroundColor: '#f3eef5',
    ...SHADOWS.medium,
    shadowColor: COLORS.white,
    alignItems: 'center',
  },
  
  textContainer: {
    flex: 1,
    marginHorizontal: SIZES.medium,
  },
  jobName: {
    fontSize: 18,
    color: COLORS.primary,
  },
  jobType: {
    fontSize: SIZES.small + 2,
    color: COLORS.gray,
    marginTop: 3,
    textTransform: 'capitalize',
  },
});

export default styles;
