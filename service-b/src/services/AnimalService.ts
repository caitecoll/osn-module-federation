export async function getAnimals() {
  const response = await fetch("http://localhost:4000/animals");
  return await response.json();
}
