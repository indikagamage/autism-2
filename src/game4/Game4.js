import React from "react";
import {Image, TouchableOpacity, View} from "react-native";
import {Button, Card, CardItem, Container, Content, Header, Icon, Left, Right, Title} from "native-base";
import styles from './style';

export default class Game4 extends React.Component {
    constructor(props) {
        super(props);
        this.goBack = this.goBack.bind(this);
        this.state = {}
    }

    static navigationOptions = {
        header: null
    };

    goBack() {
        this.props.navigation.navigate("Home")
    }

    render() {
        return (
            <Container style={styles.container}>
                <Image style={styles.images} source={require('../img/bg_ip6.png')}></Image>
                <View style={styles.view1}>
                    <View style={styles.header}>
                        <View style={styles.headerLeft}>
                            <TouchableOpacity
                                onPress={() => this.goBack()}
                            >
                                <Image style={styles.imagesLeft} source={require('../img/back.png')}></Image>
                            </TouchableOpacity>

                        </View>
                    </View>
                </View>
            </Container>
        );
    }
}


