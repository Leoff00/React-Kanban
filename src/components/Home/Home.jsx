import "./Home.scss";

import kanban from "../../assets/img/kanban.svg";

export default function Home() {
  return (
    <div className="homeContainer">
      <img className="kanbanIcon" src={kanban} alt="Kanban" />
      <div className="titleContainer">
        <h1 className="homeTitle">React Kanban</h1>
        <h2 className="homeSubTitle">Use the kanban to manage your tasks.</h2>
      </div>
    </div>
  );
}
