import React from 'react'
import { View, StyleSheet } from 'react-native'

const BoxScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.boxOne} />
            <View style={styles.boxTwo} />
            <View style={styles.boxThree} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        height: 200,
        justifyContent: "space-between"
    },
    boxOne: {
        height: 100,
        width: 100,
        backgroundColor: "pink", 
    },
    boxTwo: {
        height: 100,
        width: 100,
        backgroundColor: "green",
        alignSelf: "flex-end",
    },
    boxThree: {
        height: 100,
        width: 100, 
        backgroundColor: "purple"
    }
})

export default BoxScreen