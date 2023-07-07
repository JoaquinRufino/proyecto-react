import useFetch from "./utils/hooks/useFetch";

const FetchUno = () => {

  let [users] = useFetch("https://jsonplaceholder.typicode.com/users", [] );
  console.log({ users });

  return <div>FetchUno</div>;
};

export default FetchUno;