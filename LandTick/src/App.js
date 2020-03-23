import React, {useState} from 'react';
import {BottomNavigation} from 'react-native-paper';
import Home from './pages/Home';
import MyOrder from './pages/MyOrder';
import Account from './pages/Account';

const App = () => {
  const [scene, setScene] = useState({
    index: 0,
    routes: [
      {key: 'home', title: 'home', icon: 'home'},
      {key: 'myOrder', title: 'My Order', icon: 'format-list-bulleted'},
      {key: 'account', title: 'Account', icon: 'account'},
    ],
  });

  const _handleIndexChange = index => {
    setScene({...scene, index: index});
  };
  const _renderScene = BottomNavigation.SceneMap({
    home: Home,
    myOrder: MyOrder,
    account: Account,
  });
  return (
    <>
      <BottomNavigation
        navigationState={scene}
        onIndexChange={_handleIndexChange}
        renderScene={_renderScene}
      />
    </>
  );
};

export default App;
