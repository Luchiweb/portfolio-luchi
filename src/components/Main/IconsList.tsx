import { iconNames } from "../../helpers/iconsNames";

function IconsList() {
  return (
    <div className="flex items-center opacity-20 gap-6 mr-6">
      {iconNames.map((iconName, index) => (
        <img key={index} src={`/icons/${iconName}`} alt={`${iconName}`} />
      ))}
    </div>
  );
}

export default IconsList;
