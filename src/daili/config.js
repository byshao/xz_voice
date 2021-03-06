const isBuild = process.env.NODE_ENV === "production"; //是否为生产环境
const mainConfig = {
    softName: 'AI配音专家',
    softVersion: '1.0.5',
    userFolder: "xz_voice", // 用户文件夹名
    proName: 'voice', //项目名称
    company: '小智软件', //公司名
    nshPath: 'src/daili/nsh/installer.nsh', //自定义nsis脚本路径
    baseURL: "http://localhost:1337", // 服务器地址
    isValid: isBuild ? false : true, //是否激活
    contact: "QQ：525713029", //技术支持
    helpUrl: "", //使用帮助链接
    logoName: 'logo.png', // logo
    icon: 'icon.png', //icon
}

module.exports = mainConfig;
