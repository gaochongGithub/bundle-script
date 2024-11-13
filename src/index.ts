import { Buffer } from 'buffer';
import * as PIXI from "pixi.js";
import { Spine } from "pixi-spine";
window.Buffer = Buffer;


declare global {
  interface Window {
    PIXI: any;
    Spine: any;
  }
}

window.PIXI = PIXI;
window.Spine = Spine;