
import React, { useState, useRef } from 'react';
import {View, Text, TouchableOpacity} from 'react-native'
// import custom components
import { ContentText, Header, Main, NavButton, Wrapper } from '../components/structure.js';
// import default app styles
import { styles } from '../styles/default.js';

const BasicScreen = props => {
	const [timer, setTimer] = useState(0);
	const intervalRef = useRef(null);

	const formatTime = timeInSeconds => {
		const minutes = Math.floor(timeInSeconds / 60);
		const seconds = timeInSeconds % 60;
		return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
	};

	const startTimer = () => {
		intervalRef.current = setInterval(() => {
			setTimer(prevTimer => prevTimer + 1);
		}, 1000);
	};

	const stopTimer = () => {
		clearInterval(intervalRef.current);
	};

	const resetTimer = () => {
		stopTimer();
		setTimer(0);
	};

	loadRouteHome = () => props.navigation.navigate('Home');

	return (

		<Wrapper style={[styles.wrapper, styles.centeredContainer]}>
			<Header style={styles.screenHeader} type={styles.h1} heading="Meditation" />

			<Main style={styles.main}>
				<View style={[styles.centeredContainer, styles.timerContainer]}>
					<Text style={styles.timerText}>{formatTime(timer)}</Text>
				</View>

				<TouchableOpacity style={styles.button} onPress={startTimer}>
          			<Text style={styles.buttonText}>Start Timer</Text>
				</TouchableOpacity>

				<TouchableOpacity style={styles.button} onPress={stopTimer}>
					<Text style={styles.buttonText}>Stop Timer</Text>
				</TouchableOpacity>
				
				<TouchableOpacity style={styles.button} onPress={resetTimer}>
					<Text style={styles.buttonText}>Reset Timer</Text>
				</TouchableOpacity>
			</Main>
		</Wrapper>

	);

};

export default BasicScreen;

	

