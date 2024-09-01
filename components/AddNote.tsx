import {
  Modal,
  TouchableOpacity,
  View,
  TextInput,
  Pressable,
} from "react-native";
import CustomIcons from "./CustomIcons";
import { CARD_COLORS } from "@/constants";
import { useRef, useState } from "react";

const AddNote = ({
  handleModal,
}: {
  handleModal: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [currentColor, setCurrentColor] = useState(3);

  const textContent = useRef()

  return (
    <Modal animationType="slide">
      <View className="w-full flex-1 p-4 items-end">
        <View className="w-full flex-row justify-between items-center">
          <TouchableOpacity
            className="items-center justify-center"
            onPress={() => handleModal(false)}
          >
            <CustomIcons name="check" size={24} />
          </TouchableOpacity>
          <TouchableOpacity
            className="items-center justify-center"
            onPress={() => handleModal(false)}
          >
            <CustomIcons name="plus" size={24} />
          </TouchableOpacity>
        </View>
        <View className="flex-1 w-full items-center space-y-12 justify-center">
          <View
            className="h-60 w-60"
            style={{ backgroundColor: CARD_COLORS[currentColor] }}
          >
            <TextInput
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
                className={`w-12 h-16 rotate-45 shadow-sm ${
                  index === currentColor && 'border-2 border-red-600 z-10 shadow-md'
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
