import Activity from "./Activity";

const LastActivities = () => {
	return (
		<>
			<div className="mx-9">
				<div className="flex justify-between mb-2">
					<h2 className="font-bold text-lg">Aktivitas Terakhir</h2>
          <div className="text-md">Lainnya</div>
				</div>
				<div className="rounded-2xl *:pt-3 last:pb-3 px-3 bg-white">
					<div className="flex">
						<img src="./icon-trashcan.svg" alt="" />
						<div className="w-full">
							<p>Buang sampah</p>
							<p>01 Mar 2024</p>
						</div>
						<div className="break-keep font-bold">-Rp{(2500).toLocaleString("id-ID")}</div>
					</div>
          <Activity title="Daur Ulang" date="01 Mar 2024" type="-" icon="icon-recycle" money={5000} />
					<div className="flex">
						<img src="./icon-trashcan.svg" alt="" />
						<div className="basis-full">
							<p>Buang sampah</p>
							<p>01 Mar 2024</p>
						</div>
						<div className="break-keep font-bold">-Rp{(2500).toLocaleString("id-ID")}</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default LastActivities;
