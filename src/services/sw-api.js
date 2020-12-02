export async function getAllStarships() {
  const url = "https://swapi.dev/api/starships/";
  const response = await fetch(url, { mode: "cors" });
  const json = await response.json();
  return json;
}
