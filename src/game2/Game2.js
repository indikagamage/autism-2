import React from "react";
import {StatusBar} from "react-native";
import {
    Button,
    Text,
    Container,
    Card,
    CardItem,
    Body,
    Content,
    Header,
    Title,
    Left,
    Icon,
    Right
} from "native-base";
import {Image, View, TouchableOpacity, Animated} from 'react-native';
import styles from './style';

// var song = null;
export default class Game2 extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            status1:false,
            status2:false,
            status3:false,
            status4:false,
            status5:false,
            status6:false,
            status7:false,
            status8:false,
            status9:false,
            hiddenImage: new Animated.Value(0)
        }
    }

    static navigationOptions = {
        header: null
    };

    render() {
        const {navigate} = this.props.navigation;
        return (
            <Container style={styles.container}>
                <Image style={styles.images} source={require('../img/bg_ip6.png')}></Image>
                <View style={styles.view}>
                </View>
            </Container>
        );
    }
}


