import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Pressable,
  StyleSheet,
  ScrollView,
  Image,
} from "react-native";
import CountryPicker from "react-native-country-picker-modal";
import COLORS from "../../Constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { loginUser } from "../../Apis";

const Login = ({ navigation }) => {
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const [countryCode, setCountryCode] = useState(null);
  const [country, setCountry] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [countryPickerVisible, setCountryPickerVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const onSelectCountry = (selectedCountry) => {
    setCountryCode(selectedCountry.cca2);
    setCountry(selectedCountry);
    setCountryPickerVisible(false);
  };

  const handleLogin = async () => {
    const credentials = {
      phoneNumber, // Asegúrate de que este valor sea válido según tus reglas
      password,
    };
  
    try {
      const response = await loginUser(credentials); // Llama a la función
      console.log('Inicio de sesión exitoso:', response);
      navigation.navigate("PerfilUser"); // Redirige a la pantalla de perfil
    } catch (error) {
      setErrorMessage(error); // Maneja el error
      console.error('Error al iniciar sesión:', error);
    }
  };
  
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.containerImage}>
        <Image
          source={require("../../assets/login.png")}
          style={styles.image}
          resizeMode="contain" // Puedes ajustar el modo de redimensionamiento según tus necesidades
        />
      </View>
      <View style={{ width: "100%", alignItems: "center" }}>
        <Text
          style={{
            fontSize: 26,
            fontWeight: "bold",
            marginVertical: 16,
            color: COLORS.blue,
          }}
        >
          Iniciar Sesión
        </Text>
      </View>

      <Text
        style={{
          fontSize: 16,
          fontWeight: 400,
          marginVertical: 8,
        }}
      >
        Selecciona tu país
      </Text>

      {/* Country Picker Trigger */}

      <View style={styles.container2}>
        <CountryPicker
          text
          containerButtonStyle={styles.countryPickerButton}
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
          closeButtonImageStyle={{ display: "none" }} // Este estilo debería ocultar el botón por defecto
        />
      </View>
      {/* Phone Number Input */}

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.countryCodeInput}
          placeholder={`+${
            country && country.callingCode ? country.callingCode[0] : "505"
          }`}
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
        {...(isPasswordShown == true ? (
          <Ionicons name="eye-off" size={24} color={COLORS.black} />
        ) : (
          <Ionicons name="eye" size={24} color={COLORS.black} />
        ))}
      />

      {/* Login Button */}
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Ingresar</Text>
      </TouchableOpacity>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          marginVertical: 22,
        }}
      >
        <Text style={{ fontSize: 16, color: COLORS.black }}>
          Todavía no te registraste?
        </Text>
        <Pressable onPress={() => navigation.navigate("SignUp")}>
          <Text
            style={{
              fontSize: 16,
              color: COLORS.primary,
              fontWeight: "bold",
              marginLeft: 6,
            }}
          >
            Crear Cuenta
          </Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    padding: 20,
  },
  countryPickerButton: {
    alignItems: "center",
    justifyContent: "center",
  },
  countryPickerButtonText: {
    color: "#3498db",
    fontSize: 16,
    paddingTop: 4,
    color: COLORS.black,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    marginTop: 20,
  },
  countryCodeInput: {
    width: 60,
    height: 48,
    borderRadius: 5,
    borderWidth: 1,
    textAlign: "center",
    marginRight: 10,
    backgroundColor: COLORS.lightPrimary,
  },
  phoneNumberInput: {
    flex: 1,
    width: "100%",
    borderRadius: 8,
    borderWidth: 1,
    paddingHorizontal: 20,
    height: 48,

    backgroundColor: COLORS.lightPrimary,
  },
  input: {
    width: "100%",
    borderRadius: 8,

    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 20,
    height: 48,
    backgroundColor: COLORS.lightPrimary,
  },
  loginButton: {
    backgroundColor: COLORS.primary,
    padding: 15,
    width: "100%",
    borderRadius: 8,
    backgroundColor: COLORS.blue,
  },
  loginButtonText: {
    color: "#fff",
    fontSize: 17,
    textAlign: "center",
  },
  container2: {
    flexDirection: "row",
    height: 50,
    width: "100%",
    alignItems: "center",
    textAlign: "justify",

    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
    marginTop: 15,
    backgroundColor: COLORS.lightPrimary,
  },
  containerImage: {
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 200, // Ajusta el ancho según tus necesidades
    height: 200, // Ajusta la altura según tus necesidades
  },
});

export default Login;
