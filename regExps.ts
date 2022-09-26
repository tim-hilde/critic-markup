export const additionRegExp = /(?:({\+\+)([^+]*)(\+\+}))/g;
// markup, addition, markup
export const deletionRegExp = /(?:({--)([^-]*)(--}))/g;
// markup, deletion, markup
export const substitutionRegExp = /(?:({~~)([^~]*)(~>)([^~]*)(~~}))/g;
// markup, delete, markup, substitute, marktup
export const commentRegExp = / (?:({>>)([^<]*)(<<)})/g;
// markup, comment, markup
export const highlightRegExp = /(?:({==)([^=]*)(==}))/g;
// marktup, highlight, markup

