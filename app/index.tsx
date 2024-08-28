import TableCard from "@/components/TableCard";
import { TABLES } from "@/constants";
import { FlatList, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView className="flex-1">
      <FlatList 
        data={TABLES}
        renderItem={({item}) => <TableCard {...item} />}
        className="px-5"
        contentContainerStyle={{paddingBottom: 60}}
        keyboardShouldPersistTaps="handled"
      />
    </SafeAreaView>
  );
}
