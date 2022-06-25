/* eslint-disable prettier/prettier */
import React from 'react';
import {View,Text,StyleSheet, Button} from 'react-native';

function First(props) {
    function navigateToPage() {
        console.log(props);
        props.navigation.navigate('SecondScreen', {username: 'furkancakmak'});
    }
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Hello from First</Text>
            <Button title="Go To Details" onPress={navigateToPage}/>
        </View>);
}

export default First;

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
