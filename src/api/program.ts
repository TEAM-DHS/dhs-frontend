import client from "./client";
import useInfiniteScroll from "../utils/hooks/useInfiniteScroll";
import apiClient from ".";

interface ProgramType {
  title: string;
  category: string;
  schedule: string;
  location: string;
  postalCode: string;
  deadline: string;
  targetNumber: number;
  content: string;
  depositAccount: string;
  depositBank: string;
  depositName: string;
  price: number;
  hostName: string;
  hostDescription: string;
  images: string[];
}

// post program
export const postProgram = async (data: ProgramType) => {
  try {
    const res = await client.post("/programs", data);
    return res.data;
  } catch (err) {
    throw err;
  }
};

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

// get program liked
export const getProgramLiked = async (page: number) => {
  try {
    const res = await apiClient.get(`/programs/liked`, {
      params: {
        page: page,
      },
    });
    return res.data;
  } catch (err) {
    throw err;
  }
};

// get program created
export const getProgramCreated = async (page: number) => {
  try {
    const res = await client.get(`/programs/created`, {
      params: {
        page: page,
      },
    });
    return res.data;
  } catch (err) {
    throw err;
  }
};

// get program registered
export const getProgramRegistered = async (page: number) => {
  try {
    const res = await client.get(`/programs/registered`, {
      params: {
        page: page,
      },
    });
    return res.data;
  } catch (err) {
    throw err;
  }
};

// get program registrators
export const getProgramRegistrators = async (programId: number) => {
  try {
    const res = await client.get(`/programs/${programId}/registrations`, {
      params: {
        programId: programId,
      },
    });
    return res.data;
  } catch (err) {
    throw err;
  }
};

// patch program close
export const patchProgramClosed = async (programId: number) => {
  try {
    const res = await client.patch(`/programs/${programId}/closed`, {
      params: {
        programId: programId,
      },
    });
    return res.data;
  } catch (err) {
    throw err;
  }
};
