import { IonButton } from "@ionic/vue";

import "./A.less";

// 子组件 jsx  slot 使用方式 参考 https://zhuanlan.zhihu.com/p/231194596
export default {
  props: ['c'],
  render() {
    const A = () => {
      console.log('this.$slots.default()---',this.$slots.default());
      return (
        <div className="component-a">
          <IonButton>jsx里的按钮组件</IonButton>
          <div>{this.c}</div>
          <div>{this.$slots.default()[0]}</div>
        </div>
      );
    };
    return (
      <div>
        {A()}
      </div>
    )
  },
};
