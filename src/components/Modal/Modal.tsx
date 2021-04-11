import './Modal.scss';

import React, { useContext, useState, useEffect } from 'react';

import cn from 'classnames';

import { ModalContext } from '../../context';

export const Modal: React.FC = () => {
  const [isClosed, setIsClosed] = useState(false);

  interface IContext {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    component?: any;
    type?: string;
    closeble?: boolean;
    clickableBackground?: boolean;
  }
  const {
    component: Component,
    type = 'none',
    closeble = true,
    clickableBackground = true,
  }: IContext = useContext(ModalContext);
  useEffect(() => {
    setIsClosed(false);
  }, []);
  if (!isClosed) {
    return (
      <div
        className={cn({
          'modal-container': true,
          'modal-container_background-common': type === 'common',
          'modal-container_background-error': type === 'error',
          'modal-container_background-message': type === 'message',
        })}
        onClick={(): void => {
          if (clickableBackground) {
            setIsClosed(true);
          }
        }}
      >
        {closeble && (
          <button
            onClick={(): void => {
              setIsClosed(true);
            }}
          >
            Закрыть модалку
          </button>
        )}
        <Component />
        {console.log(closeble)}
        {console.log(clickableBackground)}
        <div>{type}</div>
      </div>
    );
  }
  return null;
};
