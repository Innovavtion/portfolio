import styles from "./Stack.module.scss";

import { Button } from "@/components/Elements/Base/Button/Button";

import { StackData } from "./Stack.data";

export default function Stack() {
  return (
    <div id="Stack" className={styles.Stack}>
      <div className={styles.Content}>
        <h2>Stack</h2>
        {StackData.map((item, key) => (
          <div className={styles.StackSection} key={key}>
            <h4>{item.nameSection}</h4>
            <div className={styles.Divider} />
            <div className={styles.Info}>
              {item.listSection.map((itemTool, key) => (
                <Button key={key}>
                  {itemTool.icon}
                  <p>{itemTool.nameTool}</p>
                </Button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
