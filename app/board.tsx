import { View, Text, TouchableOpacity } from "react-native";
import Draggable from "react-native-draggable";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import CustomIcons from "@/components/CustomIcons";
import BottomBar from "@/components/BottomBar";
import { CARD_COLORS } from "@/constants";

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
    <SafeAreaView className="flex-1 relative items-center">
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
        <Draggable x={pos.x} y={pos.y}>
          <View className="p-4 items-center justify-center bg-red-600 shadow-md min-w-[40px] max-w-[120px]">
            <Text className="text-center"> Note 1</Text>
          </View>
        </Draggable>

        <Draggable x={pos.x} y={pos.y}>
          <View className="relative p-4 items-center justify-center shadow-md min-w-[40px] max-w-[120px]" style={{backgroundColor: CARD_COLORS[1]}}>
            <View className="w-4 h-4 rounded-full bg-green-600 absolute -top-2 shadow-xl items-center justify-center" />
            <Text className="text-center">
              {" "}
              Aprender Javascript{" "}
            </Text>
          </View>
        </Draggable>
        <Draggable x={pos.x} y={pos.y}>
          <View className="p-4 items-center justify-center bg-pink-500 shadow-md min-w-[40px] max-w-[120px]">
            <Text className="text-center"> Aprender Springboot </Text>
          </View>
        </Draggable>
        <Draggable x={pos.x} y={pos.y}>
          <View className="p-4 items-center justify-center shadow-md min-w-[40px] max-w-[120px]" style={{backgroundColor: CARD_COLORS[2]}}>
            <Text className="text-center text-white">
              {" "}
              Acabar com o curso react-native
            </Text>
          </View>
        </Draggable>
      </View>

      <BottomBar />

      <StatusBar />
    </SafeAreaView>
  );
};

export default Board;
