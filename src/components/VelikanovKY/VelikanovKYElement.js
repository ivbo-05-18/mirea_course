import React from 'react';
import Weather from './Weather';
import Trends from './Trends';
import TodoApp from './KlevleevVRToDo';

const todoItems = [];
todoItems.push({ index: 1, value: 'Сходить в магазин', done: false });
todoItems.push({ index: 2, value: 'Полить цветы', done: true });
todoItems.push({ index: 3, value: 'Покормить кота', done: true });

const VelikanovKYElement = () => (
  <div>
    <h2> Собственный элемент </h2>
    <Weather />
    <hr />
    <h2>Элемент извне</h2>
    <Trends />
    <hr />
    <h2>Элемент другого студента (Клевлеев В.Р.)</h2>
    <TodoApp initItems={todoItems} />
    <hr />
  </div>
);


export default VelikanovKYElement;
