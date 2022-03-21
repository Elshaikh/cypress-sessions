/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */
const path = require("path");
const gmail_tester = require("gmail-tester");
module.exports = (on, config) => {
    on("task", {
        log(message) {
            console.log(message);
            return null;
        },
        "gmail:check_inbox": async (args) => {
            return await gmail_tester.check_inbox(
                path.resolve(__dirname, "credentials.json"),
                path.resolve(__dirname, "gmail_token.json"),
                args.options
            );
        },
    });
};