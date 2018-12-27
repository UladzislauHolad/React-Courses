import { IStep } from "../models/IStep";

const steps: IStep[] = [
  {
    id: 1,
    next: 2,
    label: 'Марка',
    title: 'Выберите марку',
    values: [
      { value: 'Ford' },
      { value: 'BMW' },
      { value: 'Audi' }
    ]
  },
  {
    id: 2,
    prev: 1,
    next: 3,
    parent: 1,
    label: 'Модель',
    title: 'Выберите модель',
    values: [
      { parentValue: 'Ford', value: 'Ka' },
      { parentValue: 'Ford', value: 'Focus' },
      { parentValue: 'Ford', value: 'Fiesta' },
      { parentValue: 'Audi', value: 'TT' },
      { parentValue: 'Audi', value: 'A5' },
      { parentValue: 'Audi', value: 'Q7' },
      { parentValue: 'BMW', value: 'X5' },
      { parentValue: 'BMW', value: 'M5' },
      { parentValue: 'BMW', value: 'i8' }
    ]
  },
  {
    id: 3,
    prev: 2,
    next: 4,
    label: 'Тип трансмиссии',
    title: 'Выберите вид трансмиссии',
    values: [
      { value: 'АКП' },
      { value: 'МКП' }
    ]
  },
  {
    id: 4,
    prev: 3,
    next: 5,
    label: 'Тип топлива',
    title: 'Выберите тип топлива',
    values: [
      { value: 'бензин' },
      { value: 'дизель' }
    ]
  },
  {
    id: 5,
    prev: 4,
    isSummary: true,
    title: 'Итого'
  }
];

export default steps;