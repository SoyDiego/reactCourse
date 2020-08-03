import React from "react";

export const JournalEntry = () => {
	return (
		<div className="journal__entry">
			<div
				className="journal__entry-picture"
				style={{
					backgroundSize: "cover",
					backgroundImage:
						"url(http://1.bp.blogspot.com/-A5m1CDr9X14/TzWtIqyOzXI/AAAAAAAAATM/FWRbmLaCcwM/s400/ave-fenix-463906.jpeg)",
				}}></div>

			<div className="journal__entry-body">
				<p className="journal__entry-title">Un nuevo dia</p>
				<p className="journal__entry-content">
					Lorem ipsum dolor sit, amet consectetur adipisicing elit.
					Autem, dolore!
				</p>
			</div>

			<div className="journal__entry-date-box">
				<span>Monday</span>
				<h4>28</h4>
			</div>
		</div>
	);
};
