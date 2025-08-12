'use client';
import css from './NoteDetails.module.css';
import { fetchNoteById } from '@/lib/api';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'next/navigation';
import Loading from '@/app/loading';

type Params = {
  id: string;
};



export default function NoteDetailsClient() {
    const {id} :Params = useParams();
  const {
    data: note,
    isPending,
    error,
  } = useQuery({
    queryKey: ['note', id],
    queryFn: () => fetchNoteById(id),
    refetchOnMount: false,
    enabled: !!id,
  });
  return (
       <>
      {isPending && <Loading/>}
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
)}
