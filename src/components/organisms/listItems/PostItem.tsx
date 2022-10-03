import React from "react";
import { Pressable, Image, View } from "react-native";
import commonStyles from "../../../styles/common/style";
import useStyle from "../../../styles/MakeStyle";
import { Post } from "../../../types/post";
import { images } from "../../../util/assets";
import { AppText } from "../../atoms/appText";
import Card from "../../molecules/Card";
import { styles } from "./styles";

interface Props {
  post: Post;
  onPress?: () => void;
}
export const PostItem = ({ post: { user, title, body }, onPress }: Props) => {
  // const cardStyles = useStyle(cardStyle);

  return (
    <Pressable {...{ onPress }}>
      <Card cornerRadius={10} style={[commonStyles.row, styles.cardContainer]}>
        <Image
          style={styles.image}
          source={user?.gender === "male" ? images.male : images.female}
        />
        <View style={[commonStyles.container]}>
          <AppText style={styles.userName}>{user?.name ?? ""}</AppText>
          <AppText style={styles.title}>{title}</AppText>
          <AppText numberOfLines={3} lineBreakMode="tail" style={styles.body}>
            {body}
          </AppText>
        </View>
      </Card>
    </Pressable>
  );
};
