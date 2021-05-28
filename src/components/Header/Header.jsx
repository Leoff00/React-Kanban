import "./Header.scss";

import kanban from "../../assets/img/kanban.svg";

export default function Header() {
  return (
    <header className="headerContainer">
      <img className="kanbanIcon" src={kanban} alt="Kanban" />
      <div className="titleContainer">
        <h1 className="headerTitle">React Kanban</h1>
        <h2 className="headerSubTitle">Use the kanban to manage your tasks.</h2>
      </div>
    </header>
  );
}
