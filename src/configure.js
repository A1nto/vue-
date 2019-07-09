const env = process.env.NODE_ENV;
//默认正式环境地址
const conf = {
    apiHost: 'http://sj.meb.com/api',
};

//开发环境
if (env == 'development') {
    conf.apiHost = 'https://gatedev.meb.com/spread/outside/v1/partner/';
}

//测试环境
if (env == 'staging') {
    conf.apiHost = 'https://gatedev.meb.com/spread/outside/v1/partner/';
}

module.exports = conf