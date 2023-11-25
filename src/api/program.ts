import client from "./client";
import useInfiniteScroll from "../utils/hooks/useInfiniteScroll";

// post program

// get popular program (top five)
export const getProgramTopFive = async () => {
  try {
    const res = await client.get("/programs/popular");
    return res.data;
  } catch (err) {
    throw err;
  }
};

// get program list
type GetProgramType = {
  page: number;
  filter: EventFilterType;
};
export const getProgram = async ({ page, filter }: GetProgramType) => {
  try {
    const res = await client.get(
      `/programs?page=${page}&sort=${filter.sort}${
        filter.keyword === "" ? "" : `&keyword=${filter.keyword}`
      }${filter.category === "" ? "" : `&category=${filter.category}`}`,
    );
    return res;
  } catch (err) {
    throw err;
  }
};
// use program with infinite scroll
export const useProgramList = (filter: EventFilterType) => {
  const { pageLastItemRef, data, isFetching, hasNextPage, fetchNextPage } =
    useInfiniteScroll({
      queryKey: ["programList", filter],
      // initialPage: 1,
      fetch: getProgram,
      fetchParams: { filter: filter },
      onIntersect: async (entry, observer) => {
        observer.unobserve(entry.target);
        if (hasNextPage && !isFetching) fetchNextPage();
      },
    });
  return { pageLastItemRef, hasNextPage, data };
};

// get program detail
export const getProgramDetail = async (programId: number) => {
  try {
    const res = await client.get(`/programs/${programId}`);
    return res.data;
  } catch (err) {
    throw err;
  }
};

// post program notice
export const postProgramNotice = async (
  programId: number,
  notice: {
    title: string;
    content: string;
  },
) => {
  try {
    const res = await client.post(`/programs/${programId}/notice`, notice);
    return res.data;
  } catch (err) {
    throw err;
  }
};

// post program register
export const postProgramRegister = async (
  programId: number,
  info: EventRegisterFormType,
) => {
  try {
    const res = await client.post(`/programs/${programId}`, info);
    return res.data;
  } catch (err) {
    throw err;
  }
};
