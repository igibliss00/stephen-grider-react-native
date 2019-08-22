import React from 'react';
import PropTypes from 'prop-types'
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text syle={styles.text}></Text>
      <Button 
        title="Go to Components Demo"
        onPress={() => navigation.navigate('Components')}
      />
      <Button 
        title="Go to List Demo"
        onPress={() => navigation.navigate('List')} 
      />
      <Button
        title="Go to Image Demo"
        onPress={() => navigation.navigate('Image')}
      />
      <Button
        title="Go to Counter Demo"
        onPress={() => navigation.navigate('Counter')}
      />
      <Button
        title="Go to Color Demo"
        onPress={() => navigation.navigate('Color')}
      />
      <Button
        title="Go to Text Demo"
        onPress={() => navigation.navigate('Text')}
      />
    </View>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

HomeScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
}

export default HomeScreen;
