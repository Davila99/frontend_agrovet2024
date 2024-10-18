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

export default function VetList() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { width } = useWindowDimensions();

  const pickImages = async () => {
    setIsLoading(true);
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsMultipleSelection: true,
      selectionLimit: 10,
      aspect: [4, 3],
      quality: 1,
    });
    setIsLoading(false);
    console.log(result);
    if (!result.cancelled) {
      const newImages = result.uri ? [result.uri] : result.selected;
      const updatedImages = [...newImages, ...prevImages];
      setImages(updatedImages);
    }
  };

  const renderImageItem = ({ item }) => (
    <Image
      source={{ uri: item.uri }}
      style={{ width: width / 4, height: 80, borderRadius: 20, margin: 2 }}
    />
  );

  const renderDaySeparator = ({ item, index }) => {
    if (index === 0) return null; // No separator for the first item
    const currentDate = new Date(item.timestamp);
    const prevDate = new Date(images[index - 1].timestamp);
    if (currentDate.toDateString() !== prevDate.toDateString()) {
      return (
        <View style={{ borderBottomWidth: 1, marginVertical: 10 }}>
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>
            {currentDate.toDateString()}
          </Text>
        </View>
      );
    }
    return null;
  };

  return (
    <FlatList
    data={images.map((image, index) => ({ ...image, index }))}
    renderItem={renderImageItem}
    numColumns={4}
    keyExtractor={(item) => item.uri}
    contentContainerStyle={{ marginVertical: 50, paddingBottom: 250 }}
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
    ItemSeparatorComponent={renderDaySeparator}
   />
  );
}
