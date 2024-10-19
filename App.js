import "./gesture-handler";
import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { Image } from "react-native";
import COLORS from "./Constants/Colors";

import { View, Text } from "react-native";

import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from "@react-navigation/drawer";

import {
  Login,
  SignUp,
  Welcome,
  PerfilUser,
  VetList,
  Works,
} from "./Screens/Index";

// Bottom Tab Imports
import Agronomos from "./Screens/BottomMainScreens/Agronomos";
import Veterinarios from "./Screens/BottomMainScreens/Veterinarios";
import Anuncios from "./Screens/BottomMainScreens/Anuncios";
import Chats from "./Screens/BottomMainScreens/Chats";
import HomeScreen from "./Screens/BottomMainScreens/Home";
import IMAGES from "./Constants/Img";
import UserManual from "./Screens/BottomMainScreens/UserManual";
import UserProfile from "./Screens/BottomMainScreens/UserProfile";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const DrawerContent = (props) => (
  <DrawerContentScrollView {...props}>
    <Text style={{ textAlign: "center" }}>Menú de Contenido</Text>
    <DrawerItem
      label={"Perfil de Usuario"}
      onPress={() => props.navigation.navigate("UserProfile")}
    />
    <DrawerItem
      label={"Manual de Usuario"}
      onPress={() => props.navigation.navigate("UserManual")}
    />
  </DrawerContentScrollView>
);

const HomeWithDrawer = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <DrawerContent {...props} />}
      screenOptions={{ headerShown: false }}
    >
      <Drawer.Screen name="HomeTabs" component={TabNavigator} />
      <Drawer.Screen name="UserProfile" component={UserProfile} />
      <Drawer.Screen name="UserManual" component={UserManual} />
    </Drawer.Navigator>
  );
};

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          height: 70, // Ajusta la altura a tu preferencia
        },
      }}
    >
      <Tab.Screen
        name="Agronomos"
        component={Agronomos}
        options={{
          headerShown: true,
          title: "Agrónomos",
          tabBarLabelStyle: {
            fontSize: 14,
          },
          tabBarIcon: ({ focused }) => (
            <Image
              source={IMAGES.AGRONOMOS}
              style={{
                height: 25,
                width: 25,
                tintColor: focused ? COLORS.blue : COLORS.black,
              }}
            />
          ),
          tabBarActiveTintColor: COLORS.blue,
          tabBarInactiveTintColor: COLORS.black,
        }}
      />
      <Tab.Screen
        name="Veterinarios"
        component={Veterinarios}
        options={{
          headerShown: true,
          title: "Veterinarios",
          tabBarLabelStyle: {
            fontSize: 14,
          },
          tabBarIcon: ({ focused }) => (
            <Image
              source={IMAGES.VETERINARIO}
              style={{
                height: 25,
                width: 25,
                tintColor: focused ? COLORS.blue : COLORS.black,
              }}
            />
          ),
          tabBarActiveTintColor: COLORS.blue,
          tabBarInactiveTintColor: COLORS.black,
        }}
      />
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: true,
          title: "Home",
          tabBarLabelStyle: {
            fontSize: 14,
          },
          tabBarIcon: ({ focused }) => (
            <Image
              source={IMAGES.HOME}
              style={{
                height: 25,
                width: 25,
                tintColor: focused ? COLORS.blue : COLORS.black,
              }}
            />
          ),
          tabBarActiveTintColor: COLORS.blue,
          tabBarInactiveTintColor: COLORS.black,
        }}
      />
      <Tab.Screen
        name="Anuncios"
        component={Anuncios}
        options={{
          headerShown: true,
          title: "Anuncios",
          tabBarLabelStyle: {
            fontSize: 14,
          },
          tabBarIcon: ({ focused }) => (
            <Image
              source={IMAGES.ANUNCIO}
              style={{
                height: 25,
                width: 25,
                tintColor: focused ? COLORS.blue : COLORS.black,
              }}
            />
          ),
          tabBarActiveTintColor: COLORS.blue,
          tabBarInactiveTintColor: COLORS.black,
        }}
      />
      <Tab.Screen
        name="Chats"
        component={Chats}
        options={{
          headerShown: true,
          title: "Chats",
          tabBarLabelStyle: {
            fontSize: 14,
          },
          tabBarIcon: ({ focused }) => (
            <Image
              source={IMAGES.CHAT}
              style={{
                height: 25,
                width: 25,
                tintColor: focused ? COLORS.blue : COLORS.black,
              }}
            />
          ),
          tabBarActiveTintColor: COLORS.blue,
          tabBarInactiveTintColor: COLORS.black,
        }}
      />
    </Tab.Navigator>
  );
};

export default function App() {
  return (
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
          name="HomeWithDrawer"
          component={HomeWithDrawer}
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
