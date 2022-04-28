import { luhnAlgorithm, cardnumber } from './validators';

export default class CardFormWidget {
    constructor(parentEl) {
        this.parentEl = parentEl;
    }

    static get markup() {
        return `
    <form data-widget="card-form-widget" id="card-form-widget">
      <div class="form-group">
          <input id="card-input" data-id="card-input" type="text" placeholder="Номер карты....">
         <button data-id="card-submit" class="card-submit">Нажмите для валидации</button>
         <div data-id="chek" class="chek"> </div>
      </div>
    </form>
    `;
    }

    static get inputSelector() {
        return '[data-id=card-input]';
    }

    static get submitSelector() {
        return '[data-id=card-submit]';
    }

    static get chekSelector() {
        return '[data-id=chek]';
    }

    bindToDOM() {
        this.parentEl.innerHTML = this.constructor.markup;
        const submit = this.parentEl.querySelector(this.constructor.submitSelector);
        submit.addEventListener('click', evt => this.onSubmit(evt));
    }

    onSubmit(evt) {
        evt.preventDefault();
        const inputEl = this.parentEl.querySelector(this.constructor.inputSelector);
        const chek = this.parentEl.querySelector(this.constructor.chekSelector);
        const cardArr = document.querySelectorAll('.card');
        let classCard = cardnumber(inputEl.value.trim());
        for (let i = 0; i < cardArr.length; i++) {
            cardArr[i].classList.add('cdisabled')
            if (cardArr[i].classList.contains(classCard)) {
                cardArr[i].classList.remove('cdisabled')
            }
        }
        if (luhnAlgorithm(inputEl.value.trim()) && cardnumber(inputEl.value.trim()) != false) {
            chek.classList.add('valid');
            chek.classList.remove('invalid');
        } else {
            chek.classList.add('invalid');
            chek.classList.remove('valid');
        }
    }
}
