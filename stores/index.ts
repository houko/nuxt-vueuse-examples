import { defineStore } from 'pinia';

// 定义 Options 类型用于 state
interface Options {
    a: number;
    b: number;
    c: number;
}

// 定义 State 类型，明确 state 的结构
interface State {
    options: Options;
}

const wait = (time = 1000) => new Promise<void>((resolve) => setTimeout(resolve, time));

export const useCounterStore = defineStore('counter', {
  // 使用 State 类型来定义 state 的返回类型
  state: (): State => ({
    options: {
      a: 0,
      b: 0,
      c: 0,
    },
  }),
  actions: {
    increment(option: keyof Options) {
      this.options[option]++;
    },
    async delayedIncrement(option: keyof Options, time = 1000) {
      await wait(time);
      this.options[option]++;
    },
  },
  getters: {
    totalClicks(): number {
      // 使用 reduce 方法来计算总点击数，类型已在返回值位置明确
      return Object.values(this.options).reduce((total: number, current: number): number => total + current, 0);
    },
  },
  persist:true
});
