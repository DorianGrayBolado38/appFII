import { Image, StyleSheet, Platform, View } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';


export default function HomeScreen() {
  return (
    
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <View style={styles.headerContainer}>
          <Image  
            source={require('@/assets/images/Mheader.png')}
            style={styles.ImgHeader}
          />
          <View style={styles.headerTextContainer}>
            <ThemedText type="title" style={styles.headerText}>FII Investidor 01</ThemedText>
          </View>
        </View>
      }>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle"style={styles.BodyText}>Confira o ranking de ações</ThemedText>
        <ThemedText type="subtitle"style={styles.subText}>Maiores Dividend Yield</ThemedText>
        <Image  
            source={require('@/assets/images/acoes.png')}
            style={styles.imgAcoes}
          />
          </ThemedView>
          <ThemedView style={styles.stepContainer}>
  
        <ThemedText type="subtitle"style={styles.subText}>Maiores Valor de Mercado</ThemedText>
        <Image  
            source={require('@/assets/images/mercado.png')}
            style={styles.imgAcoes}
          />
          </ThemedView>
          <ThemedView style={styles.stepContainer}>
    
        <ThemedText type="subtitle"style={styles.subText}>Maiores Receitas</ThemedText>
        <Image  
            source={require('@/assets/images/receita.png')}
            style={styles.imgAcoes}
          />
          </ThemedView>
          
       
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    position: 'relative',
  },
  ImgHeader: {
    width: 400,
    height: 400, // Ajuste a altura conforme necessário
    resizeMode: 'cover',
  },
  headerTextContainer: {
    
    position: 'absolute',
    top: 20, // Ajuste a posição do texto conforme necessário
    left: 16, // Ajuste a posição do texto conforme necessário
    right: 16, // Ajuste a posição do texto conforme necessário
    padding: 8,
    borderRadius: 4,
  },
  headerText: {
    borderColor: "black",
    color: 'black',
    fontSize: 20,
    fontFamily: "verdana",
  },
  BodyText: {
    borderColor: "black",
    color: 'black',
    fontSize: 20,
    fontFamily: "verdana",
  },
  subText: {
    paddingTop:10,
    borderColor: "black",
    color: 'black',
    fontSize: 16,
    fontFamily: "verdana",
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  imgAcoes:{
    width: 290,
    height: 250,
  }
  ,
});
