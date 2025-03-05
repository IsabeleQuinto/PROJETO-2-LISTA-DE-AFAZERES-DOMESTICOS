import { StyleSheet, Text, View } from "react-native";

const Lista = ({ titulo, tarefas }) => {
  return (
    <View style={styles.lista}>
      <Text style={styles.titulo}>{titulo}</Text>
      {tarefas.map((tarefa, index) => (
        <Text key={index} style={styles.tarefa}>
          {tarefa}
        </Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  lista: {
    margin: 5,
  },
  titulo: {
    fontWeight: "bold",
  },
  tarefa: {
    fontSize: 16,
    color: "#666",
  },
});

export default Lista;