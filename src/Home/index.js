import React, { Component } from "react";
import { StackNavigator } from "react-navigation";
import Home from "./Home";
import Game1 from "../Game1/Game1.js";
import Game1_2 from "../Game1/Game1_2.js";
import Game1_4 from "../Game1/Game1_4.js";
import Game1_5 from "../Game1/Game1_5.js";
import Game2 from "../game2/Game2";
import Game2_1 from "../game2/Game2_1";
import Game2_2 from "../game2/Game2_2";
import Game2_3 from "../game2/Game2_3";
import Game2_4 from "../game2/Game2_4";
import Game2_5 from "../game2/Game2_5";
import Game2_6 from "../game2/Game2_6";
import Game4 from "../game4/Game4";
import Game4_1 from "../game4/Game4_1";
import Game4_2 from "../game4/Game4_2";
import Game4_3 from "../game4/Game4_3";
import Game4_4 from "../game4/Game4_4";
import Game4_5 from "../game4/Game4_5";
import Game5 from "../Game5/Game5";
import Game5_1 from "../Game5/Game5_1";
import Game5_2 from "../Game5/Game5_2";
import Game5_3 from "../Game5/Game5_3";
import Game5_4 from "../Game5/Game5_4";
import Game6 from "../Game6/Game6";
import Game6_1 from "../Game6/Game6_1";
import Game6_2 from "../Game6/Game6_2";
import Game6_3 from "../Game6/Game6_3";
import Game6_4 from "../Game6/Game6_4";
export default (DrawNav = StackNavigator({
    Home :{ screen: Home },
    Game1: {screen : Game1},
    Game1_2: {screen : Game1_2},
    Game1_4: {screen : Game1_4},
    Game1_5: {screen : Game1_5},
    Game2: {screen : Game2},
    Game2_1: {screen : Game2_1},
    Game2_2: {screen : Game2_2},
    Game2_3: {screen : Game2_3},
    Game2_4: {screen : Game2_4},
    Game2_5: {screen : Game2_5},
    Game2_6: {screen : Game2_6},
    Game4: {screen : Game4},
    Game4_1: {screen : Game4_1},
    Game4_2: {screen : Game4_2},
    Game4_3: {screen : Game4_3},
    Game4_4: {screen : Game4_4},
    Game4_5: {screen : Game4_5},
    Game5: {screen : Game5},
    Game5_1: {screen : Game5_1},
    Game5_2: {screen : Game5_2},
    Game5_3: {screen : Game5_3},
    Game5_4: {screen : Game5_4},
    Game5_4: {screen : Game5_4},
    Game6: {screen : Game6},
    Game6_1: {screen : Game6_1},
    Game6_2: {screen : Game6_2},
    Game6_3: {screen : Game6_3},
    Game6_4: {screen : Game6_4},

}));