import style from '../styles/Header.module.scss';

const header = () => {
  const { header, header__container } = style;
  return (
    <div className={`${header}  space-lateral`} id="home">
      <div className={header__container}>
        <h1>Manuel Montaño Sáenz</h1>
        <p>Hola, soy Desarrollador frontend Frontend.</p>
      </div>
    </div>
  );
};

export default header;
