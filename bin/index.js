#! /usr/bin/env node
// #! 符号的名称叫 Shebang，用于指定脚本的解释程序
// Node CLI 应用入口文件必须要有这样的文件头
// 如果是Linux 或者 macOS 系统下还需要修改此文件的读写权限为 755
// 具体就是通过 chmod 755 cli.js 实现修改

const inquirer = require("inquirer");
const { program } = require("commander");

program.version(require("../package.json").version);

program
  .command("new [projectName]")
  .alias("n")
  .description("创建项目")
  .action(projectName => {
    createProject(projectName);
  });

const createProject = name => {
  console.log("init ", name);
};

program.parse();
