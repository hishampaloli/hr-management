import React, { useEffect, useState } from "react";
import SearchComp from "../../SegemanticComponents/SearchComp";
import style from "../../../styles/projectPage.module.scss";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { useActions } from "../../../hooks/useAction";
import { AuthState } from "../../../models/tenants";
import { useRouter } from "next/router";

const ApplicationSearchComponent = () => {
  const [search, setSearch] = useState<string>("");
  const { getAllApplication } = useActions();

  const [status, setStatus] = useState<string>("pending");

  const { data }: AuthState = useTypedSelector((state) => state.user);
  const googleData = useTypedSelector((state) => state.googleData);
  const router = useRouter();
  const { tenant } = router.query;

  console.log(googleData);

  const onSumbit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    getAllApplication("", { status, companyName: tenant });
  };

  useEffect(() => {
    if (router.isReady)
      if (data?.data.adminName) {
        getAllApplication("dsf", { status, companyName: tenant });
      } else {
        getAllApplication("df", { status, companyName: tenant });
      }
  }, [status, router.isReady]);

  return (
    <div className={style.projectSearch}>
      <SearchComp
        placeholder="Search Jobs..."
        setClick={onSumbit}
        setKeys={setSearch}
      />
      {data?.data.adminName && (
        <select
          onChange={(e) => {
            setStatus(e.target.value);
          }}
          name="cars"
          id="cars"
        >
          <option value="pending">Pending</option>
          <option value="shortlisted">Short listed</option>
          <option value="rejected">rejected</option>
          <option value="accepted">Accepted</option>
        </select>
      )}
    </div>
  );
};

export default ApplicationSearchComponent;
