import { getContentLayout } from "../components/ContentLayout";
import ManagerLayout from "../components/ManagerLayout";

export default function Manager() {
  return (
    <div>
      <ManagerLayout />
    </div>
  );
}

Manager.getLayout = (page) =>
  getContentLayout(<Manager>{page}</Manager>, {
    tabs: ["Übersicht", "Liste", "Aufgaben", "Müll"],
  });

// export default getManager;
