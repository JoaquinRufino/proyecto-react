
import useFetch from "./utils/hooks/useFetch";

const FetchDos = () => {
  
    let [albums] = useFetch("https://jsonplaceholder.typicode.com/albums", [])
    console.log({albums})
  return <div>FetchDos</div>;
};

export default FetchDos;