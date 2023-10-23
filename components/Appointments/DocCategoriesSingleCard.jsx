import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import the useNavigation hook
import styles from './DocCategoriesSingleCard.style';

const CategoryCard = ({ category, imageSource }) => {
  const navigation = useNavigation();

  const handleSelectCategory = () => {
    // Use the navigation.navigate method to go to the doctorList screen
    navigation.navigate('doctorList', { category });
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handleSelectCategory}>
      <Image source={imageSource} style={styles.categoryImage} />
      <View style={styles.textContainer}>
        <Text style={styles.categoryName}>{category}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CategoryCard;
