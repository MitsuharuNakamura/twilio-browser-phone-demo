exports.handler = function(context, event, callback) {
    const correctPassword = context.AUTHENTIOCATION_PASS; // 正しいパスワードを設定

    if (event.password === correctPassword) {
        callback(null, { success: true });
    } else {
        callback(null, { success: false });
    }
};