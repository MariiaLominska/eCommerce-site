import help from "../images/icons/help.svg";

export default function Footer() {
  return (
    <div className="sidebar-help">
      <a className="help" href="#">
        <img className="help-icon" src={help} alt="" />
        Help Center
      </a>
    </div>
  );
}
