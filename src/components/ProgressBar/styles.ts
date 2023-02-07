import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    height: 56,
    backgroundColor: "#29292E",
    position: 'absolute',
    bottom: 32,
    alignSelf: 'center',
    borderRadius: 32,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,

  },
  value: {
    color: '#C4C4CC',
    marginRight: 7,
  },
  tracker: {
    flex: 1,
    height: 3,
    borderRadius: 3,
    backgroundColor: "#505059"
  },
  progress: {
    height: 3,
    backgroundColor: '#8257E5'
  },
  progressContent: {
    flexDirection: 'row',
    alignItems: 'center',
  }
})
