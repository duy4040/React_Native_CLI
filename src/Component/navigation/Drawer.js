import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { IntroduceTopTabComponent, ProjectTopTabComponent } from './TopTab';
import Home from '../Screen/Home';

const Drawer = createDrawerNavigator();

const DrawerComponent = ({ navigation, route }) => {
    return (
        <Drawer.Navigator initialRouteName="Introduce">
            {/* <Drawer.Screen name="Home" component={Home} /> */}
            <Drawer.Screen name="Introduce" component={IntroduceTopTabComponent} />
            <Drawer.Screen name="Projects" component={ProjectTopTabComponent} />
        </Drawer.Navigator>
    );
};

export default DrawerComponent;
