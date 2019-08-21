import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

const ComponentsScreen = () => {
    return ( 
        <View>
            <Text style={styles.textStyle}>React Native App</Text>
            <Text style={styles.subTextStyle}>My name is Abs</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 40
    },
    subTextStyle: {
        fontSize: 20
    }
})

export default ComponentsScreen