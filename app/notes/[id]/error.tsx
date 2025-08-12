'use client';
import { ErrorProps } from "../error";

export default function Error({error} : ErrorProps){
    return <p>Could not fetch note details. {error.message}</p>;
}