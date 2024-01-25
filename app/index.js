import {Text, View, TextInput, Button,} from 'react-native';
import Styles from '../styles/page-styles.js';
import { Link,} from 'expo-router';
import React from 'react';

export default function Page(){
    const [name, setName] = React.useState("");
    const [noun, setNoun] = React.useState("");
    const [event, setEvent] = React.useState("");

    //check to make sure something is in every box
    let isButtonEnabled = (name === '' || noun === '' || event === '') ? true : false;

    return (
        <View style={Styles.page}>

            {/* Instructions */}
            <Text style={Styles.textStyleInstr}>Input text into the boxes to create a story</Text>


            {/* Text Boxes */}
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

            {/* Buttons */}
            <View style={Styles.buttonContainer}>
            {/* Might want to change buttons to pressable */}
            <View style={Styles.buttonStyle}>

            <Link href={{
                pathname: "/storyPage",
                params: {name, noun, event},
                }} asChild>
            <Button title='Make Story' disabled={isButtonEnabled}></Button>
            </Link>
            </View>
            
            <View style={Styles.buttonStyle}>
            {/* Apparently this is how you properly call a fuction */}
            <Button title='Clear TextBoxes' onPress={() => clearTextBoxes()}></Button>
            </View>
            </View>
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