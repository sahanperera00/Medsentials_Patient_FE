import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './DocCategoriesSingleCard.style';

const CategoryCard = ({ category, imageSource, handleSelectCategory }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={() => handleSelectCategory(category)}>
      <Image source={imageSource} style={styles.categoryImage} />
      <View style={styles.textContainer}>
        <Text style={styles.categoryName}>{category}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CategoryCard;
