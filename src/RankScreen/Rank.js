import React from "react";
import {AppRegistry, Alert} from "react-native";

import {
    Text,
    Tab, Tabs,
    Container,
    Card,
    CardItem,
    Body,
    Content,
    List,
    ListItem,
    Header,
    Left,
    Right,
    Icon,
    Title,
    Button,
    H1,
} from "native-base";
import DrawNav from './index';
export default class Rank extends React.Component {

    constructor(props) {
        super(props);
        console.log("++++++++++++++++1 Tab education news...");
        console.log(props);
    }

    render() {
        console.log(this.props);
        return (
            <DrawNav/>
        );
    }
}