

# 图片文字水印自动生成

## 背景
mac多桌面很赞 
美中不足，不能命名桌面名称，只能桌面1、桌面2

## 解决
在图片上写文字，并设置为各个桌面背景，可以更好区分

## 安装
 * git clone git@github.com:SoulRIver2015/MacDesktopName.git
 * brew install pkg-config cairo pango libpng jpeg giflib
 * npm install
 * vim ~/.bash_profile
添加一行 alias desktop_img="node /...path/MacDesktopName/index.js '[/imgfilepath/test/test.jpg]' '[/distpath/test]' "
 * source ~/.bash_profile

## 使用
 * desktop_img '桌面一'
 * 更换桌面背景图片为生成的文件

## 备注：使用node-canvas
在图片上画图使用 node-canvas 实现 
需要预装一些组件，node-canvas才能使用 
mac的：brew install pkg-config cairo pango libpng jpeg giflib 
详见github: https://github.com/Automattic/node-canvas
