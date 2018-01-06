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
    hideIma1(){
        alert('1')
    }
    hideIma2(){
        alert('2')
    }
    hideIma3(){
        alert('3')
    }
    hideIma4(){
        alert('4')
    }
    hideIma5(){
        alert('5')
    }
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
                    <View style={styles.main}>
                        <TouchableOpacity
                             onPress={() => this.hideIma1()}
                            style={styles.mainItem}>
                            <View style={styles.mainImgView}>
                                <Image style={{width: 75,
                height: 95,
                resizeMode: 'contain',}} source={require('../img/4/banh_mau_do.png')}></Image>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                             onPress={() => this.hideIma2()}
                            style={styles.mainItem}>
                            <View style={styles.mainImgView}>
                                <Image style={{width: 75,
                height: 95,
                resizeMode: 'contain',}} source={require('../img/4/banh_xanhlam.png')}></Image>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                             onPress={() => this.hideIma3()}
                            style={styles.mainItem}>
                            <View style={styles.mainImgView}>
                                <Image style={{width: 75,
                height: 95,
                resizeMode: 'contain',}} source={require('../img/4/banh_tim.png')}></Image>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                             onPress={() => this.hideIma4()}
                            style={styles.mainItem}>
                            <View style={styles.mainImgView}>
                                <Image style={{width: 75,
                height: 95,
                resizeMode: 'contain',}} source={require('../img/4/banh_vang.png')}></Image>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                             onPress={() => this.hideIma5()}
                            style={styles.mainItem}>
                            <View style={styles.mainImgView}>
                                <Image style={{width: 75,
                height: 95,
                resizeMode: 'contain',}} source={require('../img/4/banh_mau_do.png')}></Image>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </Container>
        );
    }
}


