import React from "react";
import Detail from "./Detail.js";
import {Container, Header, Content, List, ListItem, Text, Thumbnail, Body,Spinner} from 'native-base';
import styles from './style';

export default class TabSystem extends React.Component {
    static navigationOptions = ({navigation}) => ({
        header: null
    });
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            items: []
        }
    }

    componentDidMount() {
        return fetch('http://beta.luyentap.vn/frontend/web/api/v1/article/system')
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    isLoading: false,
                    items: responseJson.items,
                }, function () {
                });
            })
            .catch((error) => {
                console.error(error);
            });
    }


    render() {
        if(this.state.isLoading){
            return (
                <Spinner color='red' />
            );
        }
        const {navigate} = this.props.navigation;

        return (
            <Container  style={styles.container}>
                <Content>
                    <List dataArray={this.state.items}
                          renderRow={(item) =>
                              <ListItem onPress={() => navigate("Detail",{item})}>
                                  <Thumbnail square size={160} source={{uri: (item.absUrl)}}/>
                                  <Body>
                                  <Text>{item.title}</Text>
                                  <Text note>{item.summary}</Text>
                                  <Text note>{item.published_at}</Text>
                                  </Body>
                              </ListItem>
                          }>
                    </List>
                </Content>
            </Container>
        );
    }
}
