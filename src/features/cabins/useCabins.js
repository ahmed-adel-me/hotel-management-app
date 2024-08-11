import { useQuery } from "@tanstack/react-query";
import { getAllCabins } from "../../services/apiCabins";

export default function () {
  const { data: cabins, isLoading } = useQuery({
    queryKey: ["cabins"],
    queryFn: getAllCabins,
  });
  return { cabins, isLoading };
}
