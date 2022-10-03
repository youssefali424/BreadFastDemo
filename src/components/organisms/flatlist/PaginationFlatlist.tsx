import * as React from "react";
import { FlatList, FlatListProps, View } from "react-native";
import LoadingView from "../../molecules/LoadingView";
import EmptyListView from "../../molecules/EmptyList";
import LoadingFooter from "../../molecules/LoadingFooter";
import ErrorView from "../../molecules/ErrorView";

interface PaginationFlatlistProps<T> extends FlatListProps<T> {
  handleLoadMore: () => void;
  loadingMore?: boolean;
  hasNextPage?: boolean;
  error?: boolean;
}

function PaginationFlatlist<T>(props: PaginationFlatlistProps<T>) {
  const { hasNextPage, loadingMore, handleLoadMore, error } = props;
  var noData = !props.data || (props.data && props.data.length === 0);
  return (
    <>
      <FlatList
        {...props}
        onEndReached={() => {
          if (!loadingMore && !props.refreshing && hasNextPage) {
            handleLoadMore();
          }
        }}
        onEndReachedThreshold={0.01}
        onRefresh={() => {
          props.onRefresh?.();
        }}
        refreshing={props.refreshing || false}
        ListEmptyComponent={
          !error && loadingMore ? (
            <View />
          ) : error ? null : (
            props.ListEmptyComponent ?? EmptyListView
          )
        }
        contentContainerStyle={[{ flexGrow: 1 }, props.contentContainerStyle]}
        ListFooterComponent={
          noData && error ? (
            <ErrorView onTryAgain={props.onRefresh} />
          ) : (
            <LoadingFooter
              backgroundColor="transparent"
              loading={!noData && loadingMore}
            />
          )
        }
        ListFooterComponentStyle={{
          flexShrink: 1,
          backgroundColor: "transparent",
        }}
      />
      <LoadingView loading={noData && props.loadingMore} />
    </>
  );
}
export default PaginationFlatlist;
