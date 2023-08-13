import { useEffect } from "react";

const url = '/data.json';
function App() {
  useEffect(()=>{
    async function getData(){
try {
	const response = await fetch(url);
	const result = await response.json();
	console.log(result);
} catch (error) {
	console.error(error);
}

}
getData()
},[])
  return (
    <>
    <h1>Tablica odlotów Port Lotniczy Szczecin </h1>
    </>
  )
}

export default App
