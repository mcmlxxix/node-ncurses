/** node.js ncurses library
	mcmlxxix 04/23/16 **/
	
/* working with classes = strict mode */
"use strict";

var ansi = require('node-ansi');
var screenWidth = 24;
var screenHeight = 80;

/* class representing a "window" on a "screen" */
class Window {
	constructor (parent,x,y,width,height,attr) {
		Object.defineProperties(this,{
			"parent":defaultOptions(parent),
			"x":defaultOptions(x),
			"y":defaultOptions(y),
			"width":defaultOptions(width),
			"height":defaultOptions(height),
			"attr":defaultOptions(attr)
		});
	}
}()

/* "screen" class representing the full dimensions of a terminal window */
class Screen(attr) {
	constructor (attr) {
		Object.defineProperties(this,{
			"attr":defaultOptions(attr),
			"windows":defaultOptions({}),
			"stack":defaultOptions([])
		});
	}
	
}

/* static class for rendering */
class Display {
	static render(output,screen) {
		/* todo */
	}
}

/* character class */
class Char {
	constructor(ch,attr) {
		this.ch=ch;
		this.attr=attr;
	}
}

/* screen settings */
class Settings {
	constructor () {
		Object.defineProperties(this,{
			"screenWidth":defaultAccessor(screenWidth,"number"),
			"screenHeight":defaultAccessor(screenHeight,"number")
		});
	}
}

/* default property options */
function defaultData(value) {
	return {
		enumerable:true,
		configurable:false,
		writable:true,
		value:value
	};
}
function defaultAccessor(variable,dataType) {
	return {
		enumerable:true,
		configurable:false,
		get:()=>variable,
		set:(value)=>{
			if(typeof value == dataType)
				variable = value;
			else
				throw "type mismatch: expecting " + dataType;
		}
	};
}

/* exports */
module.exports = {
	
	/* classes */
	Window:Window,
	Screen:Screen,
	Display:Display,
	Char:Char,
	
	/* properties */
	Settings:new Settings(),
	
	/* libraries */
	ansi:ansi
	
};
