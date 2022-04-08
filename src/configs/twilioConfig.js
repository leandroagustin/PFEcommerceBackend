const twilio = require("twilio");

//Configuracion TWILIO
const accountSid = `${process.env.TWILIO_SID}`;
const authToken = `${process.env.TWILIO_TOKEN}`;

// const accountSid = `ACe51d38b8f8f37b623fad3470cb7fda17`;
// const authToken = `57573cbefa0ae3719732c53000834c6c`;

const twilioClient = twilio(accountSid, authToken);

module.exports = twilioClient;
