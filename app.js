var Built = require('built-extension-sdk')

// Initiate application
var app = Built.App('blt81eadcc39745739f')
.setHost("api.built.io")
.setProtocol("https")
.setMasterKey('bltc5aa4d8f4df38a52')

// 574df6c8fb2034b1603d792e8e2922268779c456 - access token
// bltc88f3d42ad8a728c - secret key
// blt_ext_default_test - extension key
// web hook url - https:https://manage.built.io/v1/extensions/blt_ext_default/redeploy?application_api_key=blt0d68e0f590faadf3

var extensionSDK = app.Extension({
	extension_key  : 'blt_ext_default',
	secret_key     : 'swapnil',
	static         : __dirname + '/client',
	routes         : require('./server/routes')
})

return extensionSDK.start(9000)
