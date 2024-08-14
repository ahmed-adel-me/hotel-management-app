import { useQuery } from "@tanstack/react-query";
import { getAllBookings } from "../../services/apiBookings";

export default function () {
  const { data: bookings, isLoading } = useQuery({
    queryKey: ["bookings"],
    queryFn: getAllBookings,
  });
  return { bookings, isLoading };
}
