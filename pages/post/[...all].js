import axios from "axios";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function PostPage() {

    const router = useRouter();

    console.log(JSON.stringify(router.query));

    return (
        <>
        <h1>POST PAGE - {router.query.all?.join(' - ') ?? 'DEFAULT'}</h1>
        </>
    )
}