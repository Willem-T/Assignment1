import {Text, View, Button, Image, TextInput,} from 'react-native';
import Styles from '../styles/page-styles.js';
import { Link, useLocalSearchParams } from 'expo-router';
import CurrentDate from './currentDate.js';
import { useState } from 'react';

export default function Page(){

    //needs to be passed from Link in index
    const params = useLocalSearchParams();

    const [sig, setSig] = useState("SIGNED: ");


    //should look into how you can change these var names
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
                <Text style={Styles.storyTextStyle}>Current Date: {CurrentDate()}</Text>
            </View>

            {/* Rotated Text */}
            <View style={Styles.row}>
                <View style={Styles.rotatedText}>
                    <Text style={Styles.boldText}>Hall Pass</Text>
                </View>

                {/* Story Text */}
                <View style={Styles.storyText}>
                    <Text style={Styles.storyTextStyle}>{name} is too cool</Text>
                    <Text style={Styles.storyTextStyle}>for {noun} class</Text>
                    <Text style={Styles.storyTextStyle}>instead, she/he will be</Text>
                    <Text style={Styles.storyTextStyle}>attending the {event}</Text>
                </View>

                {/* signature text */}
                <View style={Styles.signContainer}>
                    <TextInput
                        multiline={true}
                        numberOfLines={1}
                        maxLength={25}
                        onChangeText={text => setSig(text)}
                        value={sig}
                    />
                </View>
            </View>

        </View>
    );
}