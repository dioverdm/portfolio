import { useState, useEffect } from "react";

export const useFetch = () => {
  const [datos, useDatos] = useState([]);

  useEffect(() => {
    consumirApi('https://www.mooenz.me/api/data');
  },[]);

  const consumirApi = async (URL) => {
    try {
      const res = await fetch(URL);
      const data = await res.json();
      useDatos(data);
    } catch (error) {
      console.log(error);
    }
  };

  return datos;
};