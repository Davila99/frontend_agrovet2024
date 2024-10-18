import { View, Text, Image, Button, Pressable, SafeAreaView } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import COLORS from "../../Constants/Colors";
import { TouchableOpacity } from "react-native-gesture-handler";

const Welcome = ({navigation}) => {

  const NavSignUp=()=>{
    navigation.navigate('SignUp')
  }
  const NavLogin=()=>{
    navigation.navigate('Login')
  }
  return (
 
    <LinearGradient
      style={{
        flex: 1,
      }}
      colors={[COLORS.white,COLORS.primary,COLORS.secondary]}
    >
         <SafeAreaView>
      <View style={{ flex: 1 }}>
        <View>
        <Image
            source={require("../../assets/hero3.jpg")}
            style={{
              height: 100,
              width: 100,
              borderRadius: 20,
              position: "absolute",
              top: 10,
              left: 60,
              transform: [
                { translateX: 50 },
                { translateY: 50 },
                { rotate: "15deg" },
              ],
            }}
          />
          <Image
            source={require("../../assets/hero1.jpg")}
            style={{
              height: 100,
              width: 100,
              borderRadius: 20,
              position: "absolute",
              top: 130,
              transform: [
                { translateX: 20 },
                { translateY: 50 },
                { rotate: "-15deg" },
              ],
            }}
          />

          <Image
            source={require("../../assets/hero3.jpg")}
            style={{
              height: 100,
              width: 100,
              borderRadius: 20,
              position: "absolute",
              top: 260,
              left: -50,
              transform: [
                { translateX: 50 },
                { translateY: 50 },
                { rotate: "15deg" },
              ],
            }}
          />
          <Image
            source={require("../../assets/hero2.jpg")}
            style={{
              height: 200,
              width: 200,
              borderRadius: 20,
              position: "absolute",
              top: 130,
              left: 110,
              transform: [
                { translateX: 50 },
                { translateY: 50 },
                { rotate: "-15deg" },
              ],
            }}
          />
        </View>
        <View
          style={{
            paddingHorizontal: 22,
            position: "absolute",
            top: 400,
            width: "100%",
          }}
        >
          <Text style={{ fontSize: 50, fontWeight: 800, marginTop:40,color:COLORS.white  }}>Comencemos</Text>
          <Text style={{ fontSize: 50, fontWeight: 800 }}>Ahora</Text>

          <View style={{ marginVertical: 12 }}>
            <Text
              style={{ fontSize: 16, color:COLORS.white, marginVertical: 22, textAlign:'center'}}
            >
              Conecta con expertos en salud animal, donde la atención veterinaria se encuentra a solo un mensaje de distancia. 
            </Text>
          </View>
          <View style={{ alignItems: "end" }}>
            <TouchableOpacity
              style={{
                marginTop: 50,
                width: "100%",
                height:50,
                borderRadius: 10,
                backgroundColor:COLORS.blue,
                justifyContent:'center'
              
              }} onPress={() => NavSignUp()}>
                <Text style={{textAlign:'center',  color:COLORS.white, fontSize:18}}>
                Registrarse
                </Text>
            </TouchableOpacity>
            <View
              style={{
                flexDirection: "row",
                marginTop: 12,
                justifyContent: "center",
              }}
            >
             <TouchableOpacity onPress={() => NavLogin()}>
                <Text
                  style={{
                    color: COLORS.white,
                     fontSize: 16,
                  }}
                >¿Ya tienes una cuenta?</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      </SafeAreaView>
    </LinearGradient>
 
  );
};

export default Welcome;
