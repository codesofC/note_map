import CustomIcons from "@/components/CustomIcons";
import TableCard from "@/components/TableCard";
import { TABLES } from "@/constants";
import { getAllBoards, initDatabase, newBoard } from "@/database/sqlite";
import useSQLite from "@/database/useSQLite";
import { BoardProps } from "@/types";
import { Href, Link, router } from "expo-router";
import { useEffect } from "react";
import { FlatList, Text, View, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {

  const {data: boards, refresh} = useSQLite(getAllBoards)

  useEffect(() => {
    initDatabase();
  }, []);

  const createBoard = async () => {
    newBoard("untitle-1", "#FFFFF").then((res) => {
      router.push({
        pathname: "/board",
        params: {
          id: res.lastInsertRowId,
          name: `untitle-${res.lastInsertRowId}`,
          color: "#FFFFF"
        },
      });
    });
  };

  const renderItem = ({item}: {item: BoardProps}) => (
    <Link href={{
      pathname: '/board',
      params: {
        name: item.name,
        id: item.id,
        color: item.color
      }
    }}>
      {item.name}
    </Link>
  )

  return (
    <SafeAreaView className="flex-1">
      <View className="flex-1 relative items-start">

        <FlatList 
          data={boards as BoardProps[]}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        />

        <TouchableOpacity
          className=" bg-yellow-500 p-4 rounded-full shadow-md absolute right-4 bottom-12"
          onPress={createBoard}
        >
          <CustomIcons name="plus" size={32} color="black" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
