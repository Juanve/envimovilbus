cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/eu.mobilion.ibeacon/www/ibeacon.js",
        "id": "eu.mobilion.ibeacon.ibeacon",
        "clobbers": [
            "ibeacon"
        ]
    },
    {
        "file": "plugins/eu.mobilion.ibeacon/www/region.js",
        "id": "eu.mobilion.ibeacon.region"
    },
    {
        "file": "plugins/eu.mobilion.ibeacon/www/beacon.js",
        "id": "eu.mobilion.ibeacon.beacon"
    },
    {
        "file": "plugins/eu.mobilion.ibeacon/www/helper.js",
        "id": "eu.mobilion.ibeacon.helper"
    },
    {
        "file": "plugins/eu.mobilion.ibeacon/www/defaults.js",
        "id": "eu.mobilion.ibeacon.defaults"
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "eu.mobilion.ibeacon": "0.0.0"
};
// BOTTOM OF METADATA
});