import React from 'react';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { addTodo } from '../../actions';
import configureStore from "redux-mock-store";
import AddTodoDefault, { AddTodo } from './AddTodo.js';

configure({adapter: new Adapter()});

xdescribe('<AddTodo />',() => {

  describe('Estructura', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = shallow(<AddTodo />);
    })
    it('Renderiza un <form>', () => {
      expect(wrapper.find('form')).toHaveLength(1)
    })

    it('Renderiza un input con la propiedad "name" igual a "title"', () => {
      expect(wrapper.find('input[name="title"]')).toHaveLength(1);
    })

    it('Renderiza una textarea con la propiedad "name" igual a "description"', () => {
      expect(wrapper.find('textarea[name="description"]')).toHaveLength(1);
    })

    it('Renderiza un input con la propiedad "name" igual a "place"', () => {
      expect(wrapper.find('input[name="place"]')).toHaveLength(1);
    })

    it('Renderiza un input con la propiedad "name" igual a "date"', () => {
      expect(wrapper.find('input[name="date"]')).toHaveLength(1);
    })
    
    it('Renderiza un boton con el "type" "submit"', () => {
      expect(wrapper.find('button[type="submit"]')).toHaveLength(1)
    })
  })

  describe('Manejo de inputs con estado', () => {
    let wrapper, useState, useStateSpy;
    beforeEach(() => {
        useState = jest.fn();
        useStateSpy = jest.spyOn(React, 'useState')
        useStateSpy.mockImplementation((init) => [init, useState]);
        wrapper = shallow(<AddTodo />)
    });

    describe("Title input", () => {

      it('El form deberia cambiar de estado cuando escriban en el input de title', () => {
        // deberías tener un único estado, no uno por cada input
        wrapper.find('input[name="title"]').simulate('change', {target: {name: 'title', value: 'My new value'}});
        expect(useState).toHaveBeenCalledWith({"title": "My new value", "description": "", "place": "", "date": ""});
      });
    });

    describe("Description input", () => {
      it('deberia cambiar de estado cuando escriban en el input de "description"', () => {
        // debe respetar el estado que ya tenía antes
        wrapper.find('textarea[name="description"]').simulate('change', {target: {name: 'description', value: 'salir a escuchar musica'}});
        expect(useState).toHaveBeenCalledWith({"title": "", "description": "salir a escuchar musica", "place": "", "date": ""});
      });
    });

    describe("Place input", () => {
      it('deberia cambiar de estado cuando escriban en el input de "place"', () => {
        wrapper.find('input[name="place"]').simulate('change', {target: {name: 'place', value: 'London'}});
        expect(useState).toHaveBeenCalledWith({"title": "", "description": "", "place": "London", "date": ""});
      });
    });

    describe("Date input", () => {
      it('deberia cambiar de estado cuando escriban en el input de "date"', () => {
        wrapper.find('input[name="date"]').simulate('change', {target: {name: 'date', value: 'mañana'}});
        expect(useState).toHaveBeenCalledWith({"title": "", "description": "", "place": "", "date": "mañana"});
      });
    });
  });


  describe('Dispatch to store', () => {
    const mockStore = configureStore();
    const store = mockStore([], addTodo);

    beforeEach(() => {
      store.clearActions();
    })

    it('deberia hacer un dispatch al store de la action "AddTodo" con los datos del state cuando se hace un Submit', () => {
      const wrapper = mount(<AddTodoDefault store={store} />);
      
      wrapper.find('[type="submit"]').simulate('submit',{ preventDefault () {} });
      const expectedAction = [{
        payload: {
          title: '',
          description: '',
          place: '',
          date: '',
          status: 'Todo',
          id: 1,
        },
        type: 'AddTodo'
      }]
      expect(store.getActions()).toEqual(expectedAction);

    });
  });
});