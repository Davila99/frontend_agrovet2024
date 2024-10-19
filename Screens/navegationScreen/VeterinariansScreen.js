// VeterinariansScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const VeterinariansScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Veterinarians Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default VeterinariansScreen;
