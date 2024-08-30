

export interface TablesProps {
    title: string;
    description: string;
    updatedAt: number,
    notes: {
        content: string;
        position: {
            x: number;
            y: number;
        };
    }[];
}

export interface CustomIconsProps {
    name: string;
    color?: string;
    size?: number;
}