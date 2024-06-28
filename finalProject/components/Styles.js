import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#f5fffa',
      alignItems: 'center',
      justifyContent: 'center',
    },
    box: {
      flexDirection: 'column-reverse',
      position: 'absolute',
      height: '15%',
      width: '15%',
    },
    text: {
      fontFamily: 'monospace',
      color: '#483d8b',
    },
    input: {
      height: 40, 
      borderColor: '#483d8b', 
      borderWidth: 2 
    },
    wip: {
      flexDirection: 'row',
      alignItems: 'center', 
      padding: 20,
      marginVertical: 8,
      backgroundColor: '#dbeaff', 
      borderColor: '#483d8b', 
      borderWidth: 2
    },
    complete: {
      flexDirection: 'row',
      alignItems: 'center', 
      padding: 20,
      marginVertical: 8,
      backgroundColor: '#f2f4f7',
      borderColor: '#454352',
      borderWidth: 2,
    },
    separator: {
      borderBottomColor: '#483d8b',
      borderBottomWidth: StyleSheet.hairlineWidth,
    },
    modalBox: {
      margin: 20,
      backgroundColor: '#f5fffa',
      borderRadius: 20,
      padding: 35,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
      borderColor: '#483d8b',
      borderWidth: 1.5,
    },
  });

  export default styles