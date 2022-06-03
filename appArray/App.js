import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { FlatList } from 'react-native-web';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Rede Social - Encontro no Senac</Text>
      <Text>Você tem um projeto integrador</Text>
      <Text>Quer envolver novas áreas?</Text>
      <Text>Então vamos encontrar os alunos aqui</Text>
      <StatusBar style="auto" />
      <FlatList>
        data={pessoas}
        renderItem={({item})}=>
        <View>
          <Text>{item.nome}</Text>
          <Text>{item.curso}</Text>
          <Text>{item.periodo}</Text>
        </View>
        }
        />
      </FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const pessoas = [
  {
    uid:159,
    name:'Danilo Soares',
    curso:'Técnico de Informática',
    periodo:'Manhã',
    turma:'TI10m',
    gosto:'Php',
    bio:'',
    img:'',
  },
  {
    uid:420,
    nome:'Bruno Galeazzo',
    curso:'Tecnico de informatica',
    periodo:'Manhã',
    turma:'TI10m',
    gosto:'Hardware, Redes',
    bio:'mais novo membro da conferencia mundial de pods no banheiro ',
    img:'',
  },
  {
      uid:69,
      nome:'sasuke',
      curso:'ninja',
      periodo:'manhã',
      turma:'ti12',
      gosto:'sofrer',
      bio:'matar um certo alguem é meu sonho',
      img:'',
  },
  {
    uid:10,
    nome:'Washington barreto',
    curso: 'Técnico de informática',
    periodo: 'Manhã',
    turma: 'Ti10',
    gosto: 'Hardware, Back-End, Redes, C#',
    bio: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry Lorem Ipsum is simply dummy.'
    img:'',
  },
  {
    uid:850,
    name:'Daniel Lacerda',
    curso:'Técnico de Informática',
    periodo:'Manhã',
    turma:'TI10m',
    gosto:'Php, Css, Design Gráfico, Games',
    bio:'Gosto de Jogar, gosto de mexer na internet, sou professor de informática, e gosto de tocar instrumentos como teclado, violão, guitarra e bateria'
    img:'',
  },
  {
    uid:171,
    nome: 'Jair Messias',
    curso: 'Enfeitador de Bolos',
    periodo: 'Manhã',
    turma: 'EB10',
    gosto: 'Bolo, Chantilly e Fuzil',
    bio: 'Presidente do Brasil, apaixonado por confeitaria. Adoro uma mulher que saiba fazer um bolinho do bom e um mousse cremoso! Geralmente me chamam de diabo, corrupto, maníaco e genocida. Mas eu acho que são apelidos carinhosos do meu povo :)',
    img: '',
  },
  {
    uid:420,
    nome:'Caio elias',
    curso:'Tecnico de informatica',
    periodo:'Manhã',
    turma:'TI10m',
    gosto:'Hardware,Banco de dados,C#',
    bio:'garoto de programa junior',
    img:'',
    },
    {
      uid:159,
      nome:'Cauãzinho chavão',
      curso: 'Técnico de Informática',
      periodo: 'Manhã',
      turma: 'Ti10',
      gosto:'Livia, hosana, laura, Mol e casadas', 
      bio:'Hardware,,REDES,fazendo programa nois é só o basico, preto lindo, famoso e rico',
      img:'./assets/123.jpg'
    },
    {
      uid:159,
      nome:'Leonardo Mock',
      curso:'Técnico Informatica',
      perido:'Manhã',
      Turma:'Ti08',
      Gosto:'Hardware,Front-end,Back-and',
      bio:'Manuntenção não é de graça fica esperto',
    },
    {
      uid:159,
      Nome:'Adriano Silva',
      Curso:'Técnico de Informática',
      Periodo: 'Manhã',
      Turma:'TI10',
      Gosto:'Programação',
      Bios: 'Engajando na empresa da Microsolft',
    },
    {
    uid:158,
    nome:'homem aranha',
    curso:'escalada',
    periodo:'manhã',
    turma:'ti19',
    gosto:'subir parede',
    bio:'dormir acordar trabalhar banho e comer e dps tudo de novo',
    img:'',
    },
]
