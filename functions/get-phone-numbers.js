/*
自分の所持しているTwilio上の電話番号リストを取得する
*/
exports.handler = async function(context, event, callback) {
    const client = context.getTwilioClient();

    try {
        const incomingPhoneNumbers = await client.incomingPhoneNumbers.list();
        const phoneNumbers = incomingPhoneNumbers.map(number => ({
            value: number.phoneNumber,
            label: `${number.friendlyName || '番号'}：${number.phoneNumber}`
        }));

        const response = {
            phoneNumbers: phoneNumbers,
        };

        callback(null, response);
    } catch (error) {
        callback(error);
    }
};
