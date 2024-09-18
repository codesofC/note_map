import { CustomIconsProps } from '@/types'
import { Ionicons } from '@expo/vector-icons'

const CustomIcons = ({name, color, size}: CustomIconsProps) => (
    <Ionicons name={name as any} size={size || 20} color={color || "black"} />
)

export default CustomIcons