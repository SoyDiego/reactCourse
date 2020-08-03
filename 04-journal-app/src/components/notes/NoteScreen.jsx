import React from "react";
import { NotesAppBar } from "./NotesAppBar";

export const NoteScreen = () => {
	return (
		<div className="notes__main-content">
			<NotesAppBar />

			<div className="notes__content">
				<input
					type="text"
					placeholder="Some awesome title"
					className="notes__title-input"
					autoComplete="off"
				/>

				<textarea
					name=""
					placeholder="What happened today"
					className="notes__textarea"></textarea>

				<div className="notes__image">
					<img
						src="https://www.secureweek.com/wp-content/uploads/2019/11/Linux-990x559.jpg"
						alt="imagen"
					/>
				</div>
			</div>
		</div>
	);
};
