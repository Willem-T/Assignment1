import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        //justifyContent: 'center',
    },
    container: {
        flex: 1,
        padding: 20,
        height: '100%',
        width: '100%',
    },
    input: {
        width: '80%',
        //flex: .08,
        borderWidth: 2,
        borderRadius: 10,
        paddingLeft: 15,
        margin: 15,
    },
    textStyleInstr: {
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
        flexDirection: 'row',
        height: '100%',
        width: '100%',
        //alignItems: 'flex-end', 
        paddingHorizontal: 20,
        position: 'absolute',
        flex: 1,
      },
    
      rotatedText: {
        flex: 1,
        position: 'absolute',
        right: '25%', //use this instead of left: '-50%',
        bottom: '30%',
        transform: [{ rotate: '-90deg' }],
      },
    
      storyText: {
        position: 'absolute',
        left: '60%',
        top: '25%',
        flex: 1,
      },

});

export default styles;