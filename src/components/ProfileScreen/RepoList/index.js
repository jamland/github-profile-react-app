import React, { useContext } from "react";

import { AppContext } from "../../../context/App.context.js";
import Loader from "../../Loader";
import RepoListItem from "./RepoListItem";

const RepoList = props => {
  const url = props.match.url.replace(/\/$/, "");
  const { state } = useContext(AppContext);
  const repos = state.repos;

  if (repos.isLoading || !repos.data) return <Loader />;

  if (!repos) return <div>nothing</div>;

  const { data } = repos;
  return (
    <div>
      <h3>{data.length} Repositories</h3>

      <ul style={styles.repoList}>
        {data && data.map(repo => <RepoListItem repo={repo} url={url} />)}
      </ul>
    </div>
  );
};

const styles = {
  repoList: {
    listStyle: "none",
  },
};

export default RepoList;
