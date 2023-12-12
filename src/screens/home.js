import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { View, Text, ScrollView, ImageBackground} from 'react-native';
import { ContentText, Header, Main, NavButton, Wrapper } from '../components/structure.js';
import { styles } from '../styles/default.js';

const HomeScreen = props => {
  const [quote, setQuote] = useState('');

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const response = await axios.get('https://api.quotable.io/random');
        const { content, author } = response.data;
        const formattedQuote = `"${content}" - ${author}`;
        setQuote(formattedQuote);
      } catch (error) {
        console.error('Error fetching quote:', error.message);
      }
    };

    fetchQuote();
  }, []);


  return (
    <Wrapper style={styles.wrapper}>
      <Header style={styles.screenHeader} type={styles.h1} heading='Zenn' />

      <ScrollView>
      <Main style={styles.main}>
        <View style={styles.quoteContainer}>
          <ContentText style={styles.centeredText}>
            {quote || 'Loading quote...'}
          </ContentText>
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.centeredText}>
            Welcome to Zenn!
            This is a suicide awarness app made to accompany you on your mental health journey.
            Enjoy exploring the app and finding ways to better yourself and learning more on the topic of suicide.
          </Text>
        </View>
      </Main>
      </ScrollView>
    </Wrapper>
  );
};

export default HomeScreen;

