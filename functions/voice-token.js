// File: /generate-token.js
const AccessToken = require('twilio').jwt.AccessToken;
const VoiceGrant = AccessToken.VoiceGrant;

exports.handler = function(context, event, callback) {
    
    const identity = event.identity || 'defaultUser';
    const voiceGrant = new VoiceGrant({
        outgoingApplicationSid: context.TWIML_APPLICATION_SID,
        incomingAllow: true, // Allow incoming calls
    });

    const token = new AccessToken(
        context.ACCOUNT_SID,
        context.API_KEY,
        context.API_SECRET,
        { identity: identity }
    );

    token.addGrant(voiceGrant);

    const response = {
        token: token.toJwt(),
    };

    callback(null, response);
};
