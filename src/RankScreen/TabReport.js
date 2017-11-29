import React from "react";
import {ActivityIndicator, FlatList,Text ,View} from "react-native";
import {Container, Header, Content, List, ListItem, Thumbnail, Body} from 'native-base';

export default class TabReport extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            loading:false,
            data:[],
            page:1,
            refreshing:false
        };
    }
    componentDidMount(){
        this.makeRemoteRequest();
    }
    makeRemoteRequest = () =>{
        const {page} = this.state;
        const url =`http://beta.luyentap.vn/frontend/web/api/v1/rank/report?page=${this.state.page}`;
        this.setState ({loading:true});
        setTimeout(()=>{
            fetch(url)
                .then((res) => res.json())
                .then((res) => {
                    this.setState({
                        loading: false,
                        data:[...this.state.data,...res.items],

                    }, function () {
                        // do something with new state
                    });
                })
                .catch((error) => {
                    console.error(error);
                });
        },2000);


    };
    // handleRefresh = () =>{
    //     this.setState({
    //         page:1,
    //         refreshing:true,
    //     },() => {this.makeRemoteRequest();});
    // };
    handleEnd = () =>{
        if(this.state.page < 4){
            this.setState({
                page : this.state.page +1
            }, () => {
                this.makeRemoteRequest();
            })
        }
    };
    render(){
        return (

            <List>
                <FlatList

                    keyExtractor={(x, i) => i}
                    onEndReached={() => this.handleEnd()}
                    onEndThreshold={0}
                    // onRefresh = {this.handleRefresh}
                    data={this.state.data}
                    renderItem={({item}) =>
                        <ListItem>
                            <Body>
                            <Text>{item.name}</Text>
                            <Text note>Tổng số học sinh: {item.totals}</Text>
                            </Body>


                        </ListItem>}
                />

            </List>


        )
    }
}