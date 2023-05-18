import React, { useState } from "react";
import { View, Text, Button } from "react-native";

const Component = () => {
  const [count, setCount] = useState(0);

  // const arr = [1,2,3];
  // const first = arr[0];
  // const second = arr[1];
  // const third = arr[2];
  // 위 3줄 코드를 축약해주는 문법
  // const [first, second, third] = arr;

  return (
    <View>
      <Text>You clicked {count} times</Text>
      <Button title="Click me" onPress={() => setCount(count + 1)} />
    </View>
  );
};

export default Component;