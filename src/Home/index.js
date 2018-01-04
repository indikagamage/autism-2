import React, { Component } from "react";
import { StackNavigator } from "react-navigation";
import Home from "./Home";
import Game1 from "../Game1/Game1.js";
import Game1_2 from "../Game1/Game1_2.js";
import Game1_4 from "../Game1/Game1_4.js";
import Game1_5 from "../Game1/Game1_5.js";
import Game2 from "../game2/Game2";
export default (DrawNav = StackNavigator({
    Home :{ screen: Home },
    Game1: {screen : Game1},
    Game1_2: {screen : Game1_2},
    Game1_4: {screen : Game1_4},
    Game1_5: {screen : Game1_5},
    Game2: {screen : Game2}
}));