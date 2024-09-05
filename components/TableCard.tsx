import { TablesProps } from "@/types";
import { View, Text, Pressable } from "react-native";
import {styled} from "nativewind"
import { router } from "expo-router";

const StyledPressable = styled(Pressable)

const TableCard = ({ description, title, updatedAt }: any) => (
  <StyledPressable className="items-start w-full p-4 border border-gray-300 rounded-lg mb-4 active:bg-blue-900" onPress={() => router.push("/board")}>
    <View className="flex-row items-center justify-between">
      <Text className="text-lg font-bold flex-1"> {title} </Text>
      <Text className="text-xs font-normal"> {updatedAt} </Text>
    </View>
    <View>
      <Text className="font-normal">{description}</Text>
    </View>
  </StyledPressable>
);

export default TableCard;
