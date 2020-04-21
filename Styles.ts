import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 24
   },
  
   flashcard: {
    borderRadius: 16,
    backgroundColor: "#fff",

    width: 260,
    height: 300,

    alignSelf: 'center',
    alignItems: 'center',

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
   },

   flashcardSide: {
    flex: 1,

    textAlign: 'center',
    textAlignVertical: 'center',
    
    fontSize: 20,
    fontFamily: 'sans-serif-medium'
   },
   
   footer: {
    flexDirection: 'row',
    width: '100%',
    backgroundColor: "#333",
    paddingVertical: 10,
    paddingHorizontal: 4
   },

   jumpToText: {
     flex: 1,
     paddingHorizontal: 10,
     textAlign: 'right',
     fontSize: 16,
     color: '#eee'
   }
});
