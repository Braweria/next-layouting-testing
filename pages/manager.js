import { getContentLayout } from "../components/ContentLayout";
import ManagerLayout from "../components/ManagerLayout";

export function Manager() {
  return (
    <div>
      <ManagerLayout />
    </div>
  );
}

const getManager = (page) =>
  getContentLayout(<Manager>{page}</Manager>, {
    tabs: ["Übersicht", "Liste", "Aufgaben", "Müll"],
  });

export default getManager;
