import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import React from 'react';
import styles from './styles.js';
import CustomButton from '../CustomButton';

const CarItem = (props) => {
  const { name, tagline, image } = props.car;

  return (
    <View style={styles.carContainer}>
      <ImageBackground style={styles.imageBackground} source={image} />
      <View style={styles.titles}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subTitle}>{tagline}</Text>
      </View>

      <View style={styles.buttonContainer}>
        <CustomButton
          type="primary"
          content="First Button"
          onPress={() => {
            console.warn('this is first button');
          }}
        />

        <CustomButton
          type="secondary"
          content="Second Button"
          onPress={() => {
            console.warn('this is secondary button');
          }}
        />
      </View>
    </View>
  );
};

export default CarItem;
