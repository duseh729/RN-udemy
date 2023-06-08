import { StyleSheet, View, Text, Pressable } from "react-native";

const GoalItem = (props) => {
  return (
    <View style={styles.goalItem}>
      {/* Pressable은 터치가 가능하게 하는 컴포넌트 */}
      <Pressable
        // 안드로이드 전용 스타일
        android_ripple={{ color: "#3e028d" }}
        // bind()는 javascript 내장 함수이다. 공부가 필요해보임**
        onPress={props.onDeleteItem.bind(this, props.id)}
        // ios 전용 스타일
        style={({ pressed }) => {
          pressed && styles.pressedItem;
        }}
      >
        <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  pressedItem: {
    opacity: 0.5,
  },
  goalText: {
    padding: 8,
    color: "white",
  },
});
