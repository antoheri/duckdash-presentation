export default function Skill(props) {
  const image = require(`../../images/skillsImg/${props.image}.png`);
  return (
    <tr>
      <td>{props.skill}</td>
      <td>{props.implementation}</td>
      <td>{props.location}</td>
      <td>
        <img src={image} alt={props.skill} />
      </td>
    </tr>
  );
}
