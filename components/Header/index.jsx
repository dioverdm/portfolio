import Link from 'next/dist/client/link';

//Styles
import style from './Header.module.scss';

const header = () => {
  const { header, header__title, downArrow__container, downArrow } = style;
  return (
    <div className={`${header}  space-lateral`} id="home">
      <div>
        <h1 className={header__title}>José M Montaño</h1>
      </div>

      <Link rel="stylesheet" href="#about">
        <div className={downArrow__container}>
          <a className={downArrow}></a>
        </div>
      </Link>
    </div>
  );
};

export default header;
