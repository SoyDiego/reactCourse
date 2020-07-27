import { heroes } from "../data/heroes";

const getHeroesById = (id) => {
	return heroes.find((heroe) => heroe.id === id);
};

export default getHeroesById;
