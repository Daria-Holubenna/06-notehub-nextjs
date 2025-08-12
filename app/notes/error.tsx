'use client';
export interface ErrorProps {
    error?: Error | null;
}
export default function Error ({error}: ErrorProps){
    return <p>Could not fetch the list of notes. {error?.message}</p>;
}