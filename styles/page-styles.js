import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    //justifyContent: 'center',\
  },
  container: {
    padding: 20,
    height: 800, //this is the only way i can find to keep thing in position
    //width: '100%',
  },
  input: {
    width: '80%',
    textAlign: 'center',
    //flex: .08,
    borderWidth: 2,
    borderRadius: 10,
    paddingLeft: 15,
    margin: 15,
  },
  textStyleInstr: {
    textAlign: 'center',
    fontSize: 30,
    padding: 30,
    paddingTop: 50,
  },

  //Old styling that is completely broken
  // row: {
  //     flexWrap: 'wrap',
  //     flexDirection: 'row',
  //     alignItems: 'center',
  //     //justifyContent: 'space-between',
  //     flex: 1,
  //     paddingHorizontal: 20,
  //   },

  // rotatedText: {
  //     position: 'relative',
  //     left: '-20%',
  //     alignSelf: 'flex-end',
  //     marginBottom: '40%',
  //     width: '100%',
  //     //alignContent: 'flex-end',
  //     //justifyContent: 'flex-end',
  //     transform: [{ rotate: '-90deg' }],
  // },
  // storyText: {
  //     flex: 1,
  //     justifyContent: 'center',
  //     marginLeft: 20,

  // },

  boldText: {
    fontSize: 70,
  },

  row: {
    //flexDirection: 'row',
    height: '100%',
    width: '100%',
    //alignItems: 'flex-end', 
    paddingHorizontal: 20,
    position: 'absolute',
    //flex: 1,
  },

  rotatedText: {
    position: 'absolute',
    right: '50%', //use this instead of left: '-50%',
    top: '50%',
    transform: [{ rotate: '-90deg' }],
  },

  storyText: {
    position: 'absolute',
    left: '35%',
    top: '30%',
    flex: 1,
    width: '80%',
    height: '30%',

  },
  buttonContainer: {
    padding: '10%',
    //maxWidth: '50%', //needs centering if used 
  },
  buttonStyle: {
    padding: '5%',
  },
  logo: {
    position: 'absolute',
    margin: 10,
    height: 100,
    width: 100,
  },
  image: {
    position: 'relative',
    height: '30%',
    width: '50%',
    marginLeft: '45%'
  },
  dateTime: {
    position: 'absolute',
    marginLeft: '35%',
    marginTop: '40%',
  },
  signContainer: {
    position: 'absolute',
    marginLeft: '45%',
    top: '60%',
    width: '70%',
    height: '5%',
    backgroundColor: '#c3c3c3',
    borderRadius: 15,
  },
  storyTextStyle: {
    fontSize: 20,
    textAlign: 'center',
  },
});

export default styles;