import { useGetCatFact } from "./useGetCatFact";

export const Cat = () => {
  const { data, isCatLoading, refetchData } = useGetCatFact();
  if (isCatLoading) <h1>loading...</h1>;
  return (
    <div>
      <button
        onClick={refetchData}
        style={{
          width: "300px",
          display: "block",
          margin: "0 auto",
          marginTop: "3rem",
          backgroundColor: "orange",
          padding: "0.5rem",
          borderRadius: "0.5rem",
          fontSize: "1rem",
          fontWeight: "bold",
          cursor: "pointer",
        }}
      >
        REFETCH
      </button>
      <h1>{data?.fact}</h1>
    </div>
  );
};
