
module.exports = function (api) {
    api.cache(true);
    return {
        presets: ['babel-preset-expo'],
        plugins: [
            ["module:react-native-dotenv", {
                "moduleName": "@env"
            }],
            "@babel/plugin-proposal-export-namespace-from",
            "react-native-reanimated/plugin",
        ],
    };
};
