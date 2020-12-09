//引入并声明使用
import Vue from "vue";
import VeeValidate from "vee-validate";
import zh_CN from "vee-validate/dist/locale/zh_CN";
// 引入中文message
Vue.use(VeeValidate);

// 本地化信息提示
VeeValidate.Validator.localize("zh_CN", {
  messages: {
    ...zh_CN.messages,
    // 修改内置规则的message
    is: (field) => `${field}必须与密码相同`,
  },
  // 给校验的filed属性映射中文名称
  attributes: {
    admin: "用户",
    password: "密码",
    password2: "确认密码",
    code: "验证码",
    isCheck: "协议",
  },
});
// 自定义的打勾和不打勾的验证
VeeValidate.Validator.extend("agree", {
  validate: (value) => {
    return value;
  },
  getMessage: (field) => field + "必须同意",
});
