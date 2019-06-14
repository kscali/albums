import React from "react";
import { View, Text } from "react-native";

const AlbumItem = props => {
  const { artist, image, thumbnail_image, title, url } = props.album;
  return (
    <View>
      <Text>{title}</Text>
    </View>
  );
};

export default AlbumItem;
