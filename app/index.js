import {Text, View, TextInput, Button} from 'react-native';
import Styles from '../styles/page-styles.js';
import { Link, } from 'expo-router';
import React from 'react';

export default function Page(){
    const [food, onChangeFood] = React.useState("");

    return (
        <View style={Styles.page}>
            <TextInput 
                style={Styles.input}
                onChangeText={onChangeFood}
                value={food}
                placeholder='What food?'        
            ></TextInput>
            <Text>Works Good</Text>
            <Link href={{
                pathname: "/page2",
                params: {food},
                }} asChild>
            <Button title='page 2'></Button>
            </Link>
        </View>
    )
}