'use client'
import TransactionTable from "@/components/home/TransactionTable"
import TransferTable from "@/components/home/TransferTable"
import Framer from "@/lib/Framer"
import { useState } from "react"

export default function page() {
    const links = ['Profile', 'Transactions', 'Transfers']
    const [active, setActive] = useState(0)
    return (
        <Framer>
            <div className="">
                <div className="flex p-4 gap-5 items-center text-white text-2xl">
                    <div className="h-32 w-32 border-2 rounded-full"></div>
                    <p>Anne Mayers Paige</p>
                </div>
                <div className="flex sticky top-0 p-4 z-30 bg-black gap-5 mt-4">
                    {links.map((el, key) => (
                        <p key={key} onClick={() => setActive(key)} className={`px-6 ${key === active ? "bg-[darkblue]" : ""} cursor-pointer duration-300 active:scale-95 text-white text-sm font-semibold py-3 rounded-md`}>{el}</p>
                    ))}
                </div>
                {active === 0 && <div className="Profile h-96 bg-emerald-500"> </div>}
                {active === 1 && <TransactionTable one={true} />}
                {active === 2 && <TransferTable />}
            </div>
        </Framer>
    )
}
