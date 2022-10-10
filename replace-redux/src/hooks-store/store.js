// state를 전역적으로 관리하는 솔루션(리액트와 js만으로)
import { useState } from "react";

let globalState = {};
let listenters = [];
let actions = {};

const useStore = () => {};
