import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import ChefDashboardScreen from './ChefDashboardScreen';
import EditDishScreen from './EditDishScreen';
import LoginScreen from './LoginScreen';
import MenuScreen from './MenuScreen';

export type Screen = 'menu' | 'chef' | 'login' | 'edit';

const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<Screen>('menu');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <View style={styles.app}>
      {/* Header - Always visible */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>CHRISTOFELES DINING</Text>
        <View style={styles.headerButtons}>
          <TouchableOpacity 
            style={styles.headerButton} 
            onPress={() => setCurrentScreen('login')}
          >
            <Text style={styles.headerButtonText}>LOGIN</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.headerButton}>
            <Text style={styles.headerButtonText}>SIGN UP</Text>
          </TouchableOpacity>
          
          <Text style={styles.time}>VIEW AS 01:58</Text>
          
          <TouchableOpacity 
            style={styles.headerButton} 
            onPress={() => setCurrentScreen('login')}
          >
            <Text style={styles.headerButtonText}>CHEF LOGIN</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Screen Content */}
      <View style={styles.content}>
        {currentScreen === 'menu' && (
          <MenuScreen onChefLogin={() => setCurrentScreen('login')} />
        )}
        {currentScreen === 'login' && (
          <LoginScreen 
            onLogin={() => {
              setIsLoggedIn(true);
              setCurrentScreen('chef');
            }}
            onBack={() => setCurrentScreen('menu')}
          />
        )}
        {currentScreen === 'chef' && (
          <ChefDashboardScreen 
            onEditDish={() => setCurrentScreen('edit')}
            onBack={() => setCurrentScreen('menu')}
          />
        )}
        {currentScreen === 'edit' && (
          <EditDishScreen onBack={() => setCurrentScreen('chef')} />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: '#1a1a1a',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#2d2d2d',
    borderBottomWidth: 2,
    borderBottomColor: '#444',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  headerButtons: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  headerButton: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: '#555',
    borderRadius: 4,
  },
  headerButtonText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  time: {
    color: '#ccc',
    fontSize: 12,
  },
  content: {
    flex: 1,
  },
});

export default App;