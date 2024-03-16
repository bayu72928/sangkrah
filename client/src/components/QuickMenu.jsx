const QuickMenu = () => {
	return (
		<div className="mx-9 flex justify-between *:text-center *:font-semibold *:w-16 *:text-sm">
			<div className="">
				<div className="bg-white w-16 h-16 rounded-2xl flex justify-center items-center ">
					<img src="./icon-recycle.svg" className="h-8 w-8" alt="" />
				</div>
				<p className="mt-1 leading-4">Daur Ulang</p>
			</div>
			<div className="">
				<div className="bg-white w-16 h-16 rounded-2xl flex justify-center items-center">
					<img src="./icon-trashcan.svg" className="h-8 w-8" alt="" />
				</div>
				<p className="mt-1 leading-4">Buang Sampah</p>
			</div>
			<div className="">
				<div className="bg-white w-16 h-16 rounded-2xl flex justify-center items-center ">
					<img src="./icon-topup.svg" className="h-8 w-8" alt="" />
				</div>
				<p className="mt-1 leading-4">Isi Saldo</p>
			</div>
			<div className="">
				<div className="bg-white w-16 h-16 rounded-2xl flex justify-center items-center ">
					<img src="./icon-gift.svg" className="h-8 w-8" alt="" />
				</div>
				<p className="mt-1 leading-4">Tukar Poin</p>
			</div>
		</div>
		// QuickMenu
	);
};

export default QuickMenu;
