'use client'
import { AnimatePresence, motion } from "framer-motion";
import { Dispatch, SetStateAction } from "react";

type Props = {
  one: boolean
}

export default function TransactionTable({ one }: Props) {
  const transactions = [
    {
      date: "2024-10-01",
      transactionId: "TXN123456",
      fullName: "Alexandra Marie Carter",
      description: "Grocery Store",
      category: "Shopping",
      type: "Debit",
      amount: "$150.75",
      status: "Completed",
    },
    {
      date: "2024-10-03",
      transactionId: "TXN123457",
      fullName: "Benjamin Arthur Kim",
      description: "Electricity Bill",
      category: "Utilities",
      type: "Debit",
      amount: "$75.50",
      status: "Failed",
    },
    {
      date: "2024-10-04",
      transactionId: "TXN123458",
      fullName: "Sophia Grace Nguyen",
      description: "Salary",
      category: "Income",
      type: "Credit",
      amount: "$2500.00",
      status: "Completed",
    },
    {
      date: "2024-10-05",
      transactionId: "TXN123459",
      fullName: "Michael David Lee",
      description: "Dining",
      category: "Food",
      type: "Debit",
      amount: "$45.00",
      status: "Completed",
    },
    {
      date: "2024-10-07",
      transactionId: "TXN123460",
      fullName: "Olivia Rose Patel",
      description: "Gym Membership",
      category: "Health",
      type: "Debit",
      amount: "$60.00",
      status: "Pending",
    },
    {
      date: "2024-10-08",
      transactionId: "TXN123461",
      fullName: "William James O'Connor",
      description: "Freelance Payment",
      category: "Income",
      type: "Credit",
      amount: "$300.00",
      status: "Completed",
    },
    {
      date: "2024-10-09",
      transactionId: "TXN123462",
      fullName: "Isabella Faith Hernandez",
      description: "Online Shopping",
      category: "Shopping",
      type: "Debit",
      amount: "$120.45",
      status: "Completed",
    },
    {
      date: "2024-10-10",
      transactionId: "TXN123463",
      fullName: "Lucas Henry Thompson",
      description: "Water Bill",
      category: "Utilities",
      type: "Debit",
      amount: "$30.00",
      status: "Failed",
    },
    {
      date: "2024-10-12",
      transactionId: "TXN123464",
      fullName: "Emily Claire Brooks",
      description: "Coffee Shop",
      category: "Food",
      type: "Debit",
      amount: "$8.50",
      status: "Completed",
    },
    {
      date: "2024-10-13",
      transactionId: "TXN123465",
      fullName: "Jacob Elijah Morales",
      description: "Gift Received",
      category: "Income",
      type: "Credit",
      amount: "$100.00",
      status: "Completed",
    }
  ];


  return (
    <div>
      <table className="w-full rounded-md bg-black/20 text-white text-sm">
        <thead className="">
          <tr className=" border-b-2">
            {!one && <th className=" px-4 py-5 font-medium text-start flex items-center gap-3 text-base">
              Fullname
            </th>}
            <th className="px-4 py-5 font-medium text-start ">Transaction ID</th>
            <th className="px-4 py-5 font-medium text-start ">Date</th>
            <th className="px-4 py-5 font-medium text-start ">Description</th>
            <th className="px-4 py-5 font-medium text-start ">Category</th>
            <th className="px-4 py-5 font-medium text-start ">Type</th>
            <th className="px-4 py-5 font-medium text-start ">Amount</th>
            <th className="px-4 py-5 font-medium text-start ">Status</th>
          </tr>
        </thead>
        <tbody>
          <AnimatePresence>
            {transactions.map((row, key) => (
              <motion.tr
                key={key}
                className={`from-transparent to-black ${key !== transactions.length - 1 && 'border-b-2 border-gray-900'} bg-gradient-to-br origin-left hover:from-[#15154a] hover:to-black hover:via-[#0101b4] duration-500 cursor-pointer`}
              >
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  exit={{ scaleX: 0 }}
                  transition={{ duration: 0.5, delay: key * 0.05 }}
                  className="flex w-full"
                >
                  {!one && (
                    <td className="px-4 py-3 flex items-center gap-2">
                      <span className="h-12 w-12 inline-block align-middle rounded-full border-2"></span>
                      <span className="inline-block font-semibold">{row.fullName}</span>
                    </td>
                  )}
                  <td className="px-4 py-3">{row.transactionId}</td>
                  <td className="px-4 py-3">{row.date}</td>
                  <td className="px-4 py-3">{row.description}</td>
                  <td className="px-4 py-3">{row.category}</td>
                  <td className="px-4 py-3">{row.type}</td>
                  <td className="px-4 py-3">{row.amount}</td>
                  <td
                    className={`px-4 ${row.status === 'Completed' && 'text-green-500'} ${row.status === 'Failed' && 'text-red-500'} ${row.status === 'Pending' && 'text-amber-500'} py-3`}
                  >
                    {row.status}
                  </td>
                </motion.div>
              </motion.tr>
            ))}
          </AnimatePresence>

        </tbody>
      </table>
    </div>
  )
}
