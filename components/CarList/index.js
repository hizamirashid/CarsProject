import { View, Text, FlatList, Dimensions } from 'react-native';
import React from 'react';
import styles from './styles';
import cars from './cars';
import CarItem from '../CarItem';

const CarList = (props) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={cars}
        renderItem={({ item }) => <CarItem car={item} />}
        snapToAlignment={'start'}
        snapToInterval={Dimensions.get('window').height}
        decelerationRate={'fast'}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default CarList;
