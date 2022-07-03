// getElement function
function getElement(selection) {
  const element = document.querySelector(selection);
  //   console.log(element);
  if (element) {
    return element;
  }
  throw new Error(`Please check"${selection}", no such element exists`);
}
// class取代constructor function
class Counter {
  // constructor中直接把constructor function的内容移过来
  constructor(element, value) {
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
    // bind this to all function
    this.increase = this.increase.bind(this);
    this.decrease = this.decrease.bind(this);
    this.reset = this.reset.bind(this);
    this.increaseBtn.addEventListener("click", this.increase);
    this.decreaseBtn.addEventListener("click", this.decrease);
    this.resetBtn.addEventListener("click", this.reset);
  }
  // 之前用prototype创建的method可以直接放在class里
  increase() {
    this.value++;
    this.valueDom.textContent = this.value;
  }
  decrease() {
    this.value--;
    this.valueDom.textContent = this.value;
  }
  reset() {
    this.value = 0;
    this.valueDom.textContent = this.value;
  }
}

const firstCounter = new Counter(getElement(".first-counter"), 100);
const secondCounter = new Counter(getElement(".second-counter"), 200);
