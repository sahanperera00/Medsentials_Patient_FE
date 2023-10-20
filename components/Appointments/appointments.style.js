import { StyleSheet } from 'react-native';
import { COLORS, SHADOWS, SIZES } from '../../constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: SIZES.medium,
    borderRadius: SIZES.small,
    backgroundColor: '#f3eef5',
    ...SHADOWS.medium,
    shadowColor: COLORS.white,
    alignItems: 'center',
  },
  doctorImage: {
    width: 100,
    height: 100,
    borderRadius: 40,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
    marginHorizontal: SIZES.medium,
  },
  doctorName: {
    fontSize: SIZES.medium,
    color: COLORS.primary,
    marginBottom: 5, // Add space after the doctor's name
  },
  dateTimeContainer: {
    flexDirection: 'row',
    marginBottom: 5, // Add space after the date and time
  },
  date: {
    fontSize: SIZES.small,
    color: COLORS.gray,
    marginRight: 10, // Add space between date and time
  },
  time: {
    fontSize: SIZES.small,
    color: COLORS.gray,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 5, // Add space between date/time and buttons
  },
  cancelButton: {
    flex: 1,
    backgroundColor: '#bebebe',
    padding: 5, // Make the buttons smaller
    borderRadius: 5,
    alignItems: 'center',
    marginEnd: 5,
  },
  joinChatButton: {
    flex: 1,
    backgroundColor: '#7e57c2',
    padding: 5, // Make the buttons smaller
    borderRadius: 5,
    alignItems: 'center',
    marginStart: 5,
  },
  buttonText: {
    color: COLORS.white,
  },
});

export default styles;
