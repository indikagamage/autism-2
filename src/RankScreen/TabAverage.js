import React from "react";
import {Container, Header , Content, List, ListItem, Text,
    Spinner , Thumbnail, Body, FlatList, TouchableOpacity,
    InputGroup, Icon, Input, Button, Item, Left, Right, Title} from 'native-base';
import DetailProfile from './DetailProfile.js';
import styles from './StylesDetail';
export default class TabAverage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            items: []
        }
    }
    // static navigationOptions = {
    //     header: null
    // }

    componentDidMount() {
        return fetch('http://beta.luyentap.vn/frontend/web/api/v1/rank/index?expand=profile')
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    isLoading: false,
                    items: responseJson.items,
                }, function () {
                    // do something with new state
                });
            })
            .catch((error) => {
                console.error(error);
            });
    }

    render() {
        if(this.state.isLoading){
            return (
                <Spinner color='#2B60AC' />
            );
        }
        return (
            <Container style={styles.container} >
                <Content>

                    <List dataArray={this.state.items}
                          renderRow={(item) =>
                              <ListItem
                                  onPress={() => this.props.navigation.navigate("DetailProfile",{item})}>
                                  <Thumbnail style={styles.image} source={{uri: (item.absUrl)}}/>
                                  <Body>
                                  <Text>{item.profile.lastname} {item.profile.middlename} {item.profile.firstname}</Text>
                                  <Text note>Tổng điểm: {item.score}</Text>
                                  <Text note>Lượt làm đề: {item.count}</Text>
                                  </Body>
                              </ListItem>
                          }>
                    </List>
                </Content>
            </Container>
        );
    }
}

TabAverage.navigationOptions = ({ navigation }) => ({
    title: 'Điểm TB',
    header: (
        <Header>
            <Left>
                <Button transparent onPress={() => navigation.navigate("DrawerOpen")}>
                    <Icon name="menu" />
                </Button>
            </Left>
            <Body>
            <Title>Bảng xếp hạng</Title>
            </Body>
            <Right />
        </Header>
    )
});
