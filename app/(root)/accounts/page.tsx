'use client'
import Backdrop from "@/components/home/Backdrop";
import UserTable from "@/components/home/UserTable";
import BackdropParent from "@/components/shared/BackdropParent";
import Framer from "@/lib/Framer";
import { useState } from "react";

export default function AccountsPage() {
    const [data, setData] = useState({})
    const [opened, setOpened] = useState(false)
    return (
        <Framer>
            <div>
                <p className="text-2xl font-semibold text-white p-5">Accounts</p>
                <UserTable setOpened={setOpened} setData={setData} />
                <BackdropParent setOpened={setOpened} opened={opened}>
                    <Backdrop opened={opened} data={data} />
                </BackdropParent>
            </div>
        </Framer>

    )
}
