import { useQuery } from "@tanstack/react-query";
import { getAllBookings } from "../../services/apiBookings";
import { useSearchParams } from "react-router-dom";

export default function () {
  const [searchParams] = useSearchParams();

  const filterValue = searchParams.get("status");
  const filter =
    !filterValue || filterValue === "all"
      ? null
      : { field: "status", value: filterValue, method: "gte" };
  const sortByRaw = searchParams.get("sortBy") || "startDate-desc";
  const [field, direction] = sortByRaw.split("-");
  const sortBy = { field, direction };
  const page = !searchParams.get("page") ? 1 : +searchParams.get("page");

  const { data: { data: bookings, count } = {}, isLoading } = useQuery({
    queryKey: ["bookings", filter, sortBy, page],
    queryFn: () => getAllBookings({ filter, sortBy, page }),
  });
  return { bookings, isLoading, count };
}
