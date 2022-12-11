import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Slider from "./Slider";

const Project = () => {
  const [project, setProject] = useState({});
  const { id } = useParams();
  useEffect(() => {
    fetch("/projects.json")
      .then((res) => res.json())
      .then((data) => {
        const result = data.find((p) => p.id == id);
        console.log(result);
        return setProject(result);
      });
  }, [id]);
  return (
    <section>
      <div className="container">
        <div className="shadow my-3 py-2 text-center">
          <h3>Project Details</h3>
        </div>
        <div className="">
          <div className="row">
            <div className="col-md-4">
              <Slider project={project} />
            </div>
            <div className="col-md-8">
              <div className=" mt-4 mt-sm-0">
                <h3>{project.title}</h3>
                <p>{project.details}</p>
                <div className="mt-2">
                  <ul>
                    {project.list?.map((listItem, index) => (
                      <li key={index} className="mb-2">
                        {listItem}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="">
                  <a
                    href={project.live_website}
                    className="mainBtn me-3"
                    target="_blank"
                    rel=" noreferrer"
                  >
                    Live website
                  </a>
                  <a
                    href={project.code_link}
                    className="mainBtn"
                    target="_blank"
                    rel=" noreferrer"
                  >
                    Code Link
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
