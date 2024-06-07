import { Mail } from "react-feather";
function InfoContact(props) {
  const { Icon, children } = props;
  return (
    <span className="flex gap-2 items-end font-REM font-light">
      <Icon strokeWidth={1} size={20} />
      {children}
    </span>
  );
}

export default InfoContact;
