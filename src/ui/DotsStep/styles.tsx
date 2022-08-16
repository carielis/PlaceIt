import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    marginTop: 50,
  },
  activeStep: {
    width: 20,
    height: 10,
    borderRadius: 10,
    margin: 2,
  },
  inActiveStep: {
    width: 10,
    height: 10,
    backgroundColor: 'gray',
    borderRadius: 10,
    margin: 2,
  },
});
