import React, {useState, useEffect} from 'react';
import {View, TouchableOpacity, StatusBar} from 'react-native';
import {
  Card,
  Body,
  Header,
  Text,
  Container,
  Content,
  Button,
} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import Snackbar from 'react-native-snackbar';

const localItems = new Array(9).fill('pencil');

const App = () => {
  const [items, setItems] = useState(localItems);
  const [circleTurn, setCircleTurn] = useState(true);

  const [labelText, setLabelText] = useState('Circle Turn');

  const cardPressed = (item, index) => {
    if (labelText.includes('Wins')) {
      return Snackbar.show({
        text: 'Game Already finsished, please restart the game',
        backgroundColor: 'red',
      });
    }

    if (item === 'pencil') {
      const itemsCopy = JSON.parse(JSON.stringify(items));
      if (circleTurn) {
        itemsCopy[index] = 'circle-o';
        setCircleTurn(false);
        setLabelText('Cross Turns');
      } else {
        itemsCopy[index] = 'times-circle-o';
        setCircleTurn(true);
        setLabelText('Circle Turns');
      }
      setItems(itemsCopy);
    } else {
      return Snackbar.show({
        text: 'Position already filled up',
        backgroundColor: 'red',
        textColor: '#fff',
      });
    }
  };

  const checkWinner = () => {
    console.log('CHECK WINNER');
    console.log(items[0], items[1], items[2]);
    if (items[0] !== 'pencil' && items[0] == items[1] && items[1] == items[2]) {
      setLabelText(
        `${items[0].includes('times') ? 'Cross Wins' : 'Circle Wins'}`,
      );
      console.log(items[0]);
      return Snackbar.show({
        text: `${items[0].includes('times') ? 'Cross Wins' : 'Circle Wins'}`,
        backgroundColor: 'green',
      });
    } else if (
      items[3] !== 'pencil' &&
      items[3] == items[4] &&
      items[4] == items[5]
    ) {
      setLabelText(
        `${items[3].includes('times') ? 'Cross Wins' : 'Circle Wins'}`,
      );

      return Snackbar.show({
        text: `${items[3].includes('times') ? 'Cross Wins' : 'Circle Wins'}`,
        backgroundColor: 'green',
      });
    } else if (
      items[6] !== 'pencil' &&
      items[6] == items[7] &&
      items[7] == items[8]
    ) {
      setLabelText(
        `${items[6].includes('times') ? 'Cross Wins' : 'Circle Wins'}`,
      );

      return Snackbar.show({
        text: `${items[6].includes('times') ? 'Cross Wins' : 'Circle Wins'}`,
        backgroundColor: 'green',
      });
    } else if (
      items[0] !== 'pencil' &&
      items[0] == items[3] &&
      items[3] == items[6]
    ) {
      setLabelText(
        `${items[0].includes('times') ? 'Cross Wins' : 'Circle Wins'}`,
      );

      return Snackbar.show({
        text: `${items[0].includes('times') ? 'Cross Wins' : 'Circle Wins'}`,
        backgroundColor: 'green',
      });
    } else if (
      items[1] !== 'pencil' &&
      items[1] == items[4] &&
      items[4] == items[7]
    ) {
      setLabelText(
        `${items[1].includes('times') ? 'Cross Wins' : 'Circle Wins'}`,
      );

      return Snackbar.show({
        text: `${items[1].includes('times') ? 'Cross Wins' : 'Circle Wins'}`,
        backgroundColor: 'green',
      });
    } else if (
      items[2] !== 'pencil' &&
      items[2] == items[5] &&
      items[5] == items[8]
    ) {
      setLabelText(
        `${items[2].includes('times') ? 'Cross Wins' : 'Circle Wins'}`,
      );

      return Snackbar.show({
        text: `${items[2].includes('times') ? 'Cross Wins' : 'Circle Wins'}`,
        backgroundColor: 'green',
      });
    } else if (
      items[0] !== 'pencil' &&
      items[0] == items[4] &&
      items[4] == items[8]
    ) {
      setLabelText(
        `${items[0].includes('times') ? 'Cross Wins' : 'Circle Wins'}`,
      );

      return Snackbar.show({
        text: `${items[0].includes('times') ? 'Cross Wins' : 'Circle Wins'}`,
        backgroundColor: 'green',
      });
    } else if (
      items[2] !== 'pencil' &&
      items[2] == items[4] &&
      items[4] == items[6]
    ) {
      setLabelText(
        `${items[2].includes('times') ? 'Cross Wins' : 'Circle Wins'}`,
      );

      return Snackbar.show({
        text: `${items[2].includes('times') ? 'Cross Wins' : 'Circle Wins'}`,
        backgroundColor: 'green',
      });
    }
  };

  const resetGame = () => {
    setItems(localItems);
    setCircleTurn(true);
    setLabelText('Circles Turn');
  };

  useEffect(() => {
    checkWinner();
  }, [items]);

  return (
    <Container>
      <Header>
        <Body>
          <Text style={{color: '#fff'}}>Tic Tac Toe Game</Text>
        </Body>
      </Header>
      <Content>
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 20,
          }}>
          {items.map((item, index) => (
            <Card
              style={{
                width: '30%',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                height: 120,
              }}
              key={index}>
              <TouchableOpacity
                onPress={() => cardPressed(item, index)}
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Icon name={item} size={30} color="#900" />
              </TouchableOpacity>
            </Card>
          ))}
        </View>
        <Button style={{marginVertical: 30, marginHorizontal: 20}} block>
          <Text>{labelText}</Text>
        </Button>
        {labelText.includes('Wins') ? (
          <Button
            onPress={() => resetGame()}
            rounded
            style={{marginHorizontal: 20}}
            block>
            <Text>Restart Game</Text>
          </Button>
        ) : null}
      </Content>
    </Container>
  );
};

export default App;
