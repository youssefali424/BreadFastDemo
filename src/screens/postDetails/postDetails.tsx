import { useRoute, useTheme } from "@react-navigation/native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";

import React from "react";
import { View, Image } from "react-native";
import { AppText } from "../../components/atoms/appText";
import PaginationFlatlist from "../../components/organisms/flatlist/PaginationFlatlist";
import { CommentItem } from "../../components/organisms/listItems/Comment";
import { MainStackParams } from "../../navigation/routes";
import commonStyles from "../../styles/common/style";
import { Post } from "../../types/post";
import { images } from "../../util/assets";
import { usePostDetails } from "../../util/hooks/postDetails";
import { styles } from "./styles";

export const PostDetailsScreen: React.FC<
  Partial<NativeStackScreenProps<MainStackParams, "PostDetails">>
> = () => {
  const { params } = useRoute();
  const theme = useTheme();
  const { user, title, body, id } = params as Post;
  const {
    data,
    fetchNextPage,
    hasNextPage,
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
        }}
        ListHeaderComponent={
          <View style={styles.bodyContainer}>
            <AppText style={styles.userName}>{title}</AppText>
            <AppText style={{ marginBottom: 5 }}>{body}</AppText>
            <AppText style={styles.userName}>{"Comments"}</AppText>
          </View>
        }
        ListEmptyComponent={<View />}
        renderItem={({ item }) => <CommentItem comment={item} />}
        handleLoadMore={(): void => {
          fetchNextPage({});
        }}
        onRefresh={refresh}
        loadingMore={(!refereshing && isLoading) || isFetchingNextPage}
        refreshing={refereshing}
        hasNextPage={hasNextPage}
        error={!!error}
        nestedScrollEnabled
      />
      {!error && !isLoading && list?.length == 0 && (
        <View style={[commonStyles.center, commonStyles.container]}>
          <AppText>{"no comments"}</AppText>
        </View>
      )}
    </View>
  );
};
