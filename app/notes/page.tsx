import { fetchNotes } from "@/lib/api/api";
import Notes from './Notes.client';

export default async function Page() {
  const data = await fetchNotes('', 1);
  return <Notes initialData = {data}/>
}
