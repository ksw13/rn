import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

/**
 * Header
 * MyProfile
 * Division
 * FriendSection
 * FriendList
 */

const Header = (props) => {
  return <Text>{props.title}</Text>
};
const MyProfile = () => {
  return <Profile name="지은" uri="https://cdn.psnews.co.kr/news/photo/202109/2001162_41524_357.jpg" profileSize={40}/>;
};
const Division = () => {
  return <Text>Header</Text>
};
const FriendSection = () => {
  return <Text>Header</Text>
};
const FriendList = () => {
  return (
    <View>
      <Profile name="지은" uri="https://cdn.psnews.co.kr/news/photo/202109/2001162_41524_357.jpg" profileSize={30}/>
      <Profile name="서연" uri="https://cdn.psnews.co.kr/news/photo/202109/2001162_41524_357.jpg" profileSize={30}/>
      <Profile name="민규" uri="https://cdn.psnews.co.kr/news/photo/202109/2001162_41524_357.jpg" profileSize={30}/>
      <Profile name="성은" uri="https://cdn.psnews.co.kr/news/photo/202109/2001162_41524_357.jpg" profileSize={30}/>
      <Profile name="바보" uri="https://cdn.psnews.co.kr/news/photo/202109/2001162_41524_357.jpg" profileSize={30}/>sW
    </View>
  );
};

const Profile = (props) => {
  return (
    <View style={{flexDirection: "row"}}>
      <Image source={{uri: props.uri}}
      style={{
        width: props.profileSize,
        height: props.profileSize,
      }}
      />
      <Text>{props.name}</Text>
    </View>
  );
};

export default function App() {
  return <View style={styles.container}>
    <Header title="친구"/>
    <MyProfile />
    <Division />
    <FriendSection />
    <FriendList />
  </View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});