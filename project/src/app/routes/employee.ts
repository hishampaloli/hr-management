import express from "express";
import {
  currentTenant,
  requireTenantAuth,
  isHrOrAdmin,
  requireTenantOrUser,
  currentUser,
} from "@hr-management/common";

import { employeeController } from "../../controller";

export = (dependencies: any) => {
  const router = express.Router();
  const { getAllEmployeesController } = employeeController(dependencies);

  router.get(
    "/getAllEmployees",
    currentTenant,
    requireTenantAuth,
    getAllEmployeesController
  );

  return router;
};
