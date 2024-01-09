import { Text, View } from "react-native";
import React, { Component } from "react";

export function Button({ title }) {
  return (
    <View>
      <Text>{title}</Text>
    </View>
  );
}
