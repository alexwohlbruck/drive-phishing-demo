const http = require('http');
const path = require('path');
const express = require('express');
const {google} = require('googleapis');
const {OAuth2Client} = require('google-auth-library');

const router = express();
const server = http.createServer(router);

const socketio = require('socket.io');
const io = socketio(server);

// const app = require('./app')(io);

const SCOPES = [
	'https://www.googleapis.com/auth/drive.metadata.readonly',
	'https://www.googleapis.com/auth/userinfo.email',
	'https://www.googleapis.com/auth/plus.login',
	'https://www.googleapis.com/auth/contacts.readonly'
];

const gapiClient = new OAuth2Client(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET,
    process.env.GOOGLE_REDIRECT_URL
);

const googleContacts = google.people('v1');
const googleDrive = google.drive('v3');
const googlePeople = google.plus('v1');

const authUrl = gapiClient.generateAuthUrl({
	access_type: 'offline',
	scope: SCOPES
});

router.use(express.static(path.resolve(__dirname, 'client')));

router.get('/auth', (req, res) => {
	res.redirect(authUrl);
});

router.get('/auth/callback', async (req, res) => {
	setTokens(req.query.code);
	res.redirect('https://docs.google.com/document/d/11ZN7lHHxkC4AFx9A60KBsUF_y0xNtYd2x-qt3jDUskc/edit?usp=sharing');
});

let contacts, drive;

io.on('connect', socket => {
    console.log('client connected');
    
    socket.emit('contacts', contacts);
    socket.emit('drive', drive);
    
    socket.on('sendEmail', ({sender, recipient}) => {
    	// TODO: send email using mailserver
    	console.log('sendEmail', sender, recipient);
    	sendMail({sender, recipient});
    });
});


async function setTokens(code) {
	const {tokens} = await gapiClient.getToken(code);
	console.log(tokens.refresh_token);
	gapiClient.setCredentials(tokens);
	
	getContacts();
	getDriveFiles();
}

async function getContacts() {
	googleContacts.people.connections.list({
        auth: gapiClient,
        resourceName: 'people/me',
        pageSize: 500,
        'requestMask.includeField': ['person.phoneNumbers', 'person.names', 'person.emailAddresses'],
        sortOrder: 'LAST_MODIFIED_ASCENDING'
	}, (err, response) => {
		if (err) console.log(err);
		contacts = response.data;
		io.emit('contacts', response.data);
	});
}

async function getDriveFiles() {
	googleDrive.files.list({
		auth: gapiClient,
		pageSize: 100,
		fields: 'nextPageToken, files(id, name, iconLink, webViewLink, webContentLink)'
	}, (err, response) => {
		if (err) console.log(err);
		drive = response.data;
		io.emit('drive', response.data);
	});
}

const mail = require('./mail');

async function sendMail({sender, recipient}) {
	sender = sender || {
		name: 'Alex Wohlbruck',
		email: 'alexwohlbruck@gmail.com'
	};
	recipient = recipient || {email: 'alexwohlbruck@outlook.com'};
	
	console.log(recipient);
	
	mail({sender, recipient});
}

    
server.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function(){
	const addr = server.address();
	console.log("Server listening at ", addr.address + ":" + addr.port);
});
