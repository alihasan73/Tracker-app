import SaldoBox from "./SaldoBox";
const Header = (props) => {
	return (
		<>
			<header className="bg-blue-900 h-36 rounded-2xl m-4 p-2 flex flex-col z-10">
				<h1 className="text-4xl text-center md:text-start md:text-5xl text-white ">
					Ilkom Expense Tracker
				</h1>
				<p className="text-white text-center md:text-start">
					Catat setiap pemasukan dan pengeluaranmu
				</p>
				<SaldoBox transaction={props.transaction} />
			</header>
		</>
	);
};

export default Header;
