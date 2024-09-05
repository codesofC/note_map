import CustomIcons from "@/components/CustomIcons";
import TableCard from "@/components/TableCard";
import { TABLES } from "@/constants";
import { getAllBoards, initDatabase, newBoard } from "@/database/sqlite";
import { Href, Link, router } from "expo-router";
import { useEffect } from "react";
import { FlatList, Text, View, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {

  useEffect(() => {
    //initDatabase();
  }, [])


  // const createBoard = async () => {
  //   newBoard("untitle-1", "#FFFFF")
  //   .then((res) => {
  //     router.push({pathname: '/board[id]', params: {id: res.lastInsertRowId}})
  //   })
  // }



  return (
    <SafeAreaView className="flex-1">
      <View className="flex-1 relative items-start">
      <Link
        href={'/board/1' as Href<'/board/1'>}
        className=" bg-yellow-500 p-4 rounded-full shadow-md absolute right-4 bottom-12"
      >
        <CustomIcons name="plus" size={32} color="black" />
      </Link>
      </View>
    </SafeAreaView>
  );
}
