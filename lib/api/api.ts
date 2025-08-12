import axios from 'axios';
const apiKey = process.env.NEXT_PUBLIC_NOTEHUB_TOKEN;
import type Note from '../../types/note';
import type NoteTag from '../../types/NoteTag';

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
export interface CreateNoteResponse {
  id: number;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  tag: string;
}
export const createNote = async (
  noteData: NoteTag
): Promise<CreateNoteResponse> => {
  const { data } = await axios.post<CreateNoteResponse>(
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
export interface DeleteNoteResponse {
  id: number;
  title: string;
  content: string;
  tag: string;
}
export const deleteNote = async (
  NoteId: number
): Promise<DeleteNoteResponse> => {
  const { data } = await axios.delete<DeleteNoteResponse>(
    `https://notehub-public.goit.study/api/notes/${NoteId}`,
    {
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    }
  );
  return data;
};
interface NoteResponseById {
  id: number;
  title: string;
  content: string;
  createdAt: string;
}
export const fetchNoteById = async (
  NoteId: string
): Promise<NoteResponseById> => {
  const { data } = await axios.get<NoteResponseById>(
    `https://notehub-public.goit.study/api/notes/${NoteId}`,
    {
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    }
  );
  return data;
};
