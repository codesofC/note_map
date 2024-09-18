import {
  Modal,
  TouchableOpacity,
  View,
  TextInput,
  Pressable,
  Alert,
  Text,
} from "react-native";
import CustomIcons from "./CustomIcons";
import { CARD_COLORS } from "@/constants";
import { useState } from "react";
import { addNote } from "@/database/sqlite";

const AddNote = ({
  handleModal,
  boardId,
  refreshFn
}: {
  handleModal: React.Dispatch<React.SetStateAction<boolean>>;
  boardId: number,
  refreshFn: () => Promise<void>
}) => {
  const [noteContent, setNoteContent] = useState("")
  const [currentColor, setCurrentColor] = useState(3);

  const createNewNote = async () => {
    await addNote({content: noteContent, board_id: boardId, color: CARD_COLORS[currentColor], position: {x: 120, y: 120}})
    .then(() => {
      refreshFn()
      handleModal(false);
    })
    .catch(() => {
      return Alert.alert("Erro", "A nota não foi criada devido a um problema no banco de dados!");
    })
  }


  return (
    <Modal animationType="slide">
      <View className="w-full flex-1 p-4 items-end">
        <View className="w-full flex-row justify-between items-center">
          <TouchableOpacity
            className="items-center justify-center"
            onPress={() => handleModal(false)}
          >
            <CustomIcons name="close" size={24} />
          </TouchableOpacity>
          <TouchableOpacity
            className="items-center justify-center"
            onPress={createNewNote}
          >
            <Text> Adicionar </Text>
          </TouchableOpacity>
        </View>
        <View className="flex-1 w-full items-center space-y-12 justify-center">
          <View
            className="h-60 w-60"
            style={{ backgroundColor: CARD_COLORS[currentColor] }}
          >
            <TextInput
              value={noteContent}
              onChangeText={setNoteContent}
              className="w-full h-full bg-transparent border-none text-center text-lg font-semibold p-2"
              placeholder="Escreve aqui..."
              placeholderTextColor={"gray"}
              multiline
            />
          </View>
          <View className="flex-row gap-x-2">
            {CARD_COLORS.map((color, index) => (
              <Pressable
                key={index}
                className={`w-10 h-10 ${
                  index === currentColor && 'z-10 shadow-lg'
                }`}
                style={{ backgroundColor: color }}
                onPress={() => setCurrentColor(index)}
              />
            ))}
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default AddNote;
