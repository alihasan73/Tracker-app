import { useEffect, useState } from "react";

const SaldoBox = (props) => {
	const [saldoPemasukan, setSaldoPemasukan] = useState(0);
	const [saldoPengeluaran, setSaldoPengeluaran] = useState(0);

	useEffect(() => {
		let totalPemasukan = 0;
		let totalPengeluaran = 0;

		// hitung saldo pemasukan dan pengeluaran
		props.transaction.forEach(
			(val) => {
				if (val.nominal > 0) {
					totalPemasukan += val.nominal;
				} else {
					totalPengeluaran += val.nominal;
				}
				setSaldoPemasukan(totalPemasukan);
				setSaldoPengeluaran(totalPengeluaran);
			},
			[props.transaction]
		);
	});
	return (
		<>
			<div className="bg-zinc-300 w-80 md:w-96 my-4 rounded-xl z-10 self-center">
				<div className="p-6 ">
					<p>Saldo</p>
					<h1 className="text-4xl font-medium">
						Rp.{(saldoPemasukan + saldoPengeluaran).toLocaleString("id-ID")}
					</h1>
				</div>
				<div className="flex">
					<div className="flex justify-evenly p-2 w-1/2 rounded-bl-xl bg-green-600 text-white">
						<p>Rp. {saldoPemasukan.toLocaleString("id-ID")}</p>
					</div>
					<div className="flex justify-evenly p-2 w-1/2 rounded-br-xl bg-red-600 text-white">
						<p>Rp.{saldoPengeluaran.toLocaleString("id-ID")}</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default SaldoBox;
