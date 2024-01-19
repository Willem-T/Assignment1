import {Text, View, Button} from 'react-native';
import Styles from '../styles/page-styles.js';
import { Link, useLocalSearchParams } from 'expo-router';

export default function Page(){

    //needs to be passed from Link in index
    const params = useLocalSearchParams();

    //find a better way of doing this
    const { name } = params; 
    const { noun } = params; 
    const { event } = params; 

    return(
        <View style={Styles.row}>
            <Link href={{
                pathname: "/",
                //params: {name, noun, event}, not needed 
                }} asChild>
            <Button title='Back'></Button>
            </Link>
            <View style={Styles.rotatedText}>
            {/* transforms to rotate */}
            {/* TODO fix style */}
            <Text style={{transform: [{ rotate: '-90deg'}], fontSize: 45,}}>something here</Text>
            </View>
            <Text>some text {name}</Text>
            <Text>{noun} some other text</Text>
            <Text>final text {event}</Text>
        </View>
    )
}