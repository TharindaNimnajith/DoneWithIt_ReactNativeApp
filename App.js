import {StatusBar} from 'expo-status-bar'
import React from 'react'
import {
  Alert,
  Button,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableNativeFeedback,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View
} from 'react-native'

export default function App() {
  console.log('React Native')

  let x = 5
  console.log(x.toString())

  console.log(require('./assets/icon.png'))

  const handlePressed = () => {
    console.log('Text Pressed 3')
  }

  const handleImagePressed1 = () => {
    console.log('Image Pressed TouchableWithoutFeedback')
  }

  const handleImagePressed2 = () => {
    console.log('Image Pressed TouchableOpacity')
  }

  const handleImagePressed3 = () => {
    Alert.prompt(
      'My Title',
      'My message',
      (text) => {
        console.log(text)
      }
    )
    console.log('Image Pressed TouchableHighlight')
  }

  const onPressYes = () => {
    console.log('Yes Pressed')
  }

  const onPressNo = () => {
    console.log('No Pressed')
  }

  const handleImagePressed4 = () => {
    console.log('Image Pressed TouchableNativeFeedback')
    Alert.alert(
      'My Title',
      'My message',
      [
        {
          text: 'Yes',
          onPress: onPressYes
        },
        {
          text: 'No',
          onPress: onPressNo
        }
      ]
    )
  }

  const handleButtonTapped = () => {
    console.log('Button Tapped')
    alert('Button Tapped')
  }

  return (
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    //   <StatusBar style='auto'/>
    // </View>
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text>1111111111111111</Text>
        <StatusBar style='auto'/>
      </View>
      <View style={styles.container}>
        <Text>22222222222222222222</Text>
      </View>
      <View>
        <Text>33333333333333333333333</Text>
      </View>
      <Text>
        Open up App.js to start working on your app!
      </Text>
      <Text>
        Open up App.js to start working on your app!
        I am going to make this a very long text.
        Now I am going to make this even longer to see what happens!
      </Text>
      <Text numberOfLines={1}>
        Open up App.js to start working on your app!
        I am going to make this a very long text.
        Now I am going to make this even longer to see what happens!
      </Text>
      <Text numberOfLines={2}>
        Open up App.js to start working on your app!
        I am going to make this a very long text.
        Now I am going to make this even longer to see what happens!
      </Text>
      <Text onPress={() => console.log('Text Pressed 1')}>
        Open up App.js to start working on your app!
      </Text>
      <Text onPress={() => {
        console.log('Text Pressed 2')
      }}>
        Open up App.js to start working on your app!
      </Text>
      <Text onPress={handlePressed}>
        Open up App.js to start working on your app!
      </Text>
      <Image source={require('./assets/icon.png')}/>
      <TouchableWithoutFeedback onPress={handleImagePressed1}>
        <Image blurRadius={2}
               fadeDuration={1000}
               source={{
                 width: 200,
                 height: 100,
                 uri: 'https://picsum.photos/200/100'
               }}/>
      </TouchableWithoutFeedback>
      <TouchableOpacity onPress={handleImagePressed2}>
        <Image blurRadius={0}
               fadeDuration={1000}
               source={{
                 width: 100,
                 height: 100,
                 uri: 'https://picsum.photos/100'
               }}/>
      </TouchableOpacity>
      <TouchableHighlight onPress={handleImagePressed3}>
        <Image blurRadius={0}
               fadeDuration={1000}
               source={{
                 width: 100,
                 height: 100,
                 uri: 'https://picsum.photos/100'
               }}/>
      </TouchableHighlight>
      <TouchableNativeFeedback onPress={handleImagePressed4}>
        <Image blurRadius={0}
               fadeDuration={1000}
               source={{
                 width: 100,
                 height: 100,
                 uri: 'https://picsum.photos/100'
               }}/>
      </TouchableNativeFeedback>
      <View style={{
        width: 200,
        height: 70,
        backgroundColor: 'blue'
      }}/>
      <Button onPress={handleButtonTapped}
              title={'Click Me'}
              color='orange'/>
      <StatusBar style='auto'/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'dodgerblue',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
