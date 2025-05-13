import { useQuery } from "react-query";
import newsApi from "src/api/News";

import { QUERY_KEYS } from "../../constants/query";

export const useNewsFetch = params =>
  useQuery({
    queryKey: [QUERY_KEYS.NEWS, params],
    queryFn: () => newsApi.fetchList(params),
    enabled: !!params.q.trim(),
  });
