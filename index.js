var sysArgs = process.argv.splice(2);
var imagePath = sysArgs[0]; // 背景图片路径
var outputPath = sysArgs[1]; // 图片输出路径
var text = sysArgs[2]; // 附加文字

console.log(sysArgs);

var fs = require('fs')
var path = require('path')
var Canvas = require('canvas')

// 读图
var img = new Canvas.Image();
img.src = fs.readFileSync(imagePath);

// 初始化画布
var canvas = new Canvas(img.width, img.height);
var ctx = canvas.getContext('2d');

// 画图
ctx.drawImage(img, 0, 0, img.width, img.height);

// 写字
ctx.font = 'italic bold 200px pfennigFont';
ctx.fillStyle = "#fff";
ctx.fillText(text, 100, 300);

// 保存磁盘
if(!fs.existsSync(outputPath)){
    fs.mkdirSync(outputPath);
}
canvas.createJPEGStream().pipe(fs.createWriteStream(outputPath + '/' + text + '.jpg'));


