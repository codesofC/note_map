import { View, Text, TouchableOpacity, TextInput } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import CustomIcons from "@/components/CustomIcons";
import BottomBar from "@/components/BottomBar";
import { CARD_COLORS } from "@/constants";
import NoteCard from "@/components/NoteCard";
import { addNote, getAllNotes, updateBoardName, updatePositionNote } from "@/database/sqlite";
import { router, useLocalSearchParams } from "expo-router";
import { NoteProps } from "@/types";
import useSQLite from "@/database/useSQLite";

const Board = () => {
  const {name, id, color} = useLocalSearchParams()

  
  const {data: notes, refresh} = useSQLite(() => getAllNotes(Number(id)))

  const handleBoardName = async (value: string) => {
     await updateBoardName(Number(id), value)
  }


  return (
    <SafeAreaView className="flex-1 relative items-center" style={{backgroundColor: color as string}}>
      <View className="w-full flex-row justify-between items-center p-4">
        <TouchableOpacity activeOpacity={0.6} onPress={() => router.replace('/')}>
          <CustomIcons name="chevron-left" size={24} />
        </TouchableOpacity>
        <View className="items-center justify-center">
          <TextInput
            defaultValue={name as string}
            onChangeText={text => handleBoardName(text)}
            className="font-bold text-lg" 
           /> 
        </View>
        <View className="flex-row space-x-4">
          <TouchableOpacity activeOpacity={0.6}>
            <CustomIcons name="menu" size={24} />
          </TouchableOpacity>
        </View>
      </View>

      <View className="relative flex-1 w-full">
        
        
        {notes.map((note: NoteProps) => (
            <NoteCard {...note} />
        ))}
      </View>

      <BottomBar boardId={Number(id)} refreshFn={refresh} />

      <StatusBar />
    </SafeAreaView>
  );
};

export default Board;
