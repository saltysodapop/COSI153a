import { StyleSheet, View, Pressable, Text } from 'react-native';
import FontAwesome from "@expo/vector-icons/FontAwesome";
import stylesA from '../Styles';

export default function Button({ title,  onPress }) {
    return (
      <View
      style={[styles.buttonContainer, 
            { borderWidth: 4, borderColor: "#483d8b", borderRadius: 18,
              margin:20,}]}
      >
        <Pressable
          style={styles.button}
          onPress={onPress} 
        >
          <Text style={[stylesA.text, {color: 'black'}]}>{title}</Text>
        </Pressable>
    </View>
    );

}

const styles = StyleSheet.create({
  buttonContainer: {
    width: 320,
    height: 68,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
    borderWidth:10,
    borderColor:'black',
    backgroundColor: '#dbeaff',
  },
  button: {
    borderRadius: 10,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: '#dbeaff',
  },
});

