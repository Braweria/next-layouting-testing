import getManager from "../pages/manager";
import { useTabContext } from "./ContentLayout";
import { Lists } from "./Lists";
import { Overview } from "./Overview";
import { Tasks } from "./Tasks";
import { Trash } from "./Trash";

const ManagerLayout = () => {
  const { activeTab } = useTabContext();

  switch (activeTab) {
    case "Übersicht":
      return <Overview />;
    case "Aufgaben":
      return <Tasks />;
    case "Müll":
      return <Trash />;
    case "Liste":
      return <Lists />;
    default:
      return <p>Nichts</p>;
  }
};

// const ManagerContent = () => getManager(<ManagerLayout />);
// export default ManagerContent;
export default ManagerLayout;
