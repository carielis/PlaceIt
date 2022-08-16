import {Dimensions, StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  steps: {
    display: 'flex',
    alignSelf: 'center',
  },
  display: {
    height: Dimensions.get('screen').height,
    backgroundColor: 'black',
  },
  root: {
    flexDirection: 'row',
  },
  stepRoot: {
    alignItems: 'center',
    flexDirection: 'column',
    marginTop: 10,
    width: Dimensions.get('window').width,
  },
  title: {
    marginTop: 38,
    width: 360,
  },
  subTitle: {
    marginTop: 8,
    width: 260,
  },
  buttonContainer: {
    alignItems: 'center',
    marginTop: 100,
  },
  helperContainer: {
    position: 'absolute',
    top: '-200%',
    width: 150,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
  },
  helperStyle: {
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 300,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  helpStyle: {
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 300,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
