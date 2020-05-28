import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { AppContext } from "../../../context/App.context.js";
import Loader from "../../Loader";
import Error from "../../Error";
import ForkIcon from "../../SVG/ForkIcon.svg";
import StarIcon from "../../SVG/StarIcon.svg";
import IssueIcon from "../../SVG/IssueIcon.svg";

const RepoDetails = props => {
  const repoId = props.match.params.repoId;
  const { state } = useContext(AppContext);
  const repos = state.repos;
  const profileUrl = `/profiles/${state.searchQuery}/`;

  if (repos.isLoading || !repos.data) return <Loader />;

  const repoDetails = repos.data.find(
    r => r.id.toString() === repoId.toString(),
  );

  if (!repoDetails) return <Error />;

  return (
    <div>
      <Link to={`${profileUrl}`}>
        <h3>← {repos.data?.length} Repositories</h3>
      </Link>

      <div>
        <h4>{repoDetails.name}</h4>
        <a
          href={repoDetails.homepage}
          target="_blank"
          rel="noopener noreferrer"
        >
          {repoDetails.homepage}
        </a>
        <blockquote>
          <p>{repoDetails.description}</p>
        </blockquote>
        {!!repoDetails.language && <p>language: {repoDetails.language}</p>}

        <div className="">
          <div className="row">
            <div className="column">
              <div className="badge" title="Stars">
                <StarIcon width="20" /> {repoDetails.stargazers_count}
              </div>
            </div>
            <div className="column" title="Forks">
              <div className="badge">
                <ForkIcon width="20" /> {repoDetails.forks_count}
              </div>
            </div>
            <div className="column" title="Issues">
              <div className="badge">
                <IssueIcon width="20" />
                {repoDetails.open_issues_count}
              </div>
            </div>
          </div>
        </div>

        <br />

        <small>
          Find more details on repository page: <br />
          <a href="/" target="_blank" rel="noopener noreferrer">
            {repoDetails.html_url}{" "}
          </a>
        </small>
      </div>
    </div>
  );
};

export default RepoDetails;
