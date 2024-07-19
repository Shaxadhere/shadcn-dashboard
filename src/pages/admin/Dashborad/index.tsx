import Feedback from "./Feedback";
import FormComponents from "./FormComponents";
import Modals from "./Modals";
import Popovers from "./Popovers";
import Sections from "./Sections";
import TableComponents from "./TableComponents";
import TabsComponents from "./Tabs";

const Dashboard = () => {
  return (
    <div className="p-[30px]">
      <FormComponents />
      <TableComponents />
      <Feedback />
      <Popovers />
      <Modals />
      <Sections />
      <TabsComponents />
    </div>
  );
};

export default Dashboard;
