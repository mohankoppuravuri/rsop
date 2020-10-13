let http             = require ('http');
let path             = require ('path');
let express          = require ('express');
let bodyParser       = require ('body-parser');

let mongoose         = require ('./common/db');

var app              = express();
const mongo_url      = 'mongodb://localhost:27017/rsocket?maxPoolSize=10';

/* Add express request logger */
app.use( e_logger({
	format: "HTTP :incoming :status-code :method :url :remote-address",
	excludes : [ 'req' , 'res', 'req-headers', 'res-headers', 'user-agent',
		'body', 'short-body', 'response-hrtime', 'http-version',
		'incoming', 'remote-address', 'method', 'url', 'status-code', 'ip'
	],
	levelFn : function (status) {
		if (status >= 500)
			return 'error';
		if (status >= 400)
			return 'warn';
	},
}));

app.use( bodyParser.json ({ limit: '50mb' }) );
app.use( bodyParser.urlencoded ({ extended: false }) );

app.use('/app', express.static (__dirname + '/react_apps/app/build'), (req, res) => {
	return res.sendFile(path.join(__dirname + '/react_apps/app', 'build', 'index.html'));
});

app.set('port', 7777);
let server = http.createServer(app);
server.listen(7777);

let init = async () => {
	console.log('...');
	await mongoose.init (mongo_url); 
	console.log('Success');
}

init();
