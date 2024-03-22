const Transaksi = () => {
	return (
		<>
			<div className="bg-[#3A844F] px-9 pt-8 pb-24 text-white flex justify-between">
				<div>
					<div className="font-light">Saldo Kamu</div>
					<div className="text-3xl font-semibold">Rp128,887</div>
				</div>
				<div className="border border-white w-fit h-fit rounded-full">
					<img className="w-14 h-14" src="avatar.png" alt="" srcset="" />
				</div>
			</div>

			<div className="px-9 pt-4 bg-slate-100 -mt-8 rounded-t-3xl ">
				<div className="flex justify-between items-center">
					<h2 className="font-bold text-xl">Transaksi Saya</h2>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="w-6 h-6"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
						/>
					</svg>
				</div>
        <div>
          29 Feb
        </div>
			</div>
		</>
	);
};

export default Transaksi;
