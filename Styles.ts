import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 30
   },
  
   flashcard: {
    borderRadius: 16,
    backgroundColor: "#fff",

    alignSelf: 'center',
    
    textAlign: 'center',
    textAlignVertical: 'center',
    
    fontSize: 20,
    fontFamily: 'sans-serif-medium',

    width: 260,
    height: 300,

    paddingHorizontal: 20,

    marginVertical: 10,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
   }
});
