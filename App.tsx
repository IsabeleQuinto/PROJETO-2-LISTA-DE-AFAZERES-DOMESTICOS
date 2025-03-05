import { StyleSheet, Text, View, ScrollView } from "react-native";
import Lista from './components/Lista';

const App = () => {
  const tarefas = {
    manha: ["1. Lavar as roupas sujas.", "2. Lavar e guardar a louça.", "3. Limpar a pia da cozinha.", "4. Preparar o almoço.", "5. Colocar as roupas no varal."],
    tarde: ["1. Limpar a mesa da cozinha.", "2. Varrer e passar o pano nos cômodos da casa.", "3. Lavar e guardar a louça.", "4. Limpar a pia da cozinha.", "5. Tirar as roupas do varal."],
    noite: ["1. Levar o cachorro para passear.", "2.Limpar os calçados utilizados durante o dia.", "3. Preparar o jantar"],
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Lista de Afazeres Domésticos</Text>
      <Lista titulo="Manhã" tarefas={tarefas.manha} />
      <Lista titulo="Tarde" tarefas={tarefas.tarde} />
      <Lista titulo="Noite" tarefas={tarefas.noite} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 5,
  },
  header: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "#333",
  },
});

export default App;