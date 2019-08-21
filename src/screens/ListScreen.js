import React from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'

const ListScreen = () => {
    const friends = [
        { name: "Friend 1", age: '1'},   
        { name: "Friend 2", age: '2'},   
        { name: "Friend 3", age: '3'},   
        { name: "Friend 4", age: '4'},   
        { name: "Friend 5", age: '5'},   
        { name: "Friend 6", age: '6'},   
        { name: "Friend 7", age: '7'},   
        { name: "Friend 8", age: '8'},   
    ]
    return (
        <FlatList
            keyExtractor={friend => friend.name}
            data={friends}
            renderItem={({ item }) => {
                return(
                    <View> 
                        <Text style={styles.textStyle}>Name: {item.name} - Age: {item.age}</Text>
                    </View>
                )
            }}
        />
    )
}

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 20,
    }
})

export default ListScreen