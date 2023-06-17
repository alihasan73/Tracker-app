// import logo from "./logo.svg";
// import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Transaction from "./components/Transaction";
import { useState } from "react";

const initTransaction = [
	{
		id: "619941539079",
		tanggal: new Date("01 Nov 2021 9:30").getTime(),
		keterangan: "Gaji bulanan",
		nominal: 2500000,
	},
	{
		id: "749179155708",
		tanggal: new Date("23 Nov 2021 10:00").getTime(),
		keterangan: "Uang lembur ",
		nominal: 750000,
	},
	{
		id: "568004092688",
		tanggal: new Date("24 Sept 2021 10:30").getTime(),
		keterangan: "Beli sepatu",
		nominal: -150000,
	},
];
function App() {
	const [transaction, setTransaction] = useState(initTransaction);
	const handleHapusTransaction = (e) => {
		const result = transaction.findIndex(
			(transaction) => transaction.id === e.target.id
		);
		const newTransaction = transaction;
		newTransaction.splice(result, 1);
		setTransaction([...newTransaction]);
	};
	return (
		<>
			<Header transaction={transaction} />
			<Transaction
				transaction={transaction}
				settransaction={setTransaction}
				onHapusTransaction={handleHapusTransaction}
			/>
			<Footer />
		</>
	);
}

export default App;
