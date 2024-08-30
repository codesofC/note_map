import { Modal, TouchableOpacity, View, TextInput } from "react-native";
import CustomIcons from "./CustomIcons";


const AddNote = ({handleModal}: {handleModal: React.Dispatch<React.SetStateAction<boolean>>}) => (
    <Modal animationType="slide" className="w-full h-full p-4 items-end justify-between space-y-8 min-w-min">
        <TouchableOpacity className="items-center justify-center" onPress={() => handleModal(false)}>
            <CustomIcons name="close" />
        </TouchableOpacity>
        <View className="bg-red-400">
            <TextInput 
                value="aaa"
                className="w-full h-full bg-transparent border-none text-center"
                placeholder="Escreve aqui..."
                placeholderTextColor={'gray'}
            />
        </View>
    </Modal>
)

export default AddNote