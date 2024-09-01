import { NoteProps } from "@/types";
import { Text, View } from "react-native";
import Draggable from "react-native-draggable";

const NoteCard = ({position, content, color}: NoteProps) => (
  <Draggable x={position.x} y={position.y}>
    <View className="p-4 items-center justify-center shadow-md min-w-[40px] max-w-[120px]" style={{backgroundColor: color}}>
      <Text className="text-center font-semibold"> {content} </Text>
    </View>
  </Draggable>
);

export default NoteCard;