cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/eu.mobilion.ibeacon/www/ibeacon.js",
        "id": "eu.mobilion.ibeacon.ibeacon",
        "pluginId": "eu.mobilion.ibeacon",
        "clobbers": [
            "ibeacon"
        ]
    },
    {
        "file": "plugins/eu.mobilion.ibeacon/www/region.js",
        "id": "eu.mobilion.ibeacon.region",
        "pluginId": "eu.mobilion.ibeacon"
    },
    {
        "file": "plugins/eu.mobilion.ibeacon/www/beacon.js",
        "id": "eu.mobilion.ibeacon.beacon",
        "pluginId": "eu.mobilion.ibeacon"
    },
    {
        "file": "plugins/eu.mobilion.ibeacon/www/helper.js",
        "id": "eu.mobilion.ibeacon.helper",
        "pluginId": "eu.mobilion.ibeacon"
    },
    {
        "file": "plugins/eu.mobilion.ibeacon/www/defaults.js",
        "id": "eu.mobilion.ibeacon.defaults",
        "pluginId": "eu.mobilion.ibeacon"
    }
];
module.exports.metadata = 
// TOP OF METADATA
{}
// BOTTOM OF METADATA
});