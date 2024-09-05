import { View, Text, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import CustomIcons from "@/components/CustomIcons";
import BottomBar from "@/components/BottomBar";
import { CARD_COLORS } from "@/constants";
import NoteCard from "@/components/NoteCard";
import { addNote, getAllNotes } from "@/database/sqlite";

const Board = () => {
  const [pos, setPos] = useState({
    x: 110,
    y: 60,
  });

  const [notes, setNotes] = useState([])

  // const handlePosition = (e, gestureState) => {
  //     const newPos = {
  //         x: gestureState.moveX,
  //         y: gestureState.moveY
  //     }
  //     setPos(newPos);
  // }

  useEffect(() => {

      async function addSomeNote() {
        const result = await addNote({content: "aaa", board_id: 0, color: "#0000FF", position: {x: 120, y: 120}})

        const res = await getAllNotes(0);
        setNotes(res as any)
      }

      addSomeNote()
  }, [])

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
        
        <NoteCard position={pos} content="Aprender Springboot" color="#FF69B4" board_id={2} />
        <NoteCard position={pos} content="Aprender Javascript" color="#00FF00" board_id={2} />
        <NoteCard position={pos} content="Acabar com o curso react-native" color="#0000FF" board_id={2} />
        <NoteCard position={pos} content="Note 1" color="#FFFF00" board_id={2} />
      </View>

      <BottomBar />

      <StatusBar />
    </SafeAreaView>
  );
};

export default Board;
