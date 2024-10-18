import { View, Text, Image, Pressable, TextInput, TouchableOpacity, StyleSheet,ScrollView,KeyboardAvoidingView } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from "react-native-safe-area-context";
import COLORS from '../../Constants/Colors';
import { Ionicons } from "@expo/vector-icons";
import Checkbox from "expo-checkbox"
import Button from '../../Components/Button';
//import {Picker} from '@react-native-picker/picker';
import CountryPicker from 'react-native-country-picker-modal';

const Signup = ({ navigation }) => {
  const [countryCode, setCountryCode] = useState(null);
  const [country, setCountry] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');

  //Guardar la seleccion del Picker
  const [selectedRol, setSelectedRol] = useState('Selecccionar Rol');
  console.log(selectedRol)

  const [countryPickerVisible, setCountryPickerVisible] = useState(false);

  const onSelectCountry = (selectedCountry) => {
    setCountryCode(selectedCountry.cca2);
    setCountry(selectedCountry);
    setCountryPickerVisible(false);
  };

    const [isPasswordShown, setIsPasswordShown] = useState(true);
    const [isChecked, setIsChecked] = useState(false);
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
          <ScrollView>
            <View style={{ flex: 1, marginHorizontal: 22 }}>
                <View style={{ marginVertical: 22 }}>
                    <Text style={{
                        fontSize: 25,
                        fontWeight: 'bold',
                        marginVertical: 12,
                        color: COLORS.blue
                    }}>
                        Crear una cuenta
                    </Text>

                    <Text style={{
                        fontSize: 16,
                        color: COLORS.black
                    }}>¡Conecta con veterinarios hoy!</Text>
                </View>

                <View style={{ marginBottom: 12 }}>
                    <Text style={{
                        fontSize: 16,
                        fontWeight: 400,
                        marginVertical: 8
                    }}>Nombre completo</Text>

                    <View style={{
                        width: "100%",
                        height: 48,
                        borderColor: COLORS.black,
                        borderWidth: 1,
                        borderRadius: 8,
                        alignItems: "center",
                        justifyContent: "center",
                        paddingLeft: 22
                    }}>
                        <TextInput
                            placeholder='Ingresa tu nombre completo'
                            placeholderTextColor={COLORS.black}
                            keyboardType='email-address'
                            style={{
                                width: "100%"
                            }}
                        />
                    </View>
                </View>

                <View style={{ marginBottom: 12,fontSize:'18' }}>
                    <Text style={{
                        fontSize: 16,
                        fontWeight: 400,
                        marginVertical: 8,
                    }}>Teléfono Movil</Text>
                    {/* <Picker
                 
                 selectedValue={selectedRol}
                  onValueChange={(itemValue)=>
                setSelectedRol(itemValue)
                 } 
                 style={{ width: 200,
                  height: 50,
                  borderColor: 'gray',
                  borderWidth: 1,
                  backgroundColor:'blue',
                  color:'black',
            
                }}
                 >
                    <Picker.Item label="Veterinario" value="Veterinario" />
                    <Picker.Item label="Dueño de animales" value="Dueño de mascotas" />
                  </Picker> */}
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
                    <View style={{
                        width: "100%",
                        height: 48,
                        borderColor: COLORS.black,
                        borderWidth: 1,
                        borderRadius: 8,
                        alignItems: "center",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        paddingLeft: 22
                    }}>
                        <TextInput
                            placeholder={`+${country?.callingCode}`}
                            editable={false}
                            placeholderTextColor={COLORS.black}
                            keyboardType='numeric'
                            style={{
                                width: "12%",
                                borderRightWidth: 1,
                                borderLeftColor: COLORS.grey,
                                height: "100%",
                            }}
                        />

                        <TextInput
                            placeholder='Ingresa tu numero de teléfono'
                            placeholderTextColor={COLORS.black}
                            keyboardType='numeric'
                            style={{
                                width: "80%"
                            }}
                        />
                    </View>
                </View>

                <View style={{ marginBottom: 12 }}>
                    <Text style={{
                        fontSize: 16,
                        fontWeight: 400,
                        marginVertical: 8
                    }}>Contraseña</Text>

                    <View style={{
                        width: "100%",
                        height: 48,
                        borderColor: COLORS.black,
                        borderWidth: 1,
                        borderRadius: 8,
                        alignItems: "center",
                        justifyContent: "center",
                        paddingLeft: 22
                    }}>
                        <TextInput
                            placeholder='Ingresa tu contraseña'
                            placeholderTextColor={COLORS.black}
                            secureTextEntry={isPasswordShown}
                            style={{
                                width: "100%"
                            }}
                        />

                        <TouchableOpacity
                            onPress={() => setIsPasswordShown(!isPasswordShown)}
                            style={{
                                position: "absolute",
                                right: 12
                            }}
                        >
                            {
                                isPasswordShown == true ? (
                                    <Ionicons name="eye-off" size={24} color={COLORS.black} />
                                ) : (
                                    <Ionicons name="eye" size={24} color={COLORS.black} />
                                )
                            }

                        </TouchableOpacity>
                    </View>
                </View>
                
                <View style={{ marginBottom: 12 }}>
                    <Text style={{
                        fontSize: 16,
                        fontWeight: 400,
                        marginVertical: 8
                    }}>Confirmar contraseña</Text>

                    <View style={{
                        width: "100%",
                        height: 48,
                        borderColor: COLORS.black,
                        borderWidth: 1,
                        borderRadius: 8,
                        alignItems: "center",
                        justifyContent: "center",
                        paddingLeft: 22
                    }}>
                        <TextInput
                            placeholder='Ingresa de nuevo tu contraseña'
                            placeholderTextColor={COLORS.black}
                            secureTextEntry={isPasswordShown}
                            style={{
                                width: "100%"
                            }}
                        />

                        <TouchableOpacity
                            onPress={() => setIsPasswordShown(!isPasswordShown)}
                            style={{
                                position: "absolute",
                                right: 12
                            }}
                        >
                            {
                                isPasswordShown == true ? (
                                    <Ionicons name="eye-off" size={24} color={COLORS.black} />
                                ) : (
                                    <Ionicons name="eye" size={24} color={COLORS.black} />
                                )
                            }

                        </TouchableOpacity>
                    </View>
                </View>


                <View style={{
                    flexDirection: 'row',
                    marginVertical: 6
                }}>
                    <Checkbox
                        style={{ marginRight: 8 }}
                        value={isChecked}
                        onValueChange={setIsChecked}
                        color={isChecked ? COLORS.primary : undefined}
                    />

                    <Text>Acepto todos los terminos y condiciones</Text>
                </View>

                <Button
                  onPress={() => navigation.navigate("Login")}
                    title="Registrarse"
                    filled
                    style={{
                        marginTop: 18,
                        marginBottom: 4,
                        backgroundColor:COLORS.blue
                    }}
                />

                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'center'
                }}>
                    
                </View>

                <View style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    marginVertical: 22
                }}>
                    <Text style={{ fontSize: 16, color: COLORS.black }}>Ya tienes una cuenta</Text>
                    <Pressable
                        onPress={() => navigation.navigate("Login")}
                    >
                        <Text style={{
                            fontSize: 16,
                            color: COLORS.primary,
                            fontWeight: "bold",
                            marginLeft: 6
                        }}>Login</Text>
                    </Pressable>
                </View>
            </View>
            </ScrollView>
            <KeyboardAvoidingView/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
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
  marginBottom:20,
  backgroundColor:'#D3D7D7'

}
});


export default Signup;