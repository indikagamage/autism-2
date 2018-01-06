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

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sound : 'sound1.png'
            // iconName: "ios-people"
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
                    <View style={styles.header}>
                        <View style={styles.headerLeft}>
                            <TouchableOpacity>
                                <Image style={styles.imagesLeft} source={require('../img/sound1.png')}></Image>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Image style={styles.imagesLeft} source={require('../img/rate.png')}></Image>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Image style={styles.imagesLeft} source={require('../img/fb.png')}></Image>
                            </TouchableOpacity>

                        </View>
                        <View style={styles.headerMain}>
                            <Image style={styles.imagesMain} source={require('../img/name.png')}></Image>
                        </View>
                    </View>

                    <View style={styles.main}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate("Game1")} style={styles.mainItem}>
                            <View style={styles.mainImgView} >
                                <Image style={styles.mainIma1st} source={require('../img/Boling.png')}></Image>
                                <Image style={styles.mainImaHand} source={require('../img/tay.png')}></Image>
                            </View>
                            <View style={styles.mainTextView}>
                                <Text style={styles.mainNameGame}>Nhặt đồ</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => this.props.navigation.navigate("Game2")} style={styles.mainItem}>
                            <View style={styles.mainImgView} >
                                <Image style={styles.mainIma2nd} source={require('../img/2/bong_xanhlam.png')}></Image>
                                <Image style={styles.mainIma2_2nd} source={require('../img/2/bongbay_do.png')}></Image>
                            </View>
                            <View style={styles.mainTextView}>
                                <Text style={styles.mainNameGame}>Chọn màu</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => alert('abc')} style={styles.mainItem}>
                            <View style={styles.mainImgView} >
                                <Image style={styles.mainIma} source={require('../img/Boling.png')}></Image>
                            </View>
                            <View style={styles.mainTextView}>
                                <Text style={styles.mainNameGame}>Nhặt đồ</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => this.props.navigation.navigate("Game4")} style={styles.mainItem}>
                            <View style={styles.mainImgView} >
                                <Image style={styles.mainIma4nd} source={require('../img/4/banh_mau_do.png')}></Image>
                                <Image style={styles.mainIma4_2nd} source={require('../img/4/banh_mau_do.png')}></Image>
                            </View>
                            <View style={styles.mainTextView}>
                                <Text style={styles.mainNameGame}>Giống nhau</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => alert('abc')} style={styles.mainItem}>
                            <View style={styles.mainImgView} >
                                <Image style={styles.mainIma} source={require('../img/Boling.png')}></Image>
                            </View>
                            <View style={styles.mainTextView}>
                                <Text style={styles.mainNameGame}>Nhặt đồ</Text>
                            </View>
                        </TouchableOpacity>
                    </View>


                    <View style={styles.main}>
                        <TouchableOpacity onPress={() => alert('abc')} style={styles.mainItem}>
                            <View style={styles.mainImgView} >
                                <Image style={styles.mainIma} source={require('../img/Boling.png')}></Image>
                            </View>
                            <View style={styles.mainTextView}>
                                <Text style={styles.mainNameGame}>Nhặt đồ</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => alert('abc')} style={styles.mainItem}>
                            <View style={styles.mainImgView} >
                                <Image style={styles.mainIma} source={require('../img/Boling.png')}></Image>
                            </View>
                            <View style={styles.mainTextView}>
                                <Text style={styles.mainNameGame}>Nhặt đồ</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => alert('abc')} style={styles.mainItem}>
                            <View style={styles.mainImgView} >
                                <Image style={styles.mainIma} source={require('../img/Boling.png')}></Image>
                            </View>
                            <View style={styles.mainTextView}>
                                <Text style={styles.mainNameGame}>Nhặt đồ</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => alert('abc')} style={styles.mainItem}>
                            <View style={styles.mainImgView} >
                                <Image style={styles.mainIma} source={require('../img/Boling.png')}></Image>
                            </View>
                            <View style={styles.mainTextView}>
                                <Text style={styles.mainNameGame}>Nhặt đồ</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => alert('abc')} style={styles.mainItem}>
                            <View style={styles.mainImgView} >
                                <Image style={styles.mainIma} source={require('../img/Boling.png')}></Image>
                            </View>
                            <View style={styles.mainTextView}>
                                <Text style={styles.mainNameGame}>Nhặt đồ</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>

            </Container>
        );
    }
}


