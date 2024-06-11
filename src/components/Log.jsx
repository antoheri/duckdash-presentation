export default function Skill(props) {
  return (
    <tr>
      <td>{props.Date}</td>
      <td>{props.Activity}</td>
      <td>{props.Duration} hours</td>
      <td>{props.Description}</td>
      <td>{props.Participants}</td>
    </tr>
  );
}
