import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Divider } from "react-native-elements";
import React from "react";
import { postFooterIcons } from "./icons";

// Props: post object
// Renders one post
const Post = ({ post }) => {
  return (
    <View style={styles.container}>
      <Divider width={1} orientation="vertical" />
      <PostHeader post={post} />
      <PostImage post={post} />
      <View style={{ marginHorizontal: 15, marginTop: 10 }}>
        <PostFooter post={post} />
        <Likes post={post} />
        <Caption post={post} />
        <ViewComments post={post} />
        <Comments post={post} />
      </View>
    </View>
  );
};

const PostHeader = ({ post }) => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.headerUser}>
        <Image
          source={{ uri: post.profile_picture }}
          style={styles.userPicture}
        ></Image>
        <Text style={styles.userText}>{post.user}</Text>
      </View>

      <View>
        <Text style={styles.headerOptions}> ... </Text>
      </View>
    </View>
  );
};

const PostImage = ({ post }) => {
  return (
    <View style={styles.imageContainer}>
      <Image source={{ uri: post.imageUrl }} style={styles.postImage} />
    </View>
  );
};

const PostFooter = ({ post }) => {
  return (
    <View style={styles.footerContainer}>
      <View style={styles.leftFooterIconsContainer}>
        <FooterIcon
          imgStyle={styles.footerIcon}
          imgUrl={postFooterIcons[0].imageUrl}
        />
        <FooterIcon
          imgStyle={styles.footerIcon}
          imgUrl={postFooterIcons[1].imageUrl}
        />
        <FooterIcon
          imgStyle={styles.footerIcon}
          imgUrl={postFooterIcons[2].imageUrl}
        />
      </View>
      <View>
        <FooterIcon
          imgStyle={styles.footerIcon}
          imgUrl={postFooterIcons[3].imageUrl}
        />
      </View>
    </View>
  );
};

const FooterIcon = ({ imgStyle, imgUrl }) => {
  return (
    <TouchableOpacity>
      <Image style={imgStyle} source={{ uri: imgUrl }} />
    </TouchableOpacity>
  );
};

const Likes = ({ post }) => {
  return (
    <View style={{ flexDirection: "row", marginTop: 5 }}>
      <Text style={{ color: "white", fontWeight: "600" }}>
        {post.likes.toLocaleString("en")} likes
      </Text>
    </View>
  );
};

const Caption = ({ post }) => {
  return (
    <View style={{ marginTop: 5 }}>
      <Text style={{ color: "white" }}>
        <Text style={{ fontWeight: "600" }}>{post.user} </Text>
        <Text>
          {" "}
          {post.caption.length > 90
            ? post.caption.slice(0, 90) + " ..."
            : post.caption}{" "}
        </Text>
      </Text>
    </View>
  );
};

const ViewComments = ({ post }) => {
  return (
    <View style={{ marginTop: 5 }}>
      {!!post.comments.length && (
        <TouchableOpacity>
          <Text style={{ color: "grey" }}>
            View {!!post.comments.length > 1 && "all "}
            {post.comments.length}{" "}
            {post.comments.length > 1 ? "comments" : "comment"}
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const Comments = ({ post }) => {
  return (
    <View>
      {post.comments.map((comment, index) => (
        <View key={index} style={{ flexDirection: "row", marginTop: 5 }}>
          <Text style={{ color: "white" }}>
            <Text style={{ fontWeight: "600" }}>{comment.user}</Text>
            <Text> {comment.comment}</Text>
          </Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  // Post
  container: {
    marginBottom: 30,
  },

  // PostHeader
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 5,
    alignItems: "center",
  },

  headerUser: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 7,
  },

  userPicture: {
    width: 35,
    height: 35,
    borderRadius: 50,
    marginLeft: 6,
    borderWidth: 1,
  },

  userText: {
    color: "white",
    marginLeft: 5,
    fontWeight: "700",
    // marginTop:10
  },

  headerOptions: {
    color: "white",
    fontWeight: "900",
  },

  // POST IMAGE
  postImage: {
    height: "100%",
    resizeMode: "cover",
  },
  imageContainer: {
    width: "100%",
    height: 450,
  },

  // POST FOOTER
  footerIcon: {
    width: 33,
    height: 33,
  },

  footerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  leftFooterIconsContainer: {
    flexDirection: "row",
    width: "32%",
    justifyContent: "space-between",
  },
});

export default Post;
