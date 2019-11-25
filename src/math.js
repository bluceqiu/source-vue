/*
 * @Author: xiaolong.qiu
 * @Date: 2019-11-21 15:30:32
 * @LastEditTime: 2019-11-21 15:30:48
 */
class Math {
    @log
    add(a, b) {
      return a + b;
    }
  }

  function log(target, name, descriptor) {
    var oldValue = descriptor.value;

    descriptor.value = function(...list) {
      console.log(list);
      console.log(`Calling ${name} with`, ...list);
      return oldValue.call(this, ...list);
    };

    return descriptor;
  }

  export default Math