const Badge = ({ name, logo, color, fontColor, alt, width, height }) => {
  return (
    <>
      <img
        src={`https://img.shields.io/badge/${name}-${color}?style=flat&logo=${logo}&logoColor=${
          fontColor || 'white'
        }`}
        alt={alt}
        width={width}
        height={height || 20}
      />
    </>
  );
};

export default Badge;
