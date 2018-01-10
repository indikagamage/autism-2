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

}));