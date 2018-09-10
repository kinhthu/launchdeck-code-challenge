import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import axios from 'axios';

import styles from './styles';

export default class PersonPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            avatar_url: '',
            name: '',
            location: ''
        }
    }

    componentDidMount() {
        const username = this.props.navigation.getParam('username');

        axios.get(`https://api.github.com/users/${username}`)
        .then((res) => {
            if(res) {
                const { name, location, avatar_url } = res.data;
                this.setState({
                    avatar_url,
                    name,
                    location,
                });
            }
        })
        .catch((err) => console.log(err));
    }

    render() {
        const { container, userInfo, nameStyle, avatar, usernameStyle, locationStyle } = styles;
        const { avatar_url, name, location } = this.state;

        return (
            <View style={container}>
                <View style={userInfo}>
                    <Image
                        style={avatar}
                        source={{uri: avatar_url || 'http://tpsindustrial.co.uk/wp-content/uploads/2016/02/avatar.png'}}
                    />
                    <View style={nameStyle}>
                        <Text style={usernameStyle}>{name}</Text>
                        <Text style={locationStyle}>{location}</Text>
                    </View>
                </View>
            </View>
        );
    }
}