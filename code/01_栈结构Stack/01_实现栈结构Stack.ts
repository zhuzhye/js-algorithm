// 封装一个栈

class ArrayStack<T = any> {
  //定义一个数组，用于储存元素
  private data: T[] = [];
  //实现栈中相关的操作方法
  //push方法：将一个元素压入栈中
  push(element: T): void {
    this.data.push(element);
  }
  //pop方法：将栈顶的元素弹出栈（返回出去，并且栈顶去除）
  pop(): T | undefined {
    return this.data.pop();
  }
  //peek方法：看一眼栈顶元素，不进行操作
  peek(): T | undefined {
    return this.data[this.data.length - 1];
  }
  //isEmpty：判断栈是否为空
  isEmpty(): boolean {
    return this.data.length === 0;
  }
  //size：返回栈的数据个数
  size(): number {
    return this.data.length;
  }
}

// 创建Stack的实例

const stack1 = new ArrayStack<string>();
stack1.push("aaa");
stack1.push("bbb");
stack1.push("ccc");

console.log(stack1.peek());
console.log(stack1.pop());
console.log(stack1.pop());
console.log(stack1.pop());

console.log(stack1.isEmpty());
console.log(stack1.size());
export {};
