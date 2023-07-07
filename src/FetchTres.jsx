import useFetch from "./utils/hooks/useFetch";

const FetchTres = () => {

  const [comments] = useFetch("https://jsonplaceholder.typicode.com/comments/2", []);
  console.log({comments});
  return <div>FetchTres</div>;
};

export default FetchTres;