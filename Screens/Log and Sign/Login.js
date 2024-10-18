import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, ScrollView,Image } from 'react-native';
import CountryPicker from 'react-native-country-picker-modal';
import COLORS from '../../Constants/Colors';
import { Ionicons } from "@expo/vector-icons";
//import { SafeAreaView } from 'react-native-web';

const Login = ({navigation}) => {
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const [countryCode, setCountryCode] = useState(null);
  const [country, setCountry] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [countryPickerVisible, setCountryPickerVisible] = useState(false);

  const onSelectCountry = (selectedCountry) => {
    setCountryCode(selectedCountry.cca2);
    setCountry(selectedCountry);
    setCountryPickerVisible(false);
  };

  const handleLogin = () => {
    navigation.navigate('PerfilUser')
  };

  return (
    
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.containerImage}>
      <Image
        source={require('../../assets/login.png')}
        style={styles.image}
        resizeMode="contain" // Puedes ajustar el modo de redimensionamiento según tus necesidades
      />
      </View>
         <Text style={{
                        fontSize: 26,
                        fontWeight: 'bold',
                        marginVertical: 16,
                        color: COLORS.blue
                    }}>
                        Login
                    </Text>

      {/* Country Picker Trigger */}
      <View style={styles.container2}>
      <TouchableOpacity
        style={styles.countryPickerButton}
        onPress={() => setCountryPickerVisible(true)}
      >
        <Text style={styles.countryPickerButtonText}>
          {country ? `` : 'Selecciona tu país  ▼ /'}
        </Text>
      </TouchableOpacity>

      {/* Country Picker */}
      <CountryPicker
      style={styles.countryText}
        withFilter
        withFlag
        withCountryNameButton
        withAlphaFilter
        withCallingCode
        withEmoji
        onSelect={onSelectCountry}
        countryCode={countryCode}
        visible={countryPickerVisible}
        onClose={() => setCountryPickerVisible(false)}
        closeButtonImageStyle={{ display: 'none' }} // Este estilo debería ocultar el botón por defecto
      />
      </View>
      {/* Phone Number Input */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.countryCodeInput}
          placeholder={`+${country?.callingCode}`}
          placeholderTextColor={COLORS.black}
          editable={false}
          />
        <TextInput
          style={styles.phoneNumberInput}
          placeholder="Número de teléfono"
          keyboardType="phone-pad"
          placeholderTextColor={COLORS.black}
          onChangeText={setPhoneNumber}
        />
      </View>

      {/* Password Input */}
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        secureTextEntry
        placeholderTextColor={COLORS.black}
        onChangeText={setPassword}
        {
          ...isPasswordShown == true ? (
              <Ionicons name="eye-off" size={24} color={COLORS.black} />
          ) : (
              <Ionicons name="eye" size={24} color={COLORS.black} />
          )
      }

      />

      {/* Login Button */}
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Iniciar Sesión</Text>
      </TouchableOpacity>
    </ScrollView>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  countryPickerButton: {
    borderColor: '#3498db',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
    paddingBottom:1,
    boderColor:'white'
  },
  countryPickerButtonText: {
    color: '#3498db',
    fontSize: 16,
    paddingTop:4,
    color:COLORS.black,

  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    marginTop:20
  },
  countryCodeInput: {
    width: 60,
    height: 40,
    borderRadius:5,
    borderWidth: 1,
    paddingHorizontal: 10,
    marginRight: 10,
    backgroundColor:COLORS.lightPrimary,
    borderColor:'#3498db'
  },
  phoneNumberInput: {
    flex: 1,
    width: '100%',
    borderRadius: 8,
    borderWidth: 1,
    paddingHorizontal:20,
    //marginBottom: 20,
    height: 48,
    borderColor:'#3498db',
    backgroundColor:COLORS.lightPrimary
  },
  input: {
    width: '100%',
    borderRadius: 8,
    borderColor: '#3498db',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 20,
    height: 48,
    backgroundColor:COLORS.lightPrimary
  },
  loginButton: {
    backgroundColor: COLORS.primary,
    padding: 15,
    width:'100%',
    borderRadius: 8,
    backgroundColor:COLORS.blue
  },
  loginButtonText: {
    color: '#fff',
    fontSize:17,
    textAlign: 'center',
  },
  container2:{
    flexDirection:'row',
    height:58,
    justifyContent: 'center',
    alignItems:'center',
    textAlign:'justify',
    borderColor:COLORS.black,
    borderWidth:1,
    borderRadius:8,
    paddingHorizontal:8,
    marginTop:15,
    backgroundColor:'#D3D7D7'

  },
  containerImage:{
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200, // Ajusta el ancho según tus necesidades
    height: 200, // Ajusta la altura según tus necesidades
  },

});

export default Login;
