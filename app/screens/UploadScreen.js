import { View, StyleSheet, Modal } from "react-native";
import * as Progress from "react-native-progress";
import { LottieView } from "lottie-react-native";
import colors from "../config/colors";

function UploadScreen({ progress = 0, visible = false, onDone }) {
  if (!visible) return null;
  return (
    <Modal visible={visible}>
      <View style={styles.container}>
        {progress < 1 ? (
          <Progress.Bar
            progress={progress}
            color={colors.primary}
            width={200}
          />
        ) : (
          <LottieView
            autoPlay
            loop={false}
            style={styles.animation}
            onAnimationFinish={onDone}
            source={require("../assets/animation/done.json")}
          />
        )}
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  animation: {
    width: 150,
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
});

export default UploadScreen;
