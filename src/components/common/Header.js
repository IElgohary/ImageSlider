import React from 'react';
import { Text, StyleSheet, View, Dimensions } from 'react-native';

// Get the height if the screen
const { height } = Dimensions.get('window');
const Header = (props) => {
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.textStyle}>{props.title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 20,
        fontWeight: '400',
        color: 'black'
    },
    viewStyle: {
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        height: height * 0.1,
        // paddingTop: 15,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative'
    }
});

export { Header };
