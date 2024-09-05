import { TouchableOpacity, View } from "react-native";
import CustomIcons from "./CustomIcons";
import { useState } from "react";
import AddNote from "./AddNote";


const BottomBar = () => {

  const [openNewNote, setOpenNewNote] = useState(false)
    
    return (<View className="mb-12 flex-row space-x-6 items-center justify-center">
        <TouchableOpacity
        activeOpacity={0.7}
        className=" bg-yellow-500 p-4 rounded-full shadow-sm"
        onPress={() => setOpenNewNote(true)}
      >
        <CustomIcons name="plus" size={25} color="black" />
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.7}
        className=" bg-yellow-500 p-4 rounded-full shadow-sm"
      >
        <CustomIcons name="camera" size={25} color="black" />
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.7}
        className=" bg-yellow-500 p-4 rounded-full shadow-sm"
      >
        <CustomIcons name="share" size={25} color="black" />
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.7}
        className=" bg-yellow-500 p-4 rounded-full shadow-sm"
      >
        <CustomIcons name="images" size={25} color="black" />
      </TouchableOpacity>

      {openNewNote && <AddNote handleModal={setOpenNewNote} />}

    </View>)
}

export default BottomBar