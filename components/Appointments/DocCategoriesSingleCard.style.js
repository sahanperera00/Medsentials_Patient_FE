import { StyleSheet } from 'react-native';
import { COLORS, SHADOWS, SIZES } from '../../constants';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 2,
    borderRadius: SIZES.small,
    backgroundColor: '#f3eef5',
    ...SHADOWS.medium,
    shadowColor: COLORS.white,
    alignItems: 'center',
  },
  categoryImage: {
    width: 60, // Adjust the width for your category image
    height: 60, // Adjust the height for your category image
    borderRadius: 30, // To make it a circular image
    marginRight: 40, // Add spacing between the image and text
    marginLeft:25
  },
  textContainer: {
    flex: 1,
    marginHorizontal: SIZES.medium,
  },
  categoryName: {
    fontSize: 18,
    color: COLORS.primary,
  },
});

export default styles;
