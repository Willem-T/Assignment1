import {Text, View, Button, Image, TextInput} from 'react-native';
import Styles from '../styles/page-styles.js';
import { Link, useLocalSearchParams } from 'expo-router';
import CurrentDate from './currentDate.js';
import { useState } from 'react';

export default function Page(){

    //needs to be passed from Link in index
    const params = useLocalSearchParams();

    const [sig, setSig] = useState("SIGNED: ");

    //find a better way of doing this
    const { name } = params; 
    const { noun } = params; 
    const { event } = params; 

    return(
        <View style={Styles.container}>

            {/* Back Button */}
            <View style={[Styles.buttonContainer, {padding: '0%'}]}>
                <Link href={{
                    pathname: "/",
                    //params: {name, noun, event}, not needed 
                }} asChild>
                    <Button title='Back'></Button>
                </Link>
            </View>

            {/* Logo */}
            <View>
                <Image source={require('../assets/madLibLogo.png')} style={Styles.logo}/>
            </View>

            {/* Mad lib image */}
            <View>
                <Image source={require('../assets/madLib.png')} style={Styles.image}/>
            </View>

            {/* Date and Time */}
            <View style={Styles.dateTime}>
                <Text>Current Date: {CurrentDate()}</Text>
            </View>

            {/* Rotated Text */}
            <View style={Styles.row}>
                <View style={Styles.rotatedText}>
                    <Text style={Styles.boldText}>Hall Pass</Text>
                </View>

                {/* Story Text */}
                <View style={Styles.storyText}>
                    <Text style={{fontSize: 20,}}>some text {name}</Text>
                    <Text style={{fontSize: 20,}}> {noun} some other text</Text>
                    <Text style={{fontSize: 20,}}>final text {event}</Text>
                </View>

                <TextInput 
                multiline={true}
                numberOfLines={4}
                onChangeText={text => setSig(text)}
                value={sig}
                />

            </View>

        </View>
    )
}