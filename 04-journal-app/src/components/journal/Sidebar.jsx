import React from "react";
import { JournalEntries } from "./JournalEntries";

export const Sidebar = () => {
	return (
		<aside className="journal__sidebar">
			<div className="journal__sidebar-navbar">
				<h3 className="mt-5">
					<i class="fa fa-moon" />
					<span> Diego</span>
				</h3>

				<button className="btn">Logout</button>
			</div>

			<div className="journal__new-entry">
				<i class="far fa-calendar-plus fa-5x" />
				<p className="mt-5">New Entry</p>
			</div>

			<JournalEntries />
		</aside>
	);
};
