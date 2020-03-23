import React from 'react';
import {View, Dimensions, ScrollView, Image} from 'react-native';
import {Appbar, Text, Card, Avatar, Title, Paragraph} from 'react-native-paper';
import Carousel from 'react-native-snap-carousel';
import SliderEntry from '../test/SliderEntry';
import {sliderWidth, itemWidth} from '../test/SliderEntry.style';
import Svg, {Circle} from 'react-native-svg';
import {styles} from '../style/Home';

// test
import {entries} from '../test/entries';
import {arrayEmpty} from '../test/arrayEmpty';

const {width} = Dimensions.get('window');

const Home = () => {
  const banner = ({item, index}) => {
    return <SliderEntry data={item} even={(index + 1) % 2 === 0} />;
  };
  const cardDummyVirus = ({item, index}) => {
    return (
      <View style={{margin: 10, height: 220}}>
        <Card
          style={{height: '100%', backgroundColor: '#f6f6f6', elevation: 0}}>
          <Card.Cover
            borderRadius={8}
            source={{uri: item.image}}
            style={{height: '40%'}}
          />
          <Card.Content>
            <Title>{item.title}</Title>
            <Paragraph>{item.paragraph}</Paragraph>
          </Card.Content>
        </Card>
      </View>
    );
  };
  const cardDummyPromo = ({item, index}) => {
    return <SliderEntry data={item} even={(index + 1) % 2 === 0} />;
  };

  return (
    <>
      <Appbar.Header style={styles.header}>
        <Appbar.Content title="LandTick" />
        <Appbar.Action icon="login-variant" />
      </Appbar.Header>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.root}>
          <View style={styles.carousel}>
            <Carousel
              loop={true}
              autoplay={true}
              autoplayInterval={10000}
              data={entries}
              renderItem={banner}
              sliderWidth={sliderWidth}
              itemWidth={itemWidth}
            />
          </View>
          <Svg height="40" width="100%">
            <Circle cx={width / 2} cy="-865" r="900" fill="#0063D3" />
          </Svg>
          <Text style={styles.textHai}>Hey kamu, mau kemana ?</Text>
          <View style={styles.cards}>
            <View style={styles.index}>
              <Card style={styles.cardsInside}>
                <View style={styles.cardItem}>
                  <Avatar.Icon size={50} icon="airplane" />
                  <Text style={styles.cardText}>Airplane</Text>
                </View>
              </Card>
            </View>
            <View style={styles.index}>
              <Card
                onPress={e => console.log('unch')}
                style={styles.cardsInside}>
                <View style={styles.cardItem}>
                  <Avatar.Icon size={50} icon="train" />
                  <Text style={styles.cardText}>Train</Text>
                </View>
              </Card>
            </View>
            <View style={styles.index}>
              <Card style={styles.cardsInside}>
                <View style={styles.cardItem}>
                  <Avatar.Icon size={50} icon="car" />
                  <Text style={styles.cardText}>Rent Car</Text>
                </View>
              </Card>
            </View>
          </View>
          <View style={styles.cards}>
            <View style={styles.index}>
              <Card style={styles.cardsInside}>
                <View style={styles.cardItem}>
                  <Avatar.Icon size={50} icon="office-building" />
                  <Text style={styles.cardText}>Hotel</Text>
                </View>
              </Card>
            </View>
            <View style={styles.index}>
              <Card style={styles.cardsInside}>
                <View style={styles.cardItem}>
                  <Avatar.Icon size={50} icon="ticket" />
                  <Text style={styles.cardText}>Event</Text>
                </View>
              </Card>
            </View>
            <View style={styles.index}>
              <Card style={styles.cardsInside}>
                <View style={styles.cardItem}>
                  <Avatar.Icon size={50} icon="castle" />
                  <Text style={styles.cardText}>Attraction</Text>
                </View>
              </Card>
            </View>
          </View>
        </View>
        <View>
          <Text style={styles.textTitle}>
            Info Terkait Pandemi Virus Corona
          </Text>
          <Text style={{margin: 20, marginTop: 10}}>
            Jaga kesehatanmu, ini pasti berlalu. Cek info terkait reschedule dan
            refund disini!
          </Text>
        </View>
        <Carousel
          inactiveSlideOpacity={1}
          inactiveSlideScale={1}
          firstItem={1}
          data={arrayEmpty}
          renderItem={cardDummyVirus}
          sliderWidth={width}
          itemWidth={300}
        />
        <View>
          <Text style={styles.textTitle}>Penawaran Spesial</Text>
          <Text style={{margin: 20, marginTop: 10}}>
            Penawaran spesial khusus buat kamu !
          </Text>
        </View>
        <Carousel
          inactiveSlideOpacity={1}
          inactiveSlideScale={1}
          firstItem={1}
          data={arrayEmpty}
          renderItem={cardDummyPromo}
          sliderWidth={width}
          itemWidth={300}
        />
        <View style={{marginBottom: 20}}>
          <Text style={styles.textTitle}>Posko Online Corona</Text>
        </View>
        <View style={styles.cards}>
          <View style={styles.index}>
            <Card style={{width: 200, height: 200, elevation: 0}}>
              <View style={styles.cardItem}>
                <Text style={styles.cardText}>item 1</Text>
              </View>
            </Card>
          </View>
          <View style={styles.index}>
            <Card style={{width: 200, height: 200, elevation: 0}}>
              <View style={styles.cardItem}>
                <Text style={styles.cardText}>item 2</Text>
              </View>
            </Card>
          </View>
        </View>
        <View style={styles.cards}>
          <View style={styles.index}>
            <Card style={{width: 200, height: 200, elevation: 0}}>
              <View style={styles.cardItem}>
                <Text style={styles.cardText}>item 1</Text>
              </View>
            </Card>
          </View>
          <View style={styles.index}>
            <Card style={{width: 200, height: 200, elevation: 0}}>
              <View style={styles.cardItem}>
                <Text style={styles.cardText}>item 2</Text>
              </View>
            </Card>
          </View>
        </View>
      </ScrollView>
    </>
  );
};
export default Home;
