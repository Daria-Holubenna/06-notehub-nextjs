'use client';
export interface ErrorProps{
    error: Error;
}
export default function Error ({error}: ErrorProps){
    return <p>Could not fetch note details. {error.message}</p>;
}