import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

/**
 * Header
 * MyProfile
 * Division
 * FriendSection
 * FriendList
 */

// props -> 상위 컴포넌트가 하위 컴포넌트에게 보내주는 데이터
// const Header -> 이거 자체가 컴포넌트 만드는 것
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
      <Profile name="바보" uri="https://cdn.psnews.co.kr/news/photo/202109/2001162_41524_357.jpg" profileSize={30}/>
    </View>
  );
};

const Profile = (props) => {
  return (
    // flexDirection: "row" 자식 컴포넌트를 row 배치
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

/*
함수형 컴포넌트
state, lifeCycle 관련 기능 사용
클래스형보다 메모리 자원을 덜 사용
컴포넌트 선언이 편함
*/
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