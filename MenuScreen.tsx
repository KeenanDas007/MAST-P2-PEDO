import React, { useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export interface Dish {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
}

interface MenuScreenProps {
  onChefLogin: () => void;
}

const MenuScreen: React.FC<MenuScreenProps> = ({ onChefLogin }) => {
  const [search, setSearch] = useState('');
  const [selectedDish, setSelectedDish] = useState<Dish | null>(null);

  const dishes: Dish[] = [
    {
      id: '1',
      name: 'GOURMET CHICK BURGER',
      description: 'FRIED CHICKEN BREAST CRISP AND THIGHS FRIED',
      price: 12.99,
      image: 'https://via.placeholder.com/300x200/333/fff?text=Burger'
    },
    {
      id: '2',
      name: 'PASTRANHO',
      description: 'CREATIVE LIFT-READ RICH AND TEST EYE FRIED',
      price: 15.99,
      image: 'https://via.placeholder.com/300x200/333/fff?text=Pastranho'
    },
    {
      id: '3',
      name: 'SERIOIR STEAK',
      description: 'RICH AND THIGHS FRIED SERIOIR WITH A SIDE OF CHIPS',
      price: 24.99,
      image: 'https://via.placeholder.com/300x200/333/fff?text=Steak'
    }
  ];

  if (selectedDish) {
    return (
      <View style={styles.screen}>
        <View style={styles.screenHeader}>
          <TouchableOpacity onPress={() => setSelectedDish(null)} style={styles.backButton}>
            <Text style={styles.backButtonText}>BACK TO MENU</Text>
          </TouchableOpacity>
        </View>
        <ScrollView style={styles.dishDetail}>
          <Image source={{ uri: selectedDish.image }} style={styles.dishImage} />
          <Text style={styles.dishName}>{selectedDish.name}</Text>
          <Text style={styles.dishDescription}>{selectedDish.description}</Text>
          <Text style={styles.price}>${selectedDish.price.toFixed(2)}</Text>
          <View style={styles.tags}>
            <Text style={styles.tag}>NON VEGAN</Text>
            <Text style={styles.tag}>GRILLED IN BUTTER</Text>
            <Text style={styles.tag}>SYMBOL GLUTEN</Text>
          </View>
        </ScrollView>
      </View>
    );
  }

  return (
    <View style={styles.screen}>
      <View style={styles.screenHeader}>
        <Text style={styles.screenTitle}>TODAYS MENU</Text>
        <View style={styles.controls}>
          <TextInput 
            style={styles.searchInput}
            placeholder="SEARCH"
            placeholderTextColor="#999"
            value={search}
            onChangeText={setSearch}
          />
          <TouchableOpacity style={styles.controlButton}>
            <Text style={styles.controlButtonText}>REVISOR</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.controlButton}>
            <Text style={styles.controlButtonText}>PURPOSE</Text>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView style={styles.dishes}>
        {dishes.map(dish => (
          <TouchableOpacity 
            key={dish.id} 
            style={styles.dishCard} 
            onPress={() => setSelectedDish(dish)}
          >
            <Image source={{ uri: dish.image }} style={styles.dishImage} />
            <Text style={styles.dishCardName}>{dish.name}</Text>
            <Text style={styles.dishCardDescription}>{dish.description}</Text>
            <Text style={styles.price}>${dish.price.toFixed(2)}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 16,
    backgroundColor: '#1a1a1a',
  },
  screenHeader: {
    marginBottom: 20,
  },
  screenTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 16,
  },
  backButton: {
    padding: 12,
    backgroundColor: '#666',
    borderRadius: 6,
    alignSelf: 'flex-start',
  },
  backButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  controls: {
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
  },
  searchInput: {
    flex: 1,
    padding: 12,
    backgroundColor: '#333',
    color: '#fff',
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#555',
  },
  controlButton: {
    padding: 12,
    backgroundColor: '#555',
    borderRadius: 6,
  },
  controlButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  dishes: {
    flex: 1,
  },
  dishCard: {
    backgroundColor: '#2d2d2d',
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#444',
  },
  dishImage: {
    width: '100%',
    height: 200,
    borderRadius: 6,
    marginBottom: 12,
  },
  dishCardName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
  },
  dishCardDescription: {
    color: '#ccc',
    marginBottom: 8,
    fontSize: 14,
  },
  dishDetail: {
    flex: 1,
  },
  dishName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 12,
    textAlign: 'center',
  },
  dishDescription: {
    color: '#ccc',
    marginBottom: 12,
    textAlign: 'center',
    fontSize: 16,
    lineHeight: 24,
  },
  price: {
    fontWeight: 'bold',
    color: '#ffd700',
    fontSize: 20,
    marginBottom: 16,
    textAlign: 'center',
  },
  tags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 8,
  },
  tag: {
    backgroundColor: '#555',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    fontSize: 12,
    color: '#fff',
  },
});

export default MenuScreen;