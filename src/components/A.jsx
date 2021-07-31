import { IonButton } from "@ionic/vue";

import './A.less';

const A = (props) => {
  return (
    <div className="component-a">
      <IonButton>jsx里的按钮组件</IonButton>
      {props.c}
    </div>
  );
};

export default A;
