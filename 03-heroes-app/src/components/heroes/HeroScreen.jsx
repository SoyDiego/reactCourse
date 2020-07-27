import React, { useMemo } from "react";
import { useParams, Redirect } from "react-router-dom";
import getHeroById from "../../selectors/getHeroById";

const HeroScreen = ({ history }) => {
	const { heroeId } = useParams();

	const hero = useMemo(() => getHeroById(heroeId), [heroeId]);
	// const hero = getHeroById(heroeId);

	if (!hero) return <Redirect to="/" />;

	const handleReturn = () => {
		history.length <= 2 ? history.push("/") : history.goBack();
	};

	const {
		superhero,
		publisher,
		alter_ego,
		first_appearance,
		characters,
	} = hero;
	return (
		<div className="row mt-5">
			<div className="col-4">
				<img
					src={`../assets/heroes/${heroeId}.jpg`}
					alt={superhero}
					className="img-thumbnail animate__animated animate__fadeInLeft"
				/>
			</div>

			<div className="col-8">
				<h3>{superhero}</h3>
				<ul className="list-group-list-group-flush">
					<li className="list-group-item">Alter ego: {alter_ego}</li>
					<li className="list-group-item">Publisher: {publisher}</li>
					<li className="list-group-item">
						First appearance: {first_appearance}
					</li>
				</ul>

				<h5>Characters</h5>
				<p>{characters}</p>

				<button className="btn btn-outline-info" onClick={handleReturn}>
					Return
				</button>
			</div>
		</div>
	);
};

export default HeroScreen;
