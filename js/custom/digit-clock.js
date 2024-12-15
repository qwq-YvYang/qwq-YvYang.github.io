// 创建一个包含10个元素的数组，每个元素的值为索引  
var _time10 = Array.from(Array(10)).map((n, i) => i);
// 创建一个包含前6个元素的数组，作为时间的小时和分钟  
var _time6 = _time10.slice(0, 6);
// 创建一个包含前3个元素的数组，作为时间的秒钟  
var _time3 = _time10.slice(0, 3);
// 创建一个包含3个子数组的二维数组，用于表示时钟的结构  
var _Structure = [
    [_time3, _time10],
    [_time6, _time10],
    [_time6, _time10]
];
// 创建一个div元素作为时钟的容器，并设置id为'clock'  
var clock = document.createElement('div');
clock.id = 'clock';
// 将时钟容器添加到元素中元素中  
document.getElementById("card-digit-clock").appendChild(clock);
// 创建一个数组用于存储每个数字组的div元素  
var digitGroups = [];
// 请求动画帧并调用update函数  
requestAnimationFrame(update);
// 遍历_Structure数组  
_Structure.forEach(digits => {
    // 创建一个div元素作为数字组的容器，并添加类名'digit-group'  
    var digitGroup = document.createElement('div');
    digitGroup.classList.add('digit-group');
    // 将数字组的容器添加到时钟容器中，并将其添加到digitGroups数组中  
    clock.appendChild(digitGroup);
    digitGroups.push(digitGroup);
    // 遍历digits数组  
    digits.forEach(digitList => {
        // 创建一个div元素作为数字的容器，并添加类名'digit'  
        var digit = document.createElement('div');
        digit.classList.add('digit');
        // 遍历digitList数组  
        digitList.forEach(n => {
            // 创建一个div元素作为数字的子元素，并添加类名'digit-number'，设置文本内容为n  
            var ele = document.createElement('div');
            ele.classList.add('digit-number');
            ele.innerText = n;
            // 将数字的子元素添加到数字的容器中  
            digit.appendChild(ele);
        });
        // 将数字的容器添加到数字组的容器中  
        digitGroup.appendChild(digit);
    });
});
// 定义update函数  
function update() {
    // 请求动画帧并调用update函数  
    requestAnimationFrame(update);
    // 创建一个Date对象表示当前时间  
    var date = new Date();
    // 获取当前时间的小时、分钟和秒钟，并将它们转换为两位数的字符串数组  
    var time = [date.getHours(), date.getMinutes(), date.getSeconds()].
        map(n => `0${n}`.slice(-2).split('').map(e => +e)).
        reduce((p, n) => p.concat(n), []);
    // 遍历time数组  
    time.forEach((n, i) => {
        var digit = digitGroups[Math.floor(i * 0.5)].children[i % 2].children;
        // 遍历数字组的子元素  
        Array.from(digit).forEach((e, i2) => e.classList[i2 === n ? 'add' : 'remove']('bright'));
    });
}