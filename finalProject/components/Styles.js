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
    wip: {
      flexDirection: 'row',
      alignItems: 'center', 
      padding: 20,
      marginVertical: 8,
      backgroundColor: '#DBEAFF', 
      borderColor:'#483d8b', 
      borderWidth: 2
    },
  });

  export default styles