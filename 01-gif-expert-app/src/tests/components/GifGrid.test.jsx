import React from "react";
import "@testing-library/jest-dom";
import { shallow } from "enzyme";
import GifGrid from "../../components/GifGrid";
import useFetchGifs from "../../hooks/useFetchGifs";
jest.mock("../../hooks/useFetchGifs");

describe("Pruebas en <GifGrid/>", () => {
	const category = "Testing";

	test("Debe de mostrarse correctamente ", () => {
		useFetchGifs.mockReturnValue({
			data: [],
			loading: true,
		});

		const wrapper = shallow(<GifGrid category={category} />);
		expect(wrapper).toMatchSnapshot();
	});

	test("Debe de mostrar items cuando se cargan imagenes useFetchGifs", () => {
		const gifs = [
			{
				id: "1",
				url: "https://localhost/test.jpg",
				title: "Testing",
			},
			{
				id: "2",
				url: "https://localhost/test.jpg",
				title: "Testing",
			},
		];

		useFetchGifs.mockReturnValue({
			data: gifs,
			loading: false,
		});
		const wrapper = shallow(<GifGrid category={category} />);

		expect(wrapper.find("p").exists()).toBe(false);
		expect(wrapper.find("GifGridItem").length).toBe(gifs.length);
	});
});
