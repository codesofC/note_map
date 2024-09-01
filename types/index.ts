export interface NoteProps {
  content: string;
  position: {
    x: number;
    y: number;
  };
  color: "#FFFF00" | "#00FF00" | "#0000FF" | "#FF69B4";
}

export interface TablesProps {
  title: string;
  description: string;
  updatedAt: number;
  notes: NoteProps[];
}

export interface CustomIconsProps {
  name: string;
  color?: string;
  size?: number;
}
