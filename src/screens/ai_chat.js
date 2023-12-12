
import React, { useState } from 'react';
import {Text, View, TextInput, Button, ScrollView} from 'react-native';
import { Header, Wrapper } from '../components/structure.js';
import { styles } from '../styles/default.js';
import axios from 'axios';

const BasicScreen = () => {
	const [inputMessage, setInputMessage] = useState("")
	const [outputMessage, setOutputMessage] = useState("Results to be shown")

	const handleButtonClick=() =>{
		console.log(inputMessage)
		fetch("https://api.openai.com/v1/chat/completions", {
			method:"POST",
			headers: {
				"Content-Type": "application/json",
				"Authorization": "Bearer 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"
			},
			body:JSON.stringify({
				"messages": [{ "role": "user", "content": inputMessage }],
				"model": "gpt-3.5-turbo",
			})
		}).then((response)=>response.json()).then((data)=> {
			console.log(data.choices[0].message.content)
			setOutputMessage(data.choices[0].message.content.trim())
		})
	}

	const handleTextInput= (text) =>{
		setInputMessage(text)
		console.log(text)
	}
	
	const loadRouteHome = () => props.navigation.navigate('Home');

	return (
		<Wrapper style={styles.wrapper}>
			<Header style={styles.screenHeader} type={styles.h1} heading="AI Chat" />
			<View style={styles.aiContainer}>
				<View style={styles.aiTextOutput}>
					<Text>{outputMessage}</Text>
				</View>
				<View style={styles.aiInputContainer}>
					<TextInput style={styles.aiInput} placeholder="Type a message..." onChangeText={handleTextInput}/>
					<Button title="Send" onPress={handleButtonClick}/>
				</View>
				</View>
		</Wrapper>
	);
};

export default BasicScreen;

	

