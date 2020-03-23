import React from 'react';
import {View} from 'react-native';
import {
  Text,
  Appbar,
  Card,
  Avatar,
  Divider,
  Title,
  Paragraph,
} from 'react-native-paper';

const MyOrder = () => {
  return (
    <>
      <View>
        <Appbar.Header>
          <Appbar.BackAction />
          <Appbar.Content title="My Order" />
          <Appbar.Action icon="dots-vertical" />
        </Appbar.Header>
        <Card borderRadius={0} style={{elevation: 0}}>
          <Appbar.Header style={{backgroundColor: 'white', elevation: 0}}>
            <Appbar.Content title="Train" />
            <Appbar.Action icon="dots-vertical" />
          </Appbar.Header>
          <Divider />
          <Card.Content>
            <Paragraph>Card content</Paragraph>
            <Paragraph>Card content</Paragraph>
            <Paragraph>Card content</Paragraph>
            <Paragraph>Card content</Paragraph>
            <Paragraph>Card content</Paragraph>
          </Card.Content>
        </Card>
      </View>
    </>
  );
};
export default MyOrder;
