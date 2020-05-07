import React from 'react';
 //import { render } from '@testing-library/react';
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import FlagSelector, { getImageURL } from '../FlagSelector';
import renderer from "react-test-renderer";
import { createEvent } from '@testing-library/react';
import { Data } from '../data';


const getSrcValue = json => json.children[1].children[1].props.src;
let container = null;
beforeEach(() => {
  // подготавливаем DOM-элемент, куда будем рендерить
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // подчищаем после завершения
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it('Simple start. Argentina is default',() =>{
  const component = renderer.create(<FlagSelector />);

  let currentSrc = getSrcValue(component.toJSON());

  expect(currentSrc).toBe("https://www.countryflags.io/ar/shiny/64.png");
  });

it('getImageURL works correctly',() =>{
    const component = renderer.create(<FlagSelector />);
    

    let currentSrc = getImageURL('ar');
  
    expect(currentSrc).toBe("https://www.countryflags.io/ar/shiny/64.png");

    });
  
   

  it('checking datas length', () =>
  {
    const data = Data;
    const component = renderer.create(<FlagSelector />);
    renderer.act(() => {
      expect(data).toHaveLength(69);
    });
  
    
  })