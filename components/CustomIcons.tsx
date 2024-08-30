import { CustomIconsProps } from '@/types'
import { Entypo } from '@expo/vector-icons'

const CustomIcons = ({name, color, size}: CustomIconsProps) => (
    <Entypo name={name as any} size={size || 20} color={color || "black"} />
)

export default CustomIcons