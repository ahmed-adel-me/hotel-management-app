import { useQuery } from "@tanstack/react-query";
import { getSettings } from "../../services/apiSettings";

export default function () {
  const {
    data: settings,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["settings"],
    queryFn: getSettings,
  });

  return { settings, isLoading, error };
}
