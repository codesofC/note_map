
export interface NoteProps {
  id?: number;
  content: string;
  position: {
    x: number;
    y: number;
  };
  color: string;
  board_id: number
}
export interface BoardProps {
  id: number; 
  name: string; 
  color: string;
  notes?: NoteProps[]
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
