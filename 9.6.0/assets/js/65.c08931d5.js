(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{327:function(t,n,s){"use strict";s.r(n);var a=s(29),e=Object(a.a)({},(function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"replace-cy-then-command"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#replace-cy-then-command"}},[t._v("#")]),t._v(" Replace cy.then command")]),t._v(" "),s("p",[t._v("Many people have a problem with the "),s("a",{attrs:{href:"https://on.cypress.io/then",target:"_blank",rel:"noopener noreferrer"}},[t._v("cy.then"),s("OutboundLink")],1),t._v(" command. It behaves "),s("em",[t._v("almost")]),t._v(" like a promise, causing confusion. Let's replace it with a custom "),s("code",[t._v("cy.later")]),t._v(" command.")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// find and save the reference to the original cy.then command")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// by inspecting the internals of the Cypress.Commands object")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" thenCommand "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Cypress"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Commands"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("_commands"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("then"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fn\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// if anyone tries to use cy.then in the spec code or in a plugin")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// we will get an error")]),t._v("\nCypress"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Commands"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("overwrite")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'then'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("then"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" subject"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" cb")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throw")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Error")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Using cy.then command is disallowed'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nCypress"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Commands"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'later'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" prevSubject"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("subject"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" cb")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// cy.later behaves just like cy.then")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// which we implement by calling the original cy.then command")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("thenCommand")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("subject"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" cb"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\ncy"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("wrap")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Hello'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("later")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cy"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("log"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("later")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("x")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" x "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("should")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'equal'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'HelloHello'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),t._v(" "),s("p",[t._v("Read the blog post "),s("a",{attrs:{href:"https://glebbahmutov.com/blog/replace-and-remove-cy-then-command/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Replace The cy.then Command"),s("OutboundLink")],1),t._v(".")])])}),[],!1,null,null,null);n.default=e.exports}}]);