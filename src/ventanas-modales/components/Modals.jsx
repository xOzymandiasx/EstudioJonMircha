import React from 'react';
import { useModal } from '../hooks/useModal';
import Modal from './Modal';

const Modals = () => {
  const [isOpenModal1, openModal1, closeModal1] = useModal(false);
  const [isOpenModal2, openModal2, closeModal2] = useModal(false);
  const [isOpenPortal, openModalPortal, closeModalPortal] = useModal(false);

  return (
    <div>
      <h1>Modals</h1>
      <button onClick={openModal1}>Modal 1</button>
      <Modal isOpen={isOpenModal1} closeModal={closeModal1}>
        <h3>modal</h3>
        <p>Hola este es el contenido de mi modal 1</p>
        <img src="https://placeimg.com/400/400/animals" alt="animals" />
      </Modal>
      <button onClick={openModal2}>Modal 2</button>
      <Modal isOpen={isOpenModal2} closeModal={closeModal2}>
        <h3>Otro modal</h3>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias quis quasi ex vitae voluptatum dolore distinctio nesciunt eius, sunt incidunt ipsa, eligendi neque, tempore repellat.</p>
        <img src="https://placeimg.com/400/400/nature" alt="nature" />
      </Modal>
      <button onClick={openModalPortal}>Modal en portal</button>
      <Modal isOpen={isOpenPortal} closeModal={closeModalPortal}>
        <h3>Modal en portal</h3>
        <p>Este es el contenido de un modal que carga en otro nodo del DOM diferente a donde carga nuestra app React, gracias a un React Portal.</p>
        <img src="https://placeimg.com/400/400/tecnology" alt="tecnology" />
      </Modal>
    </div>
  );
};

export default Modals;