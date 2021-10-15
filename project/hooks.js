const DBUtils = require('../framework/utils/dbUtils');

after(async () => {
    await DBUtils.endConnection();
});