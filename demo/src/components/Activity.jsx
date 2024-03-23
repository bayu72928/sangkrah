const Activity = ({ title, icon, date, type, money }) => {
	return (
		<div className="flex">
			<img className="pr-2" src={"./" + icon + ".svg"} alt="" />
			<div className="w-full">
				<p>{title}</p>
				<p>{date}</p>
			</div>
			<div className="break-keep font-bold">
				{type}Rp{money.toLocaleString("id-ID")}
			</div>
		</div>
	);
};

export default Activity;
