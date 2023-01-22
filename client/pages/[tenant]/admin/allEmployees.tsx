import React from "react";
import AllEmployeesComponent from "../../../components/AdminSideComponents/EmployeesComponents/AllEmployeesComponentMain";
import SubHeader from "../../../components/layout/CommonSubHeader/SubHeader";
import AdminLayout from "../../../components/layout/MainLayout";

const allEmployee = () => {
  return (
    <AdminLayout title="All Employee">
      <SubHeader text="All Emlpoyees" />
      <AllEmployeesComponent type="Employees" />
    </AdminLayout>
  );
};

export default allEmployee;
