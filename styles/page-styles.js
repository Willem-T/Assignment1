import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        //justifyContent: 'center',
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
    row: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    rotatedText: {
        fontSize: 30,
        justifyContent: 'flex-end',
    },
});

export default styles;