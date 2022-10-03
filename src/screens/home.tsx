import React from "react";
import { View, Image } from "react-native";
import {
  StackActions,
  useNavigation,
  useTheme,
} from "@react-navigation/native";
import PaginationFlatlist from "../components/organisms/flatlist/PaginationFlatlist";
import { images } from "../util/assets";
import { usePosts } from "../util/hooks/posts";
import { PostItem } from "../components/organisms/listItems/PostItem";
import commonStyles from "../styles/common/style";
import { Routes } from "../navigation/routes";

export const HomeScreen = () => {
  const navigation = useNavigation();
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    refereshing,
    refresh,
    error,
  } = usePosts();
  const theme = useTheme();
  return (
    <View
      style={[
        commonStyles.container,
        commonStyles.centerContentVertically,
        { backgroundColor: theme.colors.background },
      ]}
    >
      <Image source={images.logo} style={{ height: 50, width: 30 }} />
      <PaginationFlatlist
        style={[commonStyles.container, { width: "100%" }]}
        data={data?.pages.flatMap((e) => e.nodes)}
        keyExtractor={(item) => `${item.id}`}
        renderItem={({ item }) => (
          <PostItem
            post={item}
            onPress={() =>
              navigation.dispatch(StackActions.push(Routes.PostDetails, item))
            }
          />
        )}
        handleLoadMore={(): void => {
          fetchNextPage({});
        }}
        onRefresh={refresh}
        loadingMore={isLoading || isFetchingNextPage}
        refreshing={refereshing && !isFetchingNextPage}
        hasNextPage={hasNextPage}
        error={!!error}
      />
    </View>
  );
};
