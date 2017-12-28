import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    view:{
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
    },
    images: {
        flex: 1,
        width: null,
    },
    header: {
        flex: 1,
        flexDirection: "row",
    },
    headerLeft: {
        flex: 1,
        flexDirection: "row",
    },

    headerMain: {
        flex: 2
    },
    imagesLeft: {
        width: 40,
        height: 40,
        marginTop: 10,
        marginLeft: 20
    },
    imagesMain: {
        flex: 1,
        width: 200,
        height: 200,
        resizeMode: 'contain',
        // marginTop:-200
    },
    main: {
        flex: 1,
        flexDirection: "row",
        paddingLeft:30,
        paddingRight:30

    },
    mainItem: {
        flex: 5,
        width: '100%',
        height: 100,
        borderColor: '#E24816',
        borderWidth: 3,
        margin: 10,
        position:'relative',
        borderRadius: 10,
        justifyContent: 'center',
        alignSelf: 'stretch',
        // paddingBottom:20
    },
    mainText: {
        bottom: 0,
        right: 0,
    },
    mainImgView: {
        position:'absolute',
        paddingBottom:'35%'
    },

    mainIma: {
        width:105,
        height:95,
        resizeMode: 'contain',
    },
    mainNameGame: {
        backgroundColor:'#E24816',
        color:'white',
        textAlign:'center',
    },
    mainTextView: {
        bottom:0,
        width:'100%',
        position:'absolute',
    },
    mainImaHand: {
        width:65,
        height:55,
        resizeMode: 'contain',
        position:'absolute',
        left:'30%',
        top:'30%',
        transform: [{ rotate: '325deg'}]
    },
    mainIma1st: {
        width:105,
        height:95,
        resizeMode: 'contain',
        position:'relative',
        right:'15%'
    },
    aadimagesmages: {},
});
export default styles;