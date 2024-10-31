import { Users } from "lucide-react";
import LoggedInUser from "./LoggedInUser";
import NavCard from "./NavCard";
import { IoHome } from "react-icons/io5";
import { GrTransaction } from "react-icons/gr";
import { TbTransferVertical } from "react-icons/tb";
import { CgCreditCard } from "react-icons/cg";
import { GiTakeMyMoney } from "react-icons/gi";

export default function Sidebar() {
    const links = [
        {
            title: 'Home',
            link: '',
            icon: <IoHome size={15} />
        },
        {
            title: 'Accounts',
            link: 'accounts',
            icon: <Users size={15} />
        },
        {
            title: 'Cards',
            link: 'cards',
            icon: <CgCreditCard size={15} />
        },
        {
            title: 'Transfer',
            link: 'transfers',
            icon: <TbTransferVertical size={15} />
        },
        {
            title: 'Transactions',
            link: 'transactions',
            icon: <GrTransaction size={15} />,
            data: [
                {
                    title: 'Loans',
                    link: 'transactions'
                }
            ],

        },
        {
            title: 'Loans',
            link: 'transactions',
            icon: <GiTakeMyMoney size={18} />,
            data: [
                {
                    title: 'Loans',
                    link: 'Loans'
                },
                {
                    title: 'Loans',
                    link: 'Loans'
                }
            ],

        },

    ]

    return (
        <div className="border-r-2 flex flex-col w-[300px]">
            <div className="h-16"></div>
            <div className="flex-1 p-4 flex-col flex justify-between">
                <div className="space-y-2">
                    {links.map((el, key) => (
                        <NavCard title={el.title} key={key} data={el?.data} link={el.link} icon={el.icon} />
                    ))}
                </div>
                <LoggedInUser />
            </div>
        </div>
    )
}
