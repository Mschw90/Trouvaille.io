import { StyleSheet, Dimensions } from 'react-native'


//style
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputField: {
    alignSelf: 'stretch',
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 10,
    paddingLeft: 10,
    marginTop: 10,
    marginLeft: 5,
    marginRight: 5,
    borderRadius: 5,
    height: 60,
    // borderColor: 'gray',
    borderWidth: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.9)'
  },
  inputField2: {
    alignSelf: 'stretch',
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 10,
    paddingLeft: 10,
    marginTop: 10,
    marginLeft: 5,
    marginRight: 5,
    borderRadius: 5,
    height: 50,
    // borderColor: 'gray',
    borderWidth: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.9)'
  },
  inputField3: {
    alignSelf: 'stretch',
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 10,
    paddingLeft: 10,
    marginTop: 10,
    marginLeft: 5,
    marginRight: 5,
    borderRadius: 5,
    height: 90,
    // borderColor: 'gray',
    borderWidth: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.9)'
  },
  inputField4: {
    alignSelf: 'stretch',
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 10,
    paddingLeft: 10,
    marginTop: 10,
    marginLeft: 5,
    marginRight: 5,
    borderRadius: 5,
    height: 50,
    // borderColor: 'gray',
    borderWidth: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    width: 90
  },
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: 'center',
    backgroundColor: "transparent",
  },
  backgroundColor: {
    flex: 1,
    resizeMode: 'cover',
    position: 'absolute',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width
  },
  button: {
    alignSelf: 'stretch',
    paddingTop: 10,
    paddingBottom: 10,
    marginTop: 10,
    marginLeft: 5,
    marginRight: 5,
    borderRadius: 5,
  },
  spotifyButton: {

    alignSelf: 'stretch',
    paddingTop: 10,
    paddingBottom: 10,
    marginTop: 50,
    marginLeft: 5,
    marginRight: 5,
    borderRadius: 5,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#50AF4D'
  },
  buttonRed: {
    backgroundColor: '#FF585B',
  },
  buttonPurple: {
    backgroundColor: '#841C77',
  },
  buttonBlue: {
    backgroundColor: '#667AA9',
  },
  buttonGreen: {
    backgroundColor: '#2ECC40'
  },
  buttonGold: {
    backgroundColor: '#FFDF00'
  },
  buttonLightBlue: {
    backgroundColor: '#CB3066'
  },
  buttonLabel: {
    textAlign: 'center',
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },
  buttonLabel2: {
    textAlign: 'center',
    fontSize: 16,
    color: 'blue',
    fontWeight: 'bold',
  },
  appleLabel: {
    textAlign: 'center',
    fontSize: 16,
    color: 'red',
    fontWeight: 'bold',
  },
  spotifyLabel: {
    textAlign: 'center',
    fontSize: 16,
    color: 'black',
    fontWeight: 'bold',
  },
  textBig: {
    fontSize: 36,
    textAlign: 'center',
    margin: 10,
  },
  circularProfPic: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  drawer: {
    width: 200,
    backgroundColor: 'grey'
  },
  testHey: {
    marginLeft: 50,
    marginTop: 50
  },
  testTrip: {
    // height: ,
    backgroundColor: 'dodgerblue',
    borderWidth: 1,
    borderColor: 'black'
  },
  testTripDetailsRow: {
    alignItems: 'center',
    flex: 1,
  },
  testTripDetails: {
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    fontSize: 12
  },
  testTripDetailsRow2: {
    flex: 1,
    flexDirection: 'row',
  },
  testTripDate: {
    alignSelf: 'flex-end',
    flex: 1,
    justifyContent: 'flex-end',
    fontSize: 12
  },
  testTripSeats: {
    alignSelf: 'flex-end',
    justifyContent: 'space-between',
    flex: 1,
    fontSize: 12
  },
  sidebarView: {
    flex: 1,
    alignItems: 'center',
    backgroundColor:'rgba(28,28,28,.9)'
  },
  sidebarProfPic: {
    width:75,
    height: 75,
    marginTop: 25,
    borderRadius: 25
  },
  centerView: {
    alignItems: 'center'
  },
  viewRow: {
    flexDirection: 'row',
    backgroundColor: 'transparent'
  },
  heartIcon: {
    color: 'red',
    marginRight: 8
  },
  chatIcon: {
    color: 'white',
    marginRight: 8
  },
  commentOrLikeCount: {
    color: 'white',
    fontWeight: 'bold',
    alignSelf: 'flex-end'
  },
  mapButton: {
    paddingTop: 88,
    marginBottom: 33,
    width: Dimensions.get('window').width
  },
  submitButton: {
    width: Dimensions.get('window').width,
    alignItems: 'center',
    justifyContent: 'center',
    right: 15
  },
  calendarModal: {
  backgroundColor: '#aaa',
  height: 150,
  justifyContent: 'center',
  alignItems: 'center'
  },
  calendarView: {
    flex: 1,
    justifyContent: 'center'
  },
  calendar: {
    marginTop: 33,
    marginBottom: 33,
    height: 350,
    borderWidth: 1,
    borderColor: 'black'
  },
  newDriveView: {
    flex:.5,
    alignItems: 'center',
    justifyContent: 'center',
    width: Dimensions.get('window').width
  },
  newTripText: {
    fontSize: 35,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'white',
    textShadowColor: "black",
    textShadowRadius: 5,
    textShadowOffset: {width: 3, height: 2}
  },
  newTripViewTwo: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    flex: 1,
    width: Dimensions.get('window').width
  },
  newDriveButton: {
    backgroundColor: 'transparent',
    width: 150,
    height: 150,
    paddingTop: 55,
    paddingLeft: 20,
    borderWidth: 1,
    borderColor: 'white'
  },
  newDriveIcon: {
    fontSize: 90,
    marginBottom: 50,
    color: 'white'
  },
  newPassengerButton: {
    marginLeft: 10,
    backgroundColor: 'transparent',
    width: 150,
    height: 150,
    paddingTop: 15,
    paddingLeft: 20,
    borderWidth: 1,
    borderColor: 'white'
  },
  newPassengerIcon: {
    color: 'white',
    fontSize: 90
  },
  chatButton: {
    borderRadius: 10,
    justifyContent: 'center',
    backgroundColor: '#5cbbf1',
    width: Dimensions.get('window').width / 3,
    height: Dimensions.get('window').height / 21
  },
});

module.exports = styles;
