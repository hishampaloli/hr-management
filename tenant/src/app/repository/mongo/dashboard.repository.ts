import { schemas } from "../../database/mongo";

const { DashBoard, LandingPage } = schemas;

export = {
  createDashBoardData: async (dashboardData: any) => {
    console.log(dashboardData);

    const mongooseObj = DashBoard.build(dashboardData);
    return await mongooseObj.save();
  },

  editDashBoardData: async (companyName: string, data: string) => {
    console.log(data);
    console.log("????????????????????/");

    let increment: any = { $inc: {} };
    increment.$inc[data] = 1;

    console.log(increment);

    const mongooseObj = await DashBoard.findOneAndUpdate(
      { companyName },
      increment,
      {
        new: true,
        runValidators: true,
      }
    );
    console.log(mongooseObj);

    return mongooseObj;
  },

  getDashBoard: async (companyName: string) => {
    const mongooseObj = await DashBoard.findOne({ companyName });
    return mongooseObj;
  },

  createLandingPage: async (data: any) => {
    const mongooseObj = LandingPage.build(data);
    return await mongooseObj.save();
  },
  editLandingPage: async (
    companyName: string,
    title: string,
    description: string
  ) => {
    const mongooseObj = await LandingPage.findOneAndUpdate(
      { companyName },
      {
        $set: { landingPageTitle: title, landingPageDescription: description },
      },
      { new: true, runValidators: true }
    );
    return mongooseObj;
  },

  getLandingPageData: async (companyName: string) => {
    const mongooseObj = await LandingPage.findOne({ companyName });
    return mongooseObj;
  },
};
