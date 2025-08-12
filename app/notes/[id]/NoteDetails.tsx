'use client';
import css from './NoteDetails.module.css';
import { fetchNoteById } from '@/lib/api';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'next/navigation';

type Params = {
  id: string;
};

export default function NotesDetailsClient() {
  const { id }: Params = useParams();

  const {
    data: note,
    isFetching,
    error,
  } = useQuery({
    queryKey: ['note', id],
    queryFn: () => fetchNoteById(id),
    refetchOnMount: false,
  });

  return (
    <>
      {isFetching && <p>Loading, please wait...</p>}
      {(error || !note) && <p>Something went wrong.</p>}
      {note && (
        <div className={css.container}>
          <div className={css.item}>
            <div className={css.header}>
              <h2>{note.title}</h2>
            </div>
            <p className={css.content}>{note.content}</p>
            <p className={css.date}>{note.createdAt}</p>
          </div>
        </div>
      )}
    </>
  );
}


