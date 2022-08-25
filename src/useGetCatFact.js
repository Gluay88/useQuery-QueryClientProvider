import { useQuery } from "@tanstack/react-query";
import Axios from "axios";

export const useGetCatFact = () => {
  const {
    data,
    refetch,
    isLoading: isCatLoading,
    error,
  } = useQuery(["cat"], async () => {
    return Axios.get("https://catfact.ninja/fact").then((res) => res.data);
  });

  const refetchData = () => {
    // alert("Data Refetched!!");
    refetch();
  };
  if (error) {
  }
  return { data, refetchData, isCatLoading };
};
