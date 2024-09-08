import { NoteProps } from "@/types";
import * as SQLite from "expo-sqlite";

const openDatabase = async () => {
  const openDB = await SQLite.openDatabaseAsync("notesdb");

  return openDB;
};

export const initDatabase = async () => {
  const db = await openDatabase();

  await db.execAsync(`
    PRAGMA journal_mode = WAL;
    CREATE TABLE IF NOT EXISTS boards (id INTEGER PRIMARY KEY NOT NULL, name TEXT NOT NULL, color TEXT NOT NULL);
  `);

  await db.execAsync(`
    PRAGMA journal_mode = WAL;
    CREATE TABLE IF NOT EXISTS notes (id INTEGER PRIMARY KEY NOT NULL, content TEXT NOT NULL, color TEXT, posx INTEGER, posy INTEGER, board_id INTEGER, FOREIGN KEY (board_id) REFERENCES boards(id));
  `);
};

export const getAllBoards = async () => {
  const db = await openDatabase();

  const allRows = await db.getAllAsync("SELECT * FROM boards");

  return allRows;
};


export const newBoard = async (name: string, color: string) => {

    const db = await openDatabase()

    const result = await db.runAsync('INSERT INTO boards (name, color) VALUES (?, ?)', name, color);

    return result;
}

export const updateBoardName = async (boardId: number, name: string) => {
  const db = await openDatabase()

  await db.runAsync('UPDATE boards SET name = ? WHERE id = ?', name, boardId)
}

export const addNote = async ({content, color, position, board_id}: NoteProps) => {

    const db = await openDatabase()

    const result = await db.runAsync('INSERT INTO notes (content, color, posx, posy, board_id) VALUES (?, ?, ?, ?, ?)', content, color, position.x, position.y, board_id);

    return result;
}

export const updatePositionNote = async (noteId: number, x: number, y: number) => {
  const db = await openDatabase()

  await db.runAsync('UPDATE notes SET posx = ?, posy = ? WHERE id = ?', x, y, noteId)
}

export const getAllNotes = async (boardId: number) => {
  const db = await openDatabase()

  const allRows = await db.getAllAsync('SELECT * FROM notes WHERE board_id = ?', boardId);

  return allRows;
}