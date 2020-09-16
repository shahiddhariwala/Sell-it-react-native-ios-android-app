import React from 'react';
import Screen from "../components/Screen";
import Icon from "../components/Icon";
import ListItem from '../components/ListItem';

const AccountScreen = () => {
    return (
        <Screen>
            <ListItem title="My Title" subtitle="My Subtitle" ImageComponent={<Icon name="email" size={50} />} />
        </Screen>
    );
}

export default AccountScreen;