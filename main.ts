import {Plugin} from 'obsidian';

import {criticRegExp, simpleMarkupRegExp, substitutionRegExp} from 'regExps';

const testString = "Addition {++ ++} Deletion {-- --} Substitution {~~ ~> ~~}Comment {>> <<}Highlight {== ==}{>> <<}";

const citeRegExp =
  /(?<=^|[.;\s-[])(?:(\[)([^[\]@\n\r]*)((?:@[^@\s[\];,'"|]+(?:; *)?)+)([^;[\]]*)(\])|(@[^@\s[\];,'"|]+)(?:( *)(\[)([^[\]]+)(\]))?)/g;

const test = "[@ropohlEthikUndTechnikbewertung1996] sdf [@ropohlEthikUndTechnikbewertung1996; @weberMEESTARModellZur2015]"


export default class CriticMarkup extends Plugin {

	async onload() {
		console.log("loading critic-markup");
		
		let match;

		while ((match = criticRegExp.exec(testString))) {
			for (let i = 1; i <= 5; i++) {
				switch (i) {
					case 1:
					case 2:
					case 4:
					case 5:
						if (match[i]) {
							const simpleMarkup = match[i];
							let m2;
							while ((m2 = simpleMarkupRegExp.exec(simpleMarkup))) {
								// m2[1] -> pre
								// m2[2] -> text
								// m2[3] -> post
							}
						}
						continue;
					case 3:
						if (match[i]) {
							const substitution = match[i];
							let m2;
							while ((m2 = substitutionRegExp.exec(substitution))) {
								// m2[1] -> markup
								// m2[2] -> deletion
								// m2[3] -> markup
								// m2[4] -> substitute
								// m2[5] -> marktup
							}
						}
				}
			}
		}

	}



	onunload() {
		console.log("unloading critic-markup")
	}
}