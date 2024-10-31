'use client'
import { motion } from "framer-motion";

export default function TransferTable() {
    const transferData = [
        {
            date: "2024-10-01",
            transactionId: "TRX1001",
            sender: "Alice Marie Carter",
            beneficiary: "Robert James Williams",
            amount: "$500.00",
            transferType: "Internal",
            status: "Completed",
        },
        {
            date: "2024-10-02",
            transactionId: "TRX1002",
            sender: "Elijah Thomas Green",
            beneficiary: "Sophia Grace Lee",
            amount: "$200.00",
            transferType: "External",
            status: "Completed",
        },
        {
            date: "2024-10-03",
            transactionId: "TRX1003",
            sender: "Emma Rose Thompson",
            beneficiary: "Lucas Henry Martin",
            amount: "$750.00",
            transferType: "Internal",
            status: "Pending",
        },
        {
            date: "2024-10-04",
            transactionId: "TRX1004",
            sender: "Mason David Brown",
            beneficiary: "Olivia Claire Garcia",
            amount: "$1,200.00",
            transferType: "External",
            status: "Completed",
        },
        {
            date: "2024-10-05",
            transactionId: "TRX1005",
            sender: "Isabella Marie Wilson",
            beneficiary: "Benjamin Arthur Davis",
            amount: "$300.00",
            transferType: "Internal",
            status: "Failed",
        },
        {
            date: "2024-10-06",
            transactionId: "TRX1006",
            sender: "Jacob Alexander Walker",
            beneficiary: "Charlotte Elizabeth Scott",
            amount: "$450.00",
            transferType: "External",
            status: "Completed",
        },
        {
            date: "2024-10-07",
            transactionId: "TRX1007",
            sender: "William Patrick Anderson",
            beneficiary: "Amelia Rose Miller",
            amount: "$950.00",
            transferType: "Internal",
            status: "Completed",
        },
        {
            date: "2024-10-08",
            transactionId: "TRX1008",
            sender: "Lucas Ethan Harris",
            beneficiary: "Mia Grace Clark",
            amount: "$600.00",
            transferType: "External",
            status: "Pending",
        },
        {
            date: "2024-10-09",
            transactionId: "TRX1009",
            sender: "Ava Marie Lewis",
            beneficiary: "Daniel Joseph Young",
            amount: "$150.00",
            transferType: "Internal",
            status: "Completed",
        },
        {
            date: "2024-10-10",
            transactionId: "TRX1010",
            sender: "Ethan Michael Nelson",
            beneficiary: "Lily Madison Perez",
            amount: "$400.00",
            transferType: "External",
            status: "Completed",
        }
    ];


    return (
        <div>
            <table className="w-full rounded-md bg-black/20 text-white text-sm">
                <thead className="">
                    <motion.tr
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className=" border-b-2">
                        <th className=" px-4 py-5 font-medium text-start flex items-center gap-3 text-base">
                            Sender
                        </th>
                        <th className="px-4 py-5 font-medium text-start ">Date</th>
                        <th className="px-4 py-5 font-medium text-start ">Transaction ID</th>
                        <th className="px-4 py-5 font-medium text-start ">Amount</th>
                        <th className="px-4 py-5 font-medium text-start ">Beneficiary</th>
                        <th className="px-4 py-5 font-medium text-start ">Transfer Type</th>
                        <th className="px-4 py-5 font-medium text-start ">Status</th>
                    </motion.tr>
                </thead>
                <tbody>
                    {transferData.map((row, key) => (
                        <motion.tr
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ duration: 0.5, delay: key * 0.05 }}
                            className={`from-transparent relative origin-bottom-right to-black ${key !== transferData.length - 1 && 'border-b-2 border-gray-900'} bg-gradient-to-br hover:from-[#15154a] hover:to-black hover:via-[#0101b4] duration-500 cursor-pointer`} key={key}>
                            <td className="px-4 py-3 flex items-center gap-2">
                                <span className="h-12 w-12 inline-block align-middle rounded-full border-2"></span>
                                <span className="inline-block font-semibold">{row.sender}</span>
                            </td>
                            <td className="px-4 py-3">{row.date}</td>
                            <td className="px-4 py-3">{row.transactionId}</td>
                            <td className="px-4 py-3">{row.amount}</td>
                            <td className="px-4 py-3">{row.beneficiary}</td>
                            <td className="px-4 py-3">{row.transferType}</td>
                            <td className={`px-4 ${row.status === 'Completed' && "text-green-500"} ${row.status === 'Failed' && "text-red-500"} ${row.status === 'Pending' && "text-amber-500"} py-3`}>{row.status}</td>
                        </motion.tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
