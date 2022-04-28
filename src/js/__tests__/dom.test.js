import { luhnAlgorithm, cardnumber } from '../validators';
import CardFormWidget from '../widget';

test('should render self', () => {
  document.body.innerHTML = '<div id="container"></div>';

  const container = document.querySelector('#container');
  const widget = new CardFormWidget(container);

  widget.bindToDOM();

  expect(container.innerHTML).toEqual(CardFormWidget.markup);
});

test('should validate chek', () => {
  document.body.innerHTML = '<div id="container"></div>';

  const container = document.querySelector('#container');
  const widget = new CardFormWidget(container);

  widget.bindToDOM();

  const input = container.querySelector(CardFormWidget.inputSelector);
  input.value = '4111111111111111';

  const submit = container.querySelector(CardFormWidget.submitSelector);
  submit.click();

  const chek = container.querySelector(CardFormWidget.chekSelector);

  expect(chek.classList.contains('valid')).toEqual(true);
});

test('should invalid chek', () => {
  document.body.innerHTML = '<div id="container"></div>';

  const container = document.querySelector('#container');
  const widget = new CardFormWidget(container);

  widget.bindToDOM();

  const input = container.querySelector(CardFormWidget.inputSelector);
  input.value = '56565';

  const submit = container.querySelector(CardFormWidget.submitSelector);
  submit.click();

  const chek = container.querySelector(CardFormWidget.chekSelector);

  expect(chek.classList.contains('invalid')).toEqual(true);
});

