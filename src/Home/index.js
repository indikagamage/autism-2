import React, { Component } from "react";
import { StackNavigator } from "react-navigation";
import Home from "./Home";
import Game1 from "../Game1/Game1.js";
import Game1_2 from "../Game1/Game1_2.js";
import Game2 from "../game2/Game2";
export default (DrawNav = StackNavigator({
    Home :{ screen: Home },
    Game1: {screen : Game1},
    Game1_2: {screen : Game1_2},
    Game2: {screen : Game2}
}));