/**
 * 
 */
const properties = {
  constants: {
    frontend: {
    	javascript : {
	      angular: {
	        host: 'localhost',
	        port: 10001
	      },
	      react: {
	        host: 'localhost',
	        port: 10002
	      },
	      vue: {
	        host: 'localhost',
	        port: 10003
	      },
    	},
    },
    backend: {
    	java: {
      	spring_boot: {
          host: 'localhost',
          port: 9997
        },
      },
      javascript: {
      	express: {
          host: 'localhost',
          port: 9999
        },
      },
      ruby: {
      	rails: {
          host: 'localhost',
          port: 9998
        },
      },
    },
    mixed: {
    },
    shared: {
    }
  },
};

module.exports = properties;
