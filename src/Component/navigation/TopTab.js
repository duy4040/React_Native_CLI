import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import TodoList from '../Screen/Projects/TodoList/TodoList';
import TimeDown from '../Screen/Projects/TimeDown/TimeDown';
import General from '../Screen/Introduce/General';
import Detail from '../Screen/Introduce/Detail';

const TopTab = createMaterialTopTabNavigator();

const IntroduceTopTabComponent = () => {
    return (
        <TopTab.Navigator>
            <TopTab.Screen name="General" component={General} />
            <TopTab.Screen name="Detail" component={Detail} />
        </TopTab.Navigator>
    );
};

const ProjectTopTabComponent = () => {
    return (
        <TopTab.Navigator>
            <TopTab.Screen name="Todo List" component={TodoList} />
            <TopTab.Screen name="Time Down" component={TimeDown} />
        </TopTab.Navigator>
    );
};

export { IntroduceTopTabComponent, ProjectTopTabComponent };
