import './Modal.scss';

import React, { useContext } from 'react';

import { ModalContext } from '../../context';

import { elementContextValue } from '../../App';

export const Modal: React.FC = () => {
  // interface IContext {
  //   Component?: any; // пробовал и ReactNode и React.FC и React.Component и JSX.Element - ничего не работает.
  // }
  const { Component, type } = useContext(ModalContext) as typeof elementContextValue; // изначально тут не было as typeof elementContextValue
  // и я пытался писать const { Component } : IContext, но всплывала ошибка
  // Тип элемента JSX "Component" не имеет конструкций или сигнатур вызова.
  return (
    <div className="modal-container">
      <Component />
      <p>{type}</p>
    </div>
  );
};
