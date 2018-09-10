import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';

export default class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            topFive : ["GrahamCampbell","fabpot","weierophinney","rkh","josh"]
        }
    }
    handleClick = (username) => {
        this.props.navigation.navigate('Person', { username })
    }
    renderTopFive = () => {
        const { userItem } = styles;

        return this.state.topFive.map((user, i) => (
            <TouchableOpacity key={i} style={userItem} onPress={()=> {this.handleClick(user)}}>
                <Text>{user}</Text>
            </TouchableOpacity>
            ));
    }
    render() {
        const { container, users, title } = styles;

        return (
            <View style={container}>
                <Text style={title}>Top 5 GitHub Users</Text>
                <Text>Tap the username to see more information</Text>
                <View style={users}>
                    {this.renderTopFive()}
                </View>
            </View>
        );
    }
}