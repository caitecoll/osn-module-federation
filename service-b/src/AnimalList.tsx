import { FC, useEffect, useState } from "react";

const AnimalList: FC = () => {
  const [animalList, setAnimalList] = useState<any[]>([]);

  useEffect(() => {
    async function getData() {
      const response = await fetch("http://localhost:4000/animals");
      setAnimalList(await response.json());
    }
    getData();
  }, []);

  return (
    <ul>
      {animalList.map((animal) => (
        <li>
          <b>Name:</b> {animal.name}
          <br />
          <b>Type: </b> {animal.type}
        </li>
      ))}
    </ul>
  );
};

export default AnimalList;
