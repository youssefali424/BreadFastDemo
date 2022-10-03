import React from "react";
import { render, waitFor } from "@testing-library/react-native";
import { usePostDetails } from "../../util/hooks/postDetails";
import { PostDetailsScreen } from "../postDetails/postDetails";
import { Post } from "../../types/post";
import { PaginationData } from "../../types/paginationData";
import { ApiComment } from "../../types/comment";
import { InfiniteData } from "@tanstack/react-query";
import { useRoute } from "@react-navigation/core";
jest.mock("@react-navigation/core");

// Solves TypeScript Errors
const mockedUsePostDetails = usePostDetails as unknown as jest.Mock<
  Partial<ReturnType<typeof usePostDetails>>
>;
const mockedUseRoute = useRoute as unknown as jest.Mock<
  Partial<ReturnType<typeof useRoute>>
>;
// Mock the module
jest.mock("../../util/hooks/postDetails");

describe("<PostDetailsScreen />", () => {
  const params = {
    id: 0,
    body: "mock body",
    title: "mock title",
    user: {
      id: 1,
      email: "email@email.com",
      gender: "male",
      name: "user name",
    },
  };
  mockedUseRoute.mockReturnValue({
    key: "PostDetails",
    name: "PostDetails",
    params: params as Post,
  });
  beforeEach(() => {
    mockedUsePostDetails.mockImplementation(() => ({ isLoading: true }));
  });
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("Fetches the correct ID", () => {
    render(<PostDetailsScreen />);

    expect(usePostDetails).toHaveBeenCalledWith(0);
  });

  it("Displays loading indicator", () => {
    const { queryByTestId } = render(<PostDetailsScreen />);

    // expect(queryByTestId("LoadingView")).;
    waitFor(() => queryByTestId(/LoadingView/) !== null);
  });

  it("Displays error view", () => {
    mockedUsePostDetails.mockImplementation(() => ({
      isLoading: false,
      isError: true,
      error: { message: "Unable to fetch the product data" },
    }));
    const { getByText, queryByText, queryByTestId } = render(
      <PostDetailsScreen />
    );

    expect(queryByText(/no comments/i)).toBeFalsy();
    expect(queryByTestId(/LoadingView/)).toBeFalsy();
    getByText(/try again/i);
  });
  it("Displays data", () => {
    mockedUsePostDetails.mockImplementation(() => ({
      isLoading: false,
    }));
    const { getByText, queryByText, queryByTestId } = render(
      <PostDetailsScreen />
    );

    // We don't want the loading flag to be displayed
    expect(queryByTestId(/LoadingView/)).toBeFalsy();
    const post = params as Post;
    getByText(post.body);
    getByText(post.title);
    getByText(post.user.email);
    getByText(post.user.name);
  });
  it("Displays comments", () => {
    const mockedPostData = {
      id: 1,
      body: "body mock",
      email: "mock@mock.com",
      name: "user name",
    } as ApiComment;
    const mockedData = {
      pages: [
        {
          nodes: [mockedPostData],
          pageInfo: { hasNextPage: false },
        },
      ],
    } as InfiniteData<PaginationData<ApiComment>>;
    mockedUsePostDetails.mockImplementation(() => ({
      isLoading: false,
      data: mockedData,
    }));

    const { getAllByText } = render(<PostDetailsScreen />);

    getAllByText(mockedPostData.body);
    getAllByText(mockedPostData.email);
    getAllByText(mockedPostData.name);
  });
  it("Displays no data", () => {
    const mockedData = {
      pages: [
        {
          nodes: [],
          pageInfo: { hasNextPage: false },
        },
      ],
    } as InfiniteData<PaginationData<ApiComment>>;
    mockedUsePostDetails.mockImplementation(() => ({
      isLoading: false,
      data: mockedData,
    }));
    const { queryByText } = render(<PostDetailsScreen />);
    expect(queryByText(/no comments/i)).toBeTruthy();
  });
});
