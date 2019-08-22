import React, { useState } from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'

const TextScreen = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    return(
        <View>
            <Text styles={styles.title}>Username</Text>
            <TextInput
                style={styles.input} 
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={newValue => setUsername(newValue)}
                value={username}
            />
            <Text styles={styles.title}>Password</Text>
            <TextInput
                style={styles.input} 
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={newValue => setPassword(newValue)}
                value={password}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        alignContent: "center",
    },
    input: {
        margin: 15, 
        borderColor: "black",
        borderWidth: 1,
    }
})

export default TextScreen