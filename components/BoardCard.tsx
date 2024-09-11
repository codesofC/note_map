import { View, Text } from "react-native";
import React from "react";
import { NoteProps } from "@/types";
import { HEIGHT_SCREEN, WIDTH_SCREEN } from "@/constants";

const BoardCard = ({ notes, color }: { notes: NoteProps[], color: string }) => {

  return (
    <View className="w-44 h-44 relative border border-gray-200 shadow-sm rounded-md overflow-hidden" style={{
        backgroundColor: color
    }}>
      {notes.map((note, index) => (
        <View
          className="p-2 items-center justify-center shadow-md absolute min-w-[30px] max-w-[60px] rounded-sm"
          style={{ 
            backgroundColor: note.color,
            left: (176 * note.position.x) / WIDTH_SCREEN,
            top: (176 * note.position.y) / HEIGHT_SCREEN
          }}
          key={index}
        >
          <Text className="text-center text-xs"> {note.content} </Text>
        </View>
      ))}
    </View>
  );
};

export default BoardCard;
