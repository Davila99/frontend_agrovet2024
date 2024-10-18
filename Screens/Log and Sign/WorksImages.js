import React, { useState } from "react";
import {
  ActivityIndicator,
  Button,
  FlatList,
  Image,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import * as ImagePicker from "expo-image-picker";

export default function Works() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { width } = useWindowDimensions();

  const pickImages = async () => {
    setIsLoading(true);
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsMultipleSelection: true,
      selectionLimit: 10,
    //   aspect: [4, 3],
    //   quality: 1,
    });
    setIsLoading(false);
    console.log(result);
    if (!result.canceled) {
      // Reversing the order of images to add the most recent one at the beginning
      setImages((prevImages) => [
        ...(result.assets ? result.assets.reverse() : [result]).reverse(),
        ...prevImages,
      ]);
    }
  };

  return (
    <FlatList
      data={images}
      renderItem={({ item }) => (
        <Image
          source={{ uri: item.uri }}
          style={{ width: '30%', height: 150, borderRadius:10, margin:5 }}
        />
      )}
      numColumns={3}
      keyExtractor={(item) =>
        item.assets ? item.assets[0].uri : item.uri
      }
      contentContainerStyle={{ marginVertical: 50, paddingBottom: 100 }}
      ListHeaderComponent={
        isLoading ? (
          <View>
            <Text
              style={{ fontSize: 20, fontWeight: "bold", textAlign: "center" }}
            >
              Loading...
            </Text>
            <ActivityIndicator size={"large"} />
          </View>
        ) : (
          <Button title="Pick images" onPress={pickImages} />
        )
      }
    />
  );
}
