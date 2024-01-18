import {Text, View, TextInput, Button, } from 'react-native';
import Styles from '../styles/page-styles.js';
import { Link,} from 'expo-router';
import React from 'react';

export default function Page(){
    const [name, setName] = React.useState("");
    const [noun, setNoun] = React.useState("");
    const [event, setEvent] = React.useState("");

    return (
        <View style={Styles.page}>
            <Text style={Styles.textStyleInstr}>Instructions</Text>

            <TextInput 
                style={Styles.input}
                onChangeText={setName}
                value={name}
                placeholder='Name'        
            ></TextInput>

            <TextInput 
                style={Styles.input}
                onChangeText={setNoun}
                value={noun}
                placeholder='Noun'        
            ></TextInput>

            <TextInput 
                style={Styles.input}
                onChangeText={setEvent}
                value={event}
                placeholder='An Event'        
            ></TextInput>

            {/* Might want to change buttons to pressable */}
            {/* Buttons needs styling */}
            <Link href={{
                pathname: "/storyPage",
                params: {name, noun, event},
                }} asChild>
            <Button title='Make Story'></Button>
            </Link>

            {/* Apparently this is how you properly call a fuction */}
            <Button title='Clear TextBoxes' onPress={() => clearTextBoxes()}></Button>
        </View>
    )

    //pre:      
    //post:     Clears the textBoxes
    function clearTextBoxes(){
        setName("");
        setNoun("");
        setEvent("");
    }
}