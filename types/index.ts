

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