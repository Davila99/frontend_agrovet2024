import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as ImagePicker from 'expo-image-picker';
import COLORS from '../../Constants/Colors';
import Button from '../../Components/Button';

const PerfilUserVet = ({ navigation }) => {
  const [imageUri, setImageUri] = useState(require('../../assets/ImagePerfil.jpg'))
  const [cameraUri, setCameraUri] = useState(require('../../assets/camera.jpg'));

  const handlePress = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert('Se requieren permisos para acceder a la galería de imágenes.');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync();

    if (!result.canceled) {
      // Selecciona la nueva imagen y la coloca sobre la original
      const selectedImageUri = result.assets && result.assets.length > 0 ? { uri: result.assets[0].uri } : { uri: result.uri };
      setImageUri(selectedImageUri);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <ScrollView>
        <View style={{ flex: 1, marginHorizontal: 22 }}>
          <View style={{ marginVertical: 22 }}>
            <Text
              style={{
                fontSize: 25,
                fontWeight: 'bold',
                marginVertical: 12,
                color: COLORS.blue,
              }}
            >
              ¡Termina de configurar tu perfil!
            </Text>

            <Text
              style={{
                fontSize: 16,
                color: COLORS.black,
              }}
            >
              Agrega una foto de perfil
            </Text>
          </View>

          <View style={styles.touchableContainer}>
            <View style={styles.imageContainer}>
              <Image source={imageUri} style={styles.circularImage} />
              <TouchableOpacity onPress={handlePress}>
                <Image source={cameraUri} style={styles.cameraImage} />
              </TouchableOpacity>
            </View>
          </View>

          <View style={{ marginBottom: 12 }}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: '400',
                marginVertical: 8,
              }}
            >
              Descripcion
            </Text>

            <View
              style={{
                width: '100%',
                height: 48,
                borderColor: COLORS.black,
                borderWidth: 1,
                borderRadius: 8,
                alignItems: 'center',
                justifyContent: 'center',
                paddingLeft: 22,
              }}
            >
              <TextInput
                placeholder="Ingresa tu nombre completo"
                placeholderTextColor={COLORS.black}
                keyboardType="email-address"
                style={{
                  width: '100%',
                }}
              />
            </View>
          </View>

          <View style={{ marginBottom: 12, fontSize: 18 }}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: '400',
                marginVertical: 8,
              }}
            >
              Años de experiencia
            </Text>

            <View
              style={{
                width: '100%',
                height: 48,
                borderColor: COLORS.black,
                borderWidth: 1,
                borderRadius: 8,
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingLeft: 22,
              }}
            >
              <TextInput
                placeholder="Ingresa los años de experiencia"
                keyboardType='numeric'
                placeholderTextColor={COLORS.black}
                style={{
                  width: '100%',
                }}
              />
            </View>
          </View>

          <View style={{ marginBottom: 12 }}>
            <TouchableOpacity onPress={() => navigation.navigate('Works')}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: '400',
                marginVertical: 8,
              }}
            >
            Trabajos realizados
            </Text>
            </TouchableOpacity>
          </View>

          <Button
            onPress={() => navigation.navigate('VetList')}
            title="Confirmar"
            filled
            style={{
              marginTop: 18,
              marginBottom: 4,
              backgroundColor: COLORS.blue,
            }}
          />

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
            }}
          ></View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              marginVertical: 22,
            }}
          ></View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  touchableContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 5,
  },
  imageContainer: {
    position: 'relative',
    alignContent: 'center',
  },
  circularImage: {
    width: 200,
    height: 200,
    borderColor: COLORS.black,
    borderRadius: 100.5,
    overflow: 'hidden',
  },
  cameraImage: {
    position: 'absolute',
    width: 200 / 5,
    height: 200 / 5,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 100.5 / 5,
    bottom: 0,
    right: 0,
  },
});

export default PerfilUserVet;
