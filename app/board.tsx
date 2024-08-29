import { View, Text } from 'react-native'
import Draggable from 'react-native-draggable'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'

const Board = () => {

    const [pos, setPos] = useState({
        x: 110,
        y: 60
    })

    // const handlePosition = (e, gestureState) => {
    //     const newPos = {
    //         x: gestureState.moveX,
    //         y: gestureState.moveY
    //     }
    //     setPos(newPos);
    // }

  return (
    <SafeAreaView className='flex-1 '>
        <Draggable x={pos.x} y={pos.y}>
            <View className='p-4 items-center justify-center bg-red-600 shadow-md min-w-[40px] max-w-[120px]'>
                <Text className='text-center'> Note 1</Text>
            </View>
        </Draggable>

        <Draggable x={pos.x} y={pos.y}>
            <View className='p-4 items-center justify-center bg-green-500 shadow-md min-w-[40px] max-w-[120px]'>
                <Text className='text-center text-white'> Aprender Javascript </Text>
            </View>
        </Draggable>
        <Draggable x={pos.x} y={pos.y}>
            <View className='p-4 items-center justify-center bg-pink-500 shadow-md min-w-[40px] max-w-[120px]'>
                <Text className='text-center'> Aprender Springboot </Text>
            </View>
        </Draggable>
        <Draggable x={pos.x} y={pos.y}>
            <View className='p-4 items-center justify-center bg-sky-500 shadow-md min-w-[40px] max-w-[120px]'>
                <Text className='text-center text-white'> Acabar com o curso react-native</Text>
            </View>
        </Draggable>

        <StatusBar style='light' />
    </SafeAreaView>
  )
}

export default Board