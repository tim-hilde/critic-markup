export const criticRegExp = /(?:({\+\+[^+]*\+\+})|({--[^-]*--})|({~~[^~]*~>[^~]*~~})|({>>[^<]*<<})|({==[^=]*==}))/g;
// 1 -> addition
// 2 -> deletion
// 3 -> substitution
// 4 -> comment
// 5 -> highlight

export const substitutionRegExp = /(?:({~~)([^~]*)(~>)([^~]*)(~~}))/g;
// markup, delete, markup, substitute, markup

export const simpleMarkupRegExp = /(?:({\+\+|{--|{>>|{==)([^\+\-\<\=]*)(\+\+}|--}|<<}|==}))/g;
// 1 -> pre
// 2 -> markup
// 3 -> post