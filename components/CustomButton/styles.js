import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  button: {
    height: 44,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: 'black',
    shadowOpacity: 0.5,
    shadowRadius: 3,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    elevation: 5,
  },
  text: {
    fontSize: 12,
    fontWeight: '500',
    textTransform: 'uppercase',
  },
});

export default styles;
