import {Plugin} from 'obsidian';

import {additionRegExp, deletionRegExp, substitutionRegExp, commentRegExp, highlightRegExp} from 'regExps';



export default class CriticMarkup extends Plugin {

	async onload() {
		console.log("loading critic-markup");
		

	}

	onunload() {
		console.log("unloading critic-markup")
	}
}