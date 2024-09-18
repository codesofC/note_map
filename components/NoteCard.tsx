import { updatePositionNote } from "@/database/sqlite";
import { NoteProps } from "@/types";
import { GestureResponderEvent, PanResponderGestureState, Text, View } from "react-native";
import Draggable from "react-native-draggable";



const NoteCard = ({id, position, content, color}: NoteProps) => {

  const handlePosition = (e: GestureResponderEvent, gestureState: PanResponderGestureState) => {
    if(id){
      updatePositionNote(id, Number(gestureState.moveX.toFixed(2)), Number(gestureState.moveY.toFixed(2)))
      console.log(gestureState);
    }

  }

  console.log(position);

  return (
    <Draggable x={position.x} y={position.y} onDragRelease={handlePosition}>
      <View className="p-4 items-center justify-center shadow-md min-w-[40px] max-w-[120px]" style={{backgroundColor: color}}>
        <Text className="text-center font-semibold"> {content} </Text>
      </View>
    </Draggable>
  );
}

export default NoteCard;
