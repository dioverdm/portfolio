import style from '../styles/Header.module.scss';

const header = () => {
  const { header, header__container } = style;
  return (
    <div className={`${header}  space-lateral`} id="home">
      <div className={header__container}>
        <p></p>
        <h1>¡Hola, me llamo<br /><span>José M Montaño</span></h1>
        <p>Frontend Developer</p>
      </div>
    </div>
  );
};

export default header;
