import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  root: {
    display: 'flex',
  },
  header: {
    elevation: 0,
  },
  carousel: {
    display: 'flex',
    backgroundColor: '#0264d3',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cards: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 20,
    marginLeft: 10,
    marginRight: 10,
  },
  index: {
    flex: 1,
    alignItems: 'center',
  },
  cardsInside: {
    height: 135,
    width: 135,
    elevation: 10,
  },
  cardItem: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  cardText: {margin: 10},
  textHai: {margin: 20, fontSize: 18, fontWeight: '900'},
  textTitle: {margin: 20, marginBottom: 0, fontSize: 18, fontWeight: '900'},
});
