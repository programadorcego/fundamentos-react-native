import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  text: {
    fontSize: 40,
    color: "blue"
  },

  mainContainer: {
    backgroundColor: "red"
  },

  button: {
    backgroundColor: "#2563EB",
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 12,

    alignItems: "center",
    justifyContent: "center",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 6,

    elevation: 5,
  },

  buttonPressed: {
    opacity: 0.8,
    transform: [{ scale: 0.97 }],
  },

  buttonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "600",
  },
});