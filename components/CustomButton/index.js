import { View, Text, Pressable } from 'react-native';
import React from 'react';
import styles from './styles.js';

const CustomButton = (props) => {
  const { type, content, onPress } = props;

  const backgroundColor = type === 'primary' ? '#fff' : '#000';
  const textColor = type === 'primary' ? '#000' : '#fff';

  return (
    <View style={styles.container}>
      <Pressable style={[styles.button, { backgroundColor: backgroundColor }]} onPress={onPress}>
        <Text style={[styles.text, { color: textColor }]}>{content}</Text>
      </Pressable>
    </View>
  );
};

export default CustomButton;
