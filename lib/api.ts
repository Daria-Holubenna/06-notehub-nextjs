import axios from 'axios';
const apiKey = process.env.NEXT_PUBLIC_NOTEHUB_TOKEN;
import type Note from '../types/note';

export interface NoteHttpResp {
  notes: Note[];
  totalPages: number;
}
export async function fetchNotes(
  search: string,
  page: number = 1,
  perPage: number = 12
): Promise<NoteHttpResp> {
  const { data } = await axios.get<NoteHttpResp>(
    'https://notehub-public.goit.study/api/notes',
    {
      params: {
        search,
        page,
        perPage,
      },
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    }
  );
  return data;
}
export interface NoteTag {
  title: string;
  content: string;
  tag: TagType;
}
export type TagType = 'Todo' | 'Work' | 'Shopping' | 'Personal' | 'Meeting';
export const createNote = async (noteData: NoteTag): Promise<Note> => {
  const { data } = await axios.post<Note>(
    'https://notehub-public.goit.study/api/notes',
    noteData,
    {
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    }
  );
  return data;
};
export const deleteNote = async (NoteId: string): Promise<Note> => {
  const { data } = await axios.delete<Note>(
    `https://notehub-public.goit.study/api/notes/${NoteId}`,
    {
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    }
  );
  return data;
};
export const fetchNoteById = async (NoteId: string): Promise<Note> => {
  const { data } = await axios.get<Note>(
    `https://notehub-public.goit.study/api/notes/${NoteId}`,
    {
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    }
  );
  return data;
};
