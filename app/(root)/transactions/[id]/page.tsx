import { Pencil, Trash } from "lucide-react"

type Params = {
    params: {
        id: string
    }
}

export default function page({ params }: Params) {
    return (
        <div className="p-5">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <div className="h-20 w-20 rounded-full border-2"></div>
                    <p className="text-white font-semibold text-2xl">Anne Mayers Jonah</p>
                </div>
                <div className="flex gap-6">
                    <div className="h-10 w-10 hover:rotate-[360deg] duration-500 cursor-pointer hover:scale-105 active:scale-100 bg-amber-500 text-white rounded-full border-2 grid place-content-center">
                        <Pencil size={18} />
                    </div>
                    <div className="h-10 w-10 hover:rotate-[360deg] duration-500 cursor-pointer hover:scale-105 active:scale-100 bg-red-500 text-white rounded-full border-2 grid place-content-center">
                        <Trash size={18} />
                    </div>
                </div>
            </div>
            <div className="grid text-[15px] grid-rows-2 justify-between gap-10 mt-8 text-white">
                <div className="grid grid-cols-[200px_1fr] gap-2">
                    <p>Transaction ID:</p>
                    <p className="font-semibold">TDBSFT512542</p>
                </div>
                <div className="grid grid-cols-[200px_1fr] gap-2">
                    <p>Date:</p>
                    <p className="font-semibold">12-01-2023</p>
                </div>
                <div className="grid grid-cols-[200px_1fr] gap-2">
                    <p>Description:</p>
                    <p className="font-semibold">Grocery Store</p>
                </div>
                <div className="grid grid-cols-[200px_1fr] gap-2">
                    <p>Category:</p>
                    <p className="font-semibold">Shopping</p>
                </div>
                <div className="grid grid-cols-[200px_1fr] gap-2">
                    <p>Type:</p>
                    <p className="font-semibold">Debit</p>
                </div>
                <div className="grid grid-cols-[200px_1fr] gap-2">
                    <p>Amount:</p>
                    <p className="font-semibold">$6,453</p>
                </div>
                <div className="grid grid-cols-[200px_1fr] gap-2">
                    <p>Status:</p>
                    <p className="font-semibold">12-01-2023</p>
                </div>
            </div>


        </div>
    )
}
