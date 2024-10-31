import TransactionTable from "@/components/home/TransactionTable";
import Title from "@/components/shared/Title";
import Framer from "@/lib/Framer";

export default function TransactionPage() {
  return (
    <Framer>
      <div>
        <Title title="Transactions" />
        <TransactionTable one={false}/>
      </div>
    </Framer>
  )
}
