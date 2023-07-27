import { useRouter } from "next/router"

export default function BlogDetailPage() {

    const router = useRouter();

    console.log(router.query.id);

    return (
        <h1>BLOG DETAIL - {router.query.id ?? ""}</h1>
    )
}