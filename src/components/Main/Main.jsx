import Content from "../Content/Content";
import "./Main.scss";

export default function Main() {
  return (
    <div className="mainContent">
      <Content title="Pendente" />
      <Content title="Fazendo" />
      <Content title="Concluido" />
    </div>
  );
}
