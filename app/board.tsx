import { View, Text, TouchableOpacity } from "react-native";
import Draggable from "react-native-draggable";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import CustomIcons from "@/components/CustomIcons";
import BottomBar from "@/components/BottomBar";
import { CARD_COLORS } from "@/constants";
import NoteCard from "@/components/NoteCard";

const Board = () => {
  const [pos, setPos] = useState({
    x: 110,
    y: 60,
  });

  // const handlePosition = (e, gestureState) => {
  //     const newPos = {
  //         x: gestureState.moveX,
  //         y: gestureState.moveY
  //     }
  //     setPos(newPos);
  // }

  return (
    <SafeAreaView className="flex-1 relative items-center" style={{backgroundColor: '#4a90e2'}}>
      <View className="w-full flex-row justify-between items-center p-4">
        <TouchableOpacity activeOpacity={0.6}>
          <CustomIcons name="chevron-left" size={24} />
        </TouchableOpacity>
        <View className="items-center justify-center">
          <Text className="font-bold text-lg"> My board </Text>
        </View>
        <View className="flex-row space-x-4">
          <TouchableOpacity activeOpacity={0.6}>
            <CustomIcons name="menu" size={24} />
          </TouchableOpacity>
        </View>
      </View>

      <View className="relative flex-1 w-full">
        
        <NoteCard position={pos} content="Aprender Springboot" color="#FF69B4" />
        <NoteCard position={pos} content="Aprender Javascript" color="#00FF00" />
        <NoteCard position={pos} content="Acabar com o curso react-native" color="#0000FF" />
        <NoteCard position={pos} content="Note 1" color="#FFFF00" />
      </View>

      <BottomBar />

      <StatusBar />
    </SafeAreaView>
  );
};

export default Board;
