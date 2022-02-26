<style>
  :root {
    --white: #ddd;
    --redCherry: #f53b57;
    --black: #111;
  }

  .container {
    background-color: var(--black);
    padding: 40px 24px 20px;
    border-radius: 10px;
    margin: 0 0 20px;
  }

  .title {
    color: var(--withe);
    font-size: 4rem;
    font-weight: bold;
    text-align: center;
    display: flex;
    flex-direction: column;
  }

  .title::before {
    content: '¡Hola! me llamo';
    font-size: 1.8rem;
    font-weight: 400;
    line-height: 2.5rem;  
    color: var(--white);
    opacity: .7;
    margin: 0 0 5px;
    text-align: start
  }

  .title::after {
    content: 'Frontend Developer';
    font-size: 1.8rem;
    font-weight: 700;
    line-height: 2.5rem;
    color: var(--redCherry);
    margin: 5px 0 0;
    text-align: end
  }

  .body {
    font-size:1.2rem;
    font-weight: lighter;
  }

  .title{
  }
</style>
<section class="container">
  <p class="title">José M Montaño</p>
</section>
  <p class="body">Este es mi pagina personal donde encontraran información de mi perfil profesional, mis experiencias mas recientes y las skills que utilice para cada proyecto que trabaje.</p>

# **Bienvenidos**

## **Instalación**

### Clona el repositorio

```bash
  git clone git@github.com:Mooenz/portfolio.git
```

### Instala las dependencias

```bash
  npm install
```

### Servidor de desarrollo

```bash
  npm run dev
```

## **Demo**

[Mooenz.me](https://www.mooenz.me/)

## **Overview**

![Overwiew mooenz.com](./MooenzSite.gif)

## **Contact**

- Website [mooenz.me](https://www.mooenz.me/)
- GitHub [@mooenz](https://github.com/Mooenz)
- Twitter [@mooenzdev](https://twitter.com/MooenzDev)
