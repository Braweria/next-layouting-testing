import { createContext, useContext, useState } from "react";

export const TabContext = createContext();

export default function ContentLayout(props) {
  const [activeTab, setTab] = useState(props.tabs[0]);

  const handleTabClick = (tab) => {
    setTab(tab);
  };

  const isActive = (tab) => tab === activeTab;

  const styles = (active) =>
    active
      ? { backgroundColor: "orange", padding: 10 }
      : { backgroundCOlor: "grey", padding: 10 };

  return (
    <div>
      <ul>
        {props.tabs.map((tab, index) => {
          {
            /* isActive(tab); */
          }
          return (
            <li
              key={index}
              onClick={() => handleTabClick(tab)}
              style={styles(isActive(tab))}
            >
              {tab}
            </li>
          );
        })}
      </ul>
      <TabContext.Provider value={{ activeTab }}>
        <div>{props.children}</div>
      </TabContext.Provider>
    </div>
  );
}

export const getContentLayout = (page, props) => (
  <ContentLayout tabs={props.tabs}>{page}</ContentLayout>
);

export function useTabContext() {
  const context = useContext(TabContext);
  return context;
}
