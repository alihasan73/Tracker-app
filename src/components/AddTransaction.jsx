import { useFormik } from "formik";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import * as Yup from "yup";

const AddTransaction = (props) => {
	const [startDate, setStartDate] = useState(null);
	const formik = useFormik({
		initialValues: {
			id: Math.floor(Math.random() * 1000000000).toString(),
			tanggal: "",
			keterangan: "",
			nominal: "",
		},
		validationSchema: Yup.object({
			tanggal: Yup.string().required("Harap isi tanggal"),
			keterangan: Yup.string()
				.min(2, "Minimal dua karakter")
				.required("Harap isi keterangan"),
			nominal: Yup.number()
				.typeError("Harus berupa angka")
				.required("Harap isi nominal")
				.integer("Harus angka"),
		}),
		onSubmit: (values, { resetForm }) => {
			let val = values;
			let newValues = { ...values, nominal: parseInt(val.nominal) };
			props.valsettransaction([...props.valtransaction, newValues]);
			resetForm({ values: "" });
			setStartDate(undefined);
			formik.setFieldValue("tanggal", null);

			// console.log(newValues);
			// console.log(props.valtransaction);
		},
	});
	// const tampil = () => {
	// 	console.log(props.transaction);
	// };
	return (
		<>
			<div>
				<h1 className="text-2xl md:text-4xl text-center font-thin">
					Tambah Transaksi
				</h1>
				{/* <button onClick={tampil}>Tets</button> */}
				<hr className="border-3 border-gray-400 my-5 w-3/4 mx-auto" />
				{/* <div className="flex flex-col items-center space-y-4 md:flex-row md:justify-center md:space-x-4 md:px-5 md:items-baseline mb-5"> */}
				<form
					onSubmit={formik.handleSubmit}
					className="flex flex-col items-center space-y-4 md:flex-row md:justify-center md:space-x-4 md:px-5 md:items-baseline mb-5"
				>
					<div className="flex flex-col w-3/4 md:w-1/4">
						<label htmlFor="tanggal" className="pb-1 text-lg">
							Tanggal
						</label>

						<DatePicker
							name="tanggal"
							id="tanggal"
							className="h-12 w-full rounded-md px-2 hover:ring-2 ring-sky-400 mb-1"
							selected={startDate}
							onChange={(date) => {
								formik.setFieldValue("tanggal", date.getTime());
								setStartDate(date);
							}}
							placeholderText={"Silahkan isi tanggal.."}
						/>
						{formik.errors.tanggal && <p>{formik.errors.tanggal}</p>}
					</div>
					<div className="flex flex-col w-3/4 md:w-1/4 ">
						<label htmlFor="keterangan" className="pb-1 text-lg">
							Keterangan
						</label>
						<input
							type="text"
							name="keterangan"
							id="keterangan"
							value={formik.values.keterangan}
							onChange={formik.handleChange}
							placeholder="Bayar cicilan"
							className="h-12 rounded-md px-2 hover:ring-2 ring-sky-400 mb-1"
						/>
						{formik.errors.keterangan && <p>{formik.errors.keterangan}</p>}
					</div>
					<div className="flex flex-col w-3/4 md:w-1/6">
						<label htmlFor="nominal" className="pb-1 text-lg">
							Nominal* (+/-)
						</label>
						<input
							type="text"
							name="nominal"
							id="nominal"
							value={formik.values.nominal}
							onChange={formik.handleChange}
							placeholder="-15000"
							className="h-12 rounded-md px-2 hover:ring-2 ring-sky-400 mb-1"
						/>
						{formik.errors.nominal && <p>{formik.errors.nominal}</p>}
					</div>
					<div className="flex items-center justify-center h-14 w-1/3 md:w-1/6 md:self-end lg:w-1/12">
						{/* <label htmlFor=""></label> */}
						<button
							type="submit"
							className="bg-sky-600 hover:bg-sky-800 shadow-xl h-10 w-32 rounded-md text-white"
						>
							Tambah
						</button>
					</div>
				</form>
				{/* </div> */}
				<p className="pl-5 mb-5 text-gray-600 text-center">
					*Jika diisi angka negatif, akan tercatat sebagai pengeluaran
				</p>
			</div>
		</>
	);
};

export default AddTransaction;
