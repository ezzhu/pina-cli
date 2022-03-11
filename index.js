#! /usr/bin/env node
// #! 符号的名称叫 Shebang，用于指定脚本的解释程序
// Node CLI 应用入口文件必须要有这样的文件头
// 如果是Linux 或者 macOS 系统下还需要修改此文件的读写权限为 755
// 具体就是通过 chmod 755 cli.js 实现修改

const inquirer = require("inquirer");
inquirer
  .prompt([
    {
      type: "input", //type： input, number, confirm, list, checkbox ...
      name: "name", // key 名
      message: "Your name", // 提示信息
      default: "pina-cli", // 默认值
    },
  ])
  .then(answers => {
    console.log("answers", answers);
    // Use user feedback for... whatever!!
  })
  .catch(error => {
    if (error.isTtyError) {
      console.log("error1");
      // Prompt couldn't be rendered in the current environment
    } else {
      console.log("error2");
      // Something else went wrong
    }
  });
