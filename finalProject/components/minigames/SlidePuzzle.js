import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import { PicturePuzzle, PuzzlePieces } from 'react-native-picture-puzzle';
import styles from '../Styles';

export default function App() {
    let p = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    for (let i = 1; i < 9; i++) {
        const rand = Math.round((Math.random() * 7))+1;
        const temp = p[i];
        p[i] = p[rand];
        p[rand] = temp;
    }
    const [hidden, setHidden] = useState(0); // piece to obscure
    const [pieces, setPieces] = useState(p);
    const source = require('../assets/doggo.jpg');

    const renderLoading = React.useCallback((): JSX.Element => <ActivityIndicator />, []);
    const onChange = React.useCallback((nextPieces: PuzzlePieces, nextHidden: number | null): void => {
        setPieces([...nextPieces]);
        setHidden(nextHidden);
    }, [setPieces, setHidden]);

    return (
        <View style={[styles.container, {flex: 1}]}>
            <Text style={styles.text}>Solve the puzzle!</Text>
            <Text style={styles.text}> </Text>
            <PicturePuzzle
                size={300}
                pieces={pieces}
                hidden={hidden}
                onChange={onChange}
                source={source}
                renderLoading={renderLoading}
            />
        </View>
    );
}
