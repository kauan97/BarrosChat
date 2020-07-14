import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Messages from '../../components/Messages'
import BottomBar from '../../components/BottomBar'

export default function ChatScreen() {
  return (
    <View style={styles.container}>
      {/* <StatusBar style="auto" /> */}
      <Messages />
      <BottomBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
