import React from "react";
import "../styles/project-card-styles.css";

export default function ProjectCard(props) {
    return (
        <div className="column" class="card">
            <img src={require(`../images/${props.source}.png`)} class="thumbnail"/>
            <h2 class="projectTitle">{props.title}</h2>
            <p className="projectDesc">{props.desc}</p>
            <div class="projectLinks">
                <a href={props.githubLink} target="_blank">GitHub Repo</a>
                <a href={props.demoLink} target="_blank">Demo</a>
            </div>
        </div>
    )
  }