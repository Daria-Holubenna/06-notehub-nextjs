import { fetchNotes } from "@/lib/api";
import Notes from './Notes.client';

export default async function Page() {
  const data = await fetchNotes('', 1);
  console.log('page', data);
  return <Notes initialData={data}/>
}
