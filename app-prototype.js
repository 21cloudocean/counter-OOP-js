// getElement function
function getElement(selection) {
  const element = document.querySelector(selection);
  //   console.log(element);
  if (element) {
    return element;
  }
  throw new Error(`Please check"${selection}", no such element exists`);
}

// Counter 测试
// function Counter(element, value) {
//   console.log(element, value);
// }

// Counter function用来选择counter并设定初始值，并创建按钮
// 这样只需要指定不同的counter，就可以给按钮添加效果。
function Counter(element, value) {
  this.counter = element;
  this.value = value;
  //   选择三个按钮-select elementss
  this.resetBtn = element.querySelector(".reset");
  this.increaseBtn = element.querySelector(".increase");
  this.decreaseBtn = element.querySelector(".decrease");
  //   console.log(this.resetBtn);
  // 选择counter显示数字的element
  this.valueDom = element.querySelector(".value");
  //   将数字设为value这个参数，作为初始值。
  this.valueDom.textContent = this.value;
  //点击按钮后invoke increase，this指向的是button
  // //方法1：直接使用bind让this指向counter
  // this.increaseBtn.addEventListener("click", this.increase.bind(this));
  // 方法2：bind this to all function
  this.increase = this.increase.bind(this);
  this.decrease = this.decrease.bind(this);
  this.reset = this.reset.bind(this);
  this.increaseBtn.addEventListener("click", this.increase);
  this.decreaseBtn.addEventListener("click", this.decrease);
  this.resetBtn.addEventListener("click", this.reset);
}
// 给按钮加function：用prototype，这样每个counter都会有同样的method。
// 直接在counter invoke method没有问题。
Counter.prototype.increase = function () {
  this.value++;
  this.valueDom.textContent = this.value;
};
Counter.prototype.decrease = function () {
  this.value--;
  this.valueDom.textContent = this.value;
};
Counter.prototype.reset = function () {
  this.value = 0;
  this.valueDom.textContent = this.value;
};

const firstCounter = new Counter(getElement(".first-counter"), 100);
const secondCounter = new Counter(getElement(".second-counter"), 200);

// 直接在counter使用increase this指向的是counter
firstCounter.increase();
secondCounter.reset();
