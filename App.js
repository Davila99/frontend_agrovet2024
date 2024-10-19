import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image } from "react-native";

import {
  Login,
  SignUp,
  Welcome,
  PerfilUser,
  VetList,
  Works,
} from "./Screens/Index";

//Bottom Tab Imports
import Agronomos from "./Screens/BottomMainScreens/Agronomos";
import Veterinarios from "./Screens/BottomMainScreens/Veterinarios";
import Anuncios from "./Screens/BottomMainScreens/Anuncios";
import Chats from "./Screens/BottomMainScreens/Chats";
import HomeScreen from "./Screens/BottomMainScreens/Home";
import IMAGES from "./Components/Img";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  // Chats Veterinarios Agronomos Anuncios

  const TabNavigator = () => {
    return (
      <Tab.Navigator>
        <Tab.Screen
          name="Agronomos"
          component={Agronomos}
          options={{
            title: "Agrónomos",
            tabBarIcon: ({ focused }) => (
              <Image
                source={IMAGES.AGRONOMOS}
                style={{ height: 30, width: 30 }}
              />
            ),
          }}
        />

        <Tab.Screen
          name="Veterinarios"
          component={Veterinarios}
          options={{
            title: "Veterinarios",
            tabBarIcon: ({ focused }) => (
              <Image
                source={IMAGES.VETERINARIO}
                style={{ height: 30, width: 30 }}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: "Home",
            tabBarIcon: ({ focused }) => (
              <Image source={IMAGES.HOME} style={{ height: 30, width: 30 }} />
            ),
          }}
        />
        <Tab.Screen
          name="Anuncios"
          component={Anuncios}
          options={{
            title: "Anuncios",
            tabBarIcon: ({ focused }) => (
              <Image
                source={IMAGES.ANUNCIO}
                style={{ height: 30, width: 30 }}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Chats"
          component={Chats}
          options={{
            title: "Chats",
            tabBarIcon: ({ focused }) => (
              <Image source={IMAGES.CHAT} style={{ height: 30, width: 30 }} />
            ),
          }}
        />
      </Tab.Navigator>
    );
  };
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Welcome">
          <Stack.Screen
            name="Welcome"
            component={Welcome}
            options={{
              headerShown: false,
            }}
          />

          <Stack.Screen
            name="Login"
            component={Login}
            options={{
              headerShown: false,
            }}
          />

          <Stack.Screen
            name="SignUp"
            component={SignUp}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="PerfilUser"
            component={PerfilUser}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="VetList"
            component={TabNavigator}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Works"
            component={Works}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
