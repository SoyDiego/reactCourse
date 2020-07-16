import React from "react";
import "@testing-library/jest-dom";
import GifGridItem from "../../components/GifGridItem";
import { shallow } from "enzyme";

describe("Pruebas en <GifGridItem/>", () => {
	const title = "Un título";
	const url = "https://localhost/al";
	const wrapper = shallow(<GifGridItem title={title} url={url} />);

	test("Debe de mostrar el componente correctamente. ", () => {
		expect(wrapper).toMatchSnapshot();
	});

	test("Debe de tener un parrafo  con el title ", () => {
		const p = wrapper.find("p");
		expect(p.text().trim()).toBe(title);
	});

	test("Debe de tener una imagen igual al URL y alt de los PROPS ", () => {
		const img = wrapper.find("img");
		expect(img.prop("src")).toBe(url);
		expect(img.prop("alt")).toBe(title);
    });
    

    test('Debe de tener animate__fadeIn', () => {
        const div = wrapper.find('div')
        const className = div.prop("className");
        expect(className.includes('animate__fadeIn')).toBe(true);
    })
    
});