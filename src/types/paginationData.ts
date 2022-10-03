export interface PaginationData<T> {
    nodes: T[];
    pageInfo: {
      endCursor: string;
      startCursor: string;
      hasNextPage: boolean;
      hasPreviousPage: boolean;
    };
  }