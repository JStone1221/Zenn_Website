import React, { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Header, Main, Wrapper } from '../components/structure.js';
import { styles } from '../styles/default.js';

const BasicScreen = props => {

	loadRouteHome = () => props.navigation.navigate('Home');

	return (
		<Wrapper style={styles.wrapper}>
			<Header style={styles.screenHeader} type={styles.h1} heading="Suicide Statistics"/>

				<ScrollView>
				<Main style={styles.main}>
					<View style={styles.textContainer2}>
          				<Text style={styles.centeredText}>
						  Suicide rates increased approximately 36% between 2000 2021. 
						  Suicide was responsible for 48,183 deaths in 2021, which is about one death every 11 minutes.3 
						  The number of people who think about or attempt suicide is even higher.
          				</Text>
       				</View>

        			<View style={styles.textContainer2}>
          				<Text style={styles.centeredText}>
						  Suicide affects people of all ages. In 2021, suicide was 
						  among the top 9 leading causes of death for people ages 10-64. Suicide was the second 
						  leading cause of death for people ages 10-14 and 20-34.
          				</Text>
        			</View>

        			<View style={styles.textContainer2}>
          				<Text style={styles.centeredText}>
						  By race/ethnicity, the groups with the highest rates are 
						  non-Hispanic American Indian/Alaska Native people followed by non-Hispanic White people. Other Americans with higher-than-average rates of suicide are veterans, people who live in rural areas, and workers in certain industries and occupations like mining and construction.
							Young people who identify as lesbian, gay, or bisexual have higher prevalence of suicidal 
						  thoughts and behavior compared to their peers who identify as heterosexual.
          				</Text>
        			</View>
				</Main>
				</ScrollView>
		</Wrapper>
	);
};

export default BasicScreen;