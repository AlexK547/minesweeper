import React, { useState } from 'react'

export default function Settings() {

  const [sizeField, setSizeField] = useState(10);
  const [countMines, setCountMines] = useState(10);

  function clickButton(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    const button = event.currentTarget;
    const size: number = +(button.getAttribute("data-size") || 10);
    const buttons = document.querySelectorAll('.sizes__btn');

    buttons.forEach(element => {
      element.classList.remove('sizes__btn_select');
    });
    button.classList.add('sizes__btn_select');
    setSizeField(size);
  }

  function changeInput(event: React.ChangeEvent<HTMLInputElement>) {
    const newCount: string = event.target.value;
    const quantityInput = document.querySelector('.quantity__input') as HTMLInputElement;
    const quantityRange = document.querySelector('.quantity__range') as HTMLInputElement;

    quantityInput.value = newCount;
    quantityRange.value = newCount;
    setCountMines(+newCount);
  }

  return (
    <div className="settings">
      <div className="sizes">
        <button
          type="button"
          className="sizes__btn sizes__btn_select"
          data-size="10"
          onClick={event => clickButton(event)}
          >10x10
        </button>
        <button
          type="button"
          className="sizes__btn"
          data-size="15"
          onClick={event => clickButton(event)}
          >15x15
        </button>
        <button
          type="button"
          className="sizes__btn"
          data-size="25"
          onClick={event => clickButton(event)}
          >25x25
        </button>
      </div>
      <div className="quantity">
        <div className="quantity__title">Quantity mines:</div>
        <input
          className="quantity__input"
          type="number"
          defaultValue="10"
          min="10"
          max="99"
          onChange={(event) => changeInput(event)}
        />
        <input
          className="quantity__range"
          type="range"
          defaultValue="10"
          min="10"
          max="99"
          onChange={(event) => changeInput(event)}
        />
      </div>
    </div>
  )
}
