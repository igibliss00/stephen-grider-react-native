import React from 'react'
import { Image, Text, View, StyleSheet } from 'react-native'

const ImageDetail = ({ title, imageSource }) => {
    return (
        <View>
            <Text>{title}</Text>
            <Image source={imageSource} />
        </View>
    )
}

const styles = StyleSheet.create({})

export default ImageDetail