import { StyleSheet, Dimensions } from 'react-native';
const screenHeight = Dimensions.get('window').height; 
const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
	wrapper: {
		flex: 1,
		height: '100%',
		backgroundColor: '#eceff4',
	},
	screenHeader: {
		padding: 15,
		backgroundColor: '#516832',
		width: '100%',
	},
	header: {
		marginTop: 5,
		marginBottom: 5,
		color: '#4c566a',
		fontSize: 20,
		fontWeight: '400',
	},
	h1: {
		color: '#eceff4',
		fontSize: 28,
		fontWeight: '300',
	},
	h2: {
		color: '#eceff4',
		fontSize: 26,
		fontWeight: '300',
	},
	h3: {
		color: '#eceff4',
		fontSize: 24,
		fontWeight: '300',
	},
	h4: {
		color: '#eceff4',
		fontSize: 22,
		fontWeight: '300',
	},
	main: {
		flex: 1,
		height: '100%',
		backgroundColor: '#305159',
		justifyContent: 'space-between',
		marginTop: 0,
		paddingHorizontal: 15,
		color: '#3b4252',
		fontSize: 20,
	},
	defaultContent: {
		padding: 15,
	},
	defaultText: {
		color: '#305159',
		marginTop: 5,
		marginBottom: 5,
		fontSize: 18,
		fontWeight: '300',
	},
	centeredContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	  },
	  timerContainer: {
		flex: 1,
		paddingHorizontal: 150,
		paddingBottom: 0,
		borderRadius: 8,
		backgroundColor: '#9da88d',
		height: 60,
		width: '100%',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
	  },
	  timerText: {
		color: 'white',
		fontSize: 20,
		alignSelf: 'center',
	  },
	  button: {
		backgroundColor: '#9da88d',
		paddingVertical: 10,
		paddingHorizontal: 15,
		borderRadius: 5,
		marginVertical: 10,
	  },
	  buttonText: {
		color: '#fff',
		fontSize: 18,
		textAlign: 'center',
	  },
	  textContainer: {
		backgroundColor: '#9da88d',
		borderRadius: 10,
		padding: 15,
		marginTop: 400,
		marginBottom: 30,
		justifyContent: 'center',
	  },
	  textContainer2: {
		backgroundColor: '#9da88d',
		borderRadius: 10,
		padding: 15,
		marginTop: 10,
		marginBottom: 20,
		justifyContent: 'center',
	  },
	  centeredText: {
		color: 'white',
		fontSize: 18,
		fontWeight: '300',
		textAlign: 'center',
	  },
	  quoteContainer: {
		backgroundColor: '#9da88d',
		padding: 15,
		borderRadius: 10,
		marginTop: 20,
		marginBottom: 15,
	  },
	  container: {
		flex: 1,
		backgroundColor: '#9da88d',
		borderRadius: 10,
		padding: 15,
		margin: 10,
		justifyContent: 'center',
	  },
	  aiBackground: {
		flex: 1,
		backgroundColor: 'black',
		alignItems: 'center',
	  },
	  aiTitle: {
		fontSize: 28,
		fontWeight: 'bold',
		marginBottom: 20,
		marginTop: 70,
	  },
	  aiBody: {
		backgroundColor: 'white',
		width: '102%',
		margin: 10,
	  },
	  bot: {
		fontSize: 16,
	  },
	  input: {
		borderWidth: 1,
		borderColor: 'black',
		width: '90%',
		height: 60,
		marginBottom: 10,
		borderRadius: 10,
	  },
	  aiButton: {
		backgroundColor: 'yellow',
		width: '90%',
		height: 60,
		borderRadius: 10,
		justifyContent: 'center',
		alignItems: 'center',
		marginBottom: 10,
	  },
	  aiButtonText: {
		fontSize: 25,
		fontWeight: 'bold',
		color: 'blue',
	  },
	  img: {
		height: screenHeight, 
		width: screenWidth, 
		justifyContent: 'center', 
		alignItems: 'center',
	  },
	  aiContainer: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#305159',
	  },
	  messagesContainer: {
		flexGrow: 1,
	  },
	  aiInputContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		paddingHorizontal: 16,
		paddingVertical: 8,
		backgroundColor: '#305159',
	  },
	  aiInput: {
		flex: 1,
		backgroundColor: 'white',
		marginRight: 8,
		borderWidth: 1,
		borderRadius: 8,
		padding: 8,
	  },
	  aiTextOutput: {
		flex: 1, 
		justifyContent: "center",
		backgroundColor: 'white',
		marginBottom: 10,
		marginTop: 10,
		marginLeft: 10,
		marginRight: 10,
		borderWidth: 1,
		borderRadius: 8,
		padding: 8,
	  }
	  
});
  
export {
	styles,
};

