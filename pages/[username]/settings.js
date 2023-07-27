import { useRouter } from "next/router";

export default function SettingsPage() {
    const router = useRouter();

    return (
        <h1>Settings - {router.query.username ?? ""}</h1>
    )
}