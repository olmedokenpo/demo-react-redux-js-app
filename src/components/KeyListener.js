import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setF2Pressed } from '../store/slices/users'; // Asegúrate de tener esta acción en tu slice

const KeyListener = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'F2') {
        dispatch(setF2Pressed(true)); // Actualiza el estado en Redux
        console.log('F2 pressed');
      }
    };

    const handleKeyUp = (event) => {
      if (event.key === 'F2') {
        dispatch(setF2Pressed(false)); // Restablece el estado en Redux
        console.log('F2 released');
      }
    };

    // Agrega los eventos al montar
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    // Limpia los eventos al desmontar
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [dispatch]);

  return null; // No necesita renderizar nada
};

export default KeyListener;
