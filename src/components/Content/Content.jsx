import "./Content.scss";

export default function Content(props) {
  return (
    <div className="contentContainer">
      <span className="contentTitle">{props.title}</span>

      <div></div>
    </div>
  );
}
