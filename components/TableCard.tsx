import { TablesProps } from "@/types";
import { View, Text, Pressable } from "react-native";
import {styled} from "nativewind"

const StyledPressable = styled(Pressable)

const TableCard = ({ description, title, updatedAt }: TablesProps) => (
  <StyledPressable className="items-start w-full p-4 border border-gray-300 rounded-xl mb-4 shadow-sm active:bg-blue-900 group">
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
