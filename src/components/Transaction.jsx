import AddTransaction from "./AddTransaction";
const Transaction = (props) => {
	const getTanggal = (tanggal) => {
		let dateObj = new Date(tanggal);
		const arrBulan = [
			"Jan",
			"Feb",
			"Mar",
			"Apr",
			"Mei",
			"Jun",
			"Jul",
			"Ags",
			"Sep",
			"Okt",
			"Nov",
			"Des",
		];
		let bulan = arrBulan[dateObj.getMonth()];
		return `${dateObj.getDate()} ${bulan} ${dateObj.getFullYear()}`;
	};
	return (
		<>
			<div className="flex flex-col mt-36 space-y-10 mb-10 md:w-full md:px-20 md:flex-row md:space-x-4 md:space-y-0 lg:px-40 xl:px-60">
				<main className=" md:w-1/2 px-5">
					<h1 className="text-2xl md:text-4xl text-center font-thin">
						Pemasukan
					</h1>
					<hr className="border-3 border-gray-400 my-5 w-3/4 mx-auto" />
					{props.transaction.map(
						(val) =>
							val.nominal > 0 && (
								<div
									key={val.id}
									className="bg-white flex justify-between my-4 items-center p-2 border-l-4 border-l-emerald-600 relative"
								>
									<div id={val.id}>
										<h3>{val.keterangan}</h3>
										<p className="text-sm">{getTanggal(val.tanggal)}</p>
									</div>
									<div className="text-lime-800 self-end">
										<div
											id={val.id}
											onClick={props.onHapusTransaction}
											className="absolute top-0 right-0 text-slate-700 hover:bg-sky-500 w-4 h-6 text-center"
										>
											x
										</div>
										Rp. {val.nominal.toLocaleString("id-ID")}
									</div>
								</div>
							)
					)}
				</main>
				<aside className="md:w-1/2 px-5">
					<h1 className="text-2xl md:text-4xl text-center font-thin">
						Pengeluaran
					</h1>
					<hr className="border-3 border-gray-400 my-5 w-3/4 mx-auto" />
					{props.transaction.map(
						(val) =>
							val.nominal <= 0 && (
								<div
									// key={val.id}
									key={val.id}
									className="bg-white flex justify-between items-center p-2 my-4 border-l-4 border-l-red-600 relative"
								>
									<div id={val.id}>
										<h3>{val.keterangan}</h3>
										<p className="text-sm">{getTanggal(val.tanggal)}</p>
									</div>
									<div className="text-red-500 self-end">
										<div
											id={val.id}
											onClick={props.onHapusTransaction}
											className="absolute top-0 right-0 text-slate-700 hover:bg-sky-500 w-4 h-6 text-center"
										>
											x
										</div>
										Rp. {val.nominal.toLocaleString("id-ID")}
									</div>
								</div>
							)
					)}
				</aside>
			</div>
			<AddTransaction
				valtransaction={props.transaction}
				valsettransaction={props.settransaction}
			/>
		</>
	);
};

export default Transaction;
