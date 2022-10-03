import { useNavigation, useRoute, useTheme } from "@react-navigation/native";
import React from "react";
import { View, Image, ScrollView } from "react-native";
import { AppText } from "../../components/atoms/appText";
import ErrorView from "../../components/molecules/ErrorView";
import PaginationFlatlist from "../../components/organisms/flatlist/PaginationFlatlist";
import { CommentItem } from "../../components/organisms/listItems/Comment";
import commonStyles from "../../styles/common/style";
import { Post } from "../../types/post";
import { images } from "../../util/assets";
import { usePostDetails } from "../../util/hooks/postDetails";
import { styles } from "./styles";

export const PostDetailsScreen = () => {
  const { params } = useRoute();
  const theme = useTheme();
  const { user, title, body, id } = params as Post;
  console.log({ user });
  const {
    data,
    fetchNextPage,
    hasNextPage,
    refetch,
    isRefetching,
    isFetchingNextPage,
    isLoading,
    refresh,
    refereshing,
    error,
  } = usePostDetails(id);
  var list = data?.pages.flatMap((e) => e.nodes);
  return (
    <View
      style={[
        commonStyles.container,
        commonStyles.centerContentVertically,
        { backgroundColor: theme.colors.background },
      ]}
    >
      <View style={styles.userContainer}>
        <Image
          style={styles.userAvatar}
          source={user?.gender === "male" ? images.male : images.female}
        />
        <AppText style={styles.userName}>{user?.name}</AppText>
        <AppText style={styles.email}>{user?.email}</AppText>
      </View>
      <PaginationFlatlist
        style={[commonStyles.container, { width: "100%" }]}
        data={list}
        keyExtractor={(item) => `${item.id}`}
        contentContainerStyle={{
          paddingBottom: 40,
          flex: 1,
        }}
        ListHeaderComponent={
          <View style={styles.bodyContainer}>
            <AppText style={styles.userName}>{title}</AppText>
            <AppText style={styles.email}>{body}</AppText>
            <AppText style={styles.userName}>{"Comments"}</AppText>
          </View>
        }
        ListEmptyComponent={<View />}
        renderItem={({ item }) => <CommentItem comment={item} />}
        handleLoadMore={(): void => {
          fetchNextPage({});
        }}
        onRefresh={refresh}
        loadingMore={isLoading || isFetchingNextPage}
        refreshing={refereshing && !isFetchingNextPage}
        hasNextPage={hasNextPage}
        error={!!error}
        nestedScrollEnabled
      />
      {!error && !isLoading && list.length == 0 && (
        <View style={[commonStyles.center, commonStyles.container]}>
          <AppText>{"no comments"}</AppText>
        </View>
      )}
    </View>
  );
};
