import ArrayStack from "./02_实现栈结构Stack";

function decimalToBinary(decimal: number) {
  //1.创建一个栈，用于存放余数
  const stack = new ArrayStack<number>();
  // while(不确定次数，只知道循环的结束条件)
  // for(知道循环的次数时)
  while (decimal > 0) {
    const result = decimal % 2;
    stack.push(result);
    decimal = Math.floor(decimal / 2);
  }
  let binary = "";
  //  3.所有余数都已经放入stack中，以此依次取出
  while (!stack.isEmpty()) {
    binary += stack.pop();
  }
  return binary;
}
console.log(decimalToBinary(35));

export {};
