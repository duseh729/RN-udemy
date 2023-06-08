// 웹 용 React와 달리 Button 같은 것도 import 해야함.
import { StyleSheet, View, FlatList } from "react-native";
import { react, useState } from "react";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App(enteredGoalText) {
  const [courseGoals, setCoursGoals] = useState([]);

  const addGoalHandler = (enteredGoalText) => {
    setCoursGoals((currentCourseGoals) => [...currentCourseGoals, { text: enteredGoalText, id: Math.random().toString() }]);
  };

  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoal={addGoalHandler} />
      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            return (
              // View로 감싼 이유는 ios에서는 Text 컴포넌트에 borderRadius가 적용되지 않음.
              <GoalItem text={itemData.item.text} />
            );
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
        ></FlatList>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 5,
  },
});
