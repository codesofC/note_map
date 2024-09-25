import BoardCard from "@/components/BoardCard";
import CustomIcons from "@/components/CustomIcons";
import {
  getAllBoards,
  getAllNotes,
  initDatabase,
  newBoard,
} from "@/database/sqlite";
import { BoardProps } from "@/types";
import { Href, Link, router } from "expo-router";
import { useEffect, useState } from "react";
import {
  FlatList,
  Text,
  View,
  TouchableOpacity,
  Pressable,
  ActivityIndicator,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const [boards, setBoards] = useState<BoardProps[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    //Initialise SQLite Database
    initDatabase();

    //Get all data from db
    allData();
  }, []);

  //Get boards and notes fonction
  async function allData() {
    setIsLoading(true);

    await getAllBoards()
      .then((response) => {
        response.forEach(async (sigleBoard) => {
          const allNotes = await getAllNotes(Number(sigleBoard.id));

          setBoards((prevState) => [
            ...prevState,
            {
              ...sigleBoard,
              notes: allNotes,
            },
          ]);
        });
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  const createBoard = async () => {
    newBoard(`untitle-${boards.length}`, "#FFFFF").then((res) => {
      router.push({
        pathname: "/board",
        params: {
          id: res.lastInsertRowId,
          name: `untitle-${res.lastInsertRowId}`,
          color: "#FFFFF",
        },
      });
    });
  };

  const renderItem = ({ item }: { item: BoardProps }) => (
    <Pressable
      onPress={() =>
        router.push({
          pathname: "/board",
          params: {
            name: item.name,
            id: item.id,
            color: item.color,
          },
        })
      }
      className="flex-1 flex-col space-y-2 items-center mb-4"
    >
      <BoardCard notes={item.notes || []} color={item.color} />
      <Text className="font-bold"> {item.name} </Text>
    </Pressable>
  );

  if (isLoading) {
    return (
      <SafeAreaView className="flex-1">
        <View className="flex-1">
          <ActivityIndicator size={"large"} color={"#eab308"} />
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView className="flex-1">
      <View className="flex-1 relative">
        <View className="w-full flex-row justify-between px-6 py-2 border-b border-gray-300">
          <View>
            <Text className="font-extrabold text-xl"> Quadros </Text>
          </View>
          <View className="flex-row space-x-4">
            <TouchableOpacity>
              <CustomIcons name="search-outline" size={24} />
            </TouchableOpacity>
            <TouchableOpacity>
              <CustomIcons name="settings-outline" size={24} />
            </TouchableOpacity>
          </View>
        </View>
        <FlatList
          data={boards as BoardProps[]}
          renderItem={renderItem}
          numColumns={2}
          columnWrapperStyle={{
            flexWrap: "wrap",
            justifyContent: "flex-start",
            alignItems: "flex-start",
          }}
          keyExtractor={(item) => item.id.toString()}
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{
            paddingVertical: 20,
            paddingBottom: 100,
          }}
          ListEmptyComponent={() => (
            <View className="flex-1 justify-center items-center">
              <Text> 0 board. Create the first one </Text>
            </View>
          )}
        />

        <TouchableOpacity
          className=" bg-yellow-500 p-4 rounded-full shadow-md absolute right-4 bottom-12"
          onPress={createBoard}
        >
          <CustomIcons name="add" size={32} color="black" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
