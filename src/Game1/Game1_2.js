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
import {Image, View, TouchableOpacity} from 'react-native';
import styles from './style';

// var song = null;
export default class Game1_2 extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            status1:false,
            status2:false,
            status3:false,
            status4:false,
            status5:false,
        }
    }

    static navigationOptions = {
        header: null
    };
    hideIma1(){
        this.setState({
            status1:true
        });
    }
    getMyStyle1() {
        if (this.state.status1) {
            return {
                display: 'none'
            }
        }else{
            return{
                width:105,
                height:95,
                resizeMode: 'contain',
            }
        }
    }
    hideIma2(){
        this.setState({
            status2:true
        });
    }
    getMyStyle2() {
        if (this.state.status2) {
            return {
                display: 'none'
            }
        }else{
            return{
                width:105,
                height:95,
                resizeMode: 'contain',
            }
        }
    }
    hideIma3(){
        this.setState({
            status3:true
        });
    }
    getMyStyle3() {
        if (this.state.status3) {
            return {
                display: 'none'
            }
        }else{
            return{
                width:105,
                height:95,
                resizeMode: 'contain',
            }
        }
    }
    hideIma4(){
        this.setState({
            status4:true
        });
    }
    getMyStyle4() {
        if (this.state.status4) {
            return {
                display: 'none'
            }
        }else{
            return{
                width:105,
                height:95,
                resizeMode: 'contain',
            }
        }
    }

    render() {
        const {navigate} = this.props.navigation;
        const {goBack} = this.props.navigation;
        return (
            <Container style={styles.container}>
                <Image style={styles.images} source={require('../img/bg_ip6.png')}></Image>
                <View style={styles.view}>
                    <View style={styles.header}>
                        <View style={styles.headerLeft}>
                            <TouchableOpacity
                                 onPress={() => goBack()}
                            >
                                <Image style={styles.imagesLeft} source={require('../img/back.png')}></Image>
                            </TouchableOpacity>

                        </View>
                    </View>

                    <View style={styles.main}>
                        <TouchableOpacity onPress={() => this.hideIma1()} style={styles.mainItem}>
                            <View style={styles.mainImgView}>
                                <Image style={this.getMyStyle1()} source={require('../img/1/keo_do.png')}></Image>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => this.hideIma2()} style={styles.mainItem}>
                            <View style={styles.mainImgView}>
                                <Image style={this.getMyStyle2()} source={require('../img/1/keo_do.png')}></Image>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => this.hideIma3()} style={styles.mainItem}>
                            <View style={styles.mainImgView}>
                                <Image style={this.getMyStyle3()} source={require('../img/1/keo_do.png')}></Image>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => this.hideIma4()} style={styles.mainItem}>
                            <View style={styles.mainImgView}>
                                <Image style={this.getMyStyle4()} source={require('../img/1/keo_do.png')}></Image>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => alert('abc')} style={styles.mainItem}>
                            <View style={styles.mainImgView}>
                                <Image style={styles.mainIma} source={require('../img/1/keo_do.png')}></Image>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>

            </Container>
        );
    }
}


