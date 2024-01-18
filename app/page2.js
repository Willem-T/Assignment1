import {Text, View} from 'react-native';
import Styles from '../styles/page-styles.js';
import { Link, useLocalSearchParams } from 'expo-router';

export default function Page(){

    //needs to be passed from Link in index
    const params = useLocalSearchParams();
    const { food } = params;
    //could do  const { food } = useLocalSearchParams();
    
    return(
        <View style={Styles.page}>
            <Text>something here</Text>
            <Text>you like {food}</Text>
            <Link href='/'>Home</Link>
        </View>
    )
}