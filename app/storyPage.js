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
        <View style={Styles.page}>
            <Text>something here</Text>
            <Text>{name} {noun} {event}</Text>

            <Link href={{
                pathname: "/",
                params: {name, noun, event},
                }} asChild>
            <Button title='Back'></Button>

            </Link>
        </View>
    )
}