import React from "react";
import { Pressable, Image, View } from "react-native";
import commonStyles from "../../../styles/common/style";
import useStyle from "../../../styles/MakeStyle";
import { ApiComment } from "../../../types/comment";
import { Post } from "../../../types/post";
import { images } from "../../../util/assets";
import { AppText } from "../../atoms/appText";
import Card from "../../molecules/Card";
import { styles } from "./styles";

interface Props {
  comment: ApiComment;
}
export const CommentItem = ({ comment: { body, email, name } }: Props) => {
  return (
    <Card cornerRadius={10} style={[styles.cardContainer]}>
      <View
        style={[
          commonStyles.row,
          commonStyles.centerContentVertically,
          { flexWrap: "wrap", marginBottom: 5 },
        ]}
      >
        <AppText style={[styles.userName, { marginEnd: 6 }]}>{name}</AppText>
        <AppText style={[styles.subtitle]}>{`${email}`}</AppText>
      </View>
      <AppText>{body}</AppText>
    </Card>
  );
};
