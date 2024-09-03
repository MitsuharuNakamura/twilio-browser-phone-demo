// File: /voice-call.js
exports.handler = function(context, event, callback) {
    const twiml = new Twilio.twiml.VoiceResponse();
    const start = twiml.start();
    const url = context.TRANSCRIPTION_CALLBACK_URL
    start.transcription({
        statusCallbackUrl: url,
        name: 'Call center transcription',
        languageCode: 'ja-JP',
        track: 'both_tracks',
        inboundTrackLabel: 'customer',
        outboundTrackLabel: 'agent',
        transcriptionEngine: 'google',
        speechModel: 'telephony',
        profanityFilter: 'true',
        partialResults: 'false',
        enableAutomaticPunctuation: 'true'
    });

    twiml.dial({
        callerId: context.TWILIO_PHONE_NUMBER,
    }).number(event.To);

    callback(null, twiml);
};
