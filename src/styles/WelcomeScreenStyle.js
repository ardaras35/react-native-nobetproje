// WelcomeScreen Style bölümü.
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  inner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 50,
    color: '#000000',
  },
  clockContainer: {
    alignItems: 'center',
    marginBottom: 24,
  },
  timeText: {
    fontSize: 48,
    fontWeight: '700',
    color: '#000000',
    marginBottom: 4,
  },
  dateText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
  },
  button: {
    width: '80%',
    paddingVertical: 14,
    backgroundColor: '#000',
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonSpacing: {
    marginTop: 12,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 40,
    color: '#000000',
  },
  icon: {
    width: 140,
    height: 140,
    marginBottom: 140,
  },
});

export default styles;