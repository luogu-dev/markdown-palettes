// This config will overwrite that in node_modules.
module.exports = {
    presets: [
        "@vue/babel-preset-app"
    ],
    plugins: [
        "@babel/plugin-proposal-object-rest-spread",
        "lodash"
    ]
}
