import toast from 'react-hot-toast';

export const useClickBoard = () => {
  navigator.clipboard.writeText('joss92821@hotmail.com');

  return toast.success('Copiado!', {
    position: 'bottom-center',
    duration: 7000,
    style: {
      fontSize: '15px',
    },
  });
};
