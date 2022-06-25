/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text,StyleSheet, Button } from 'react-native';

function Second(props) {
    const user = props.route.params.username;
    function backToFirst(){
        props.navigation.goBack();
    }
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Second Page</Text>
            <Text>{user}</Text>

            <Button title="Go Back" onPress={backToFirst} />
        </View>);
}

export default Second;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 40,
        fontWeight: 'bold',
        color: 'black',
    },
});
