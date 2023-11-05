import "./index.css";
import Heading from "../heading";
import Box from "../box";
import ListItem from "../list-item";

export default function AddProperties({ title, children }) {
  return (
    <Box shadow>
      <div className="property-details">
        <Heading border>{title}</Heading>

        <ListItem title="Правила дому">
          <span>{children.house_rules}</span>
        </ListItem>
        <ListItem title="Політика скасування">
          <span>{children.cancellation_policy}</span>
        </ListItem>
        <ListItem title="Місцевий транспорт">
          <span>{children.local_transportation}</span>
        </ListItem>
        <ListItem title="Мови хоста">
          <span>{children.host_languages.join(", ")}</span>
        </ListItem>
        <ListItem title="Спеціальні пропозиції:">
          <span>{children.special_offers}</span>
        </ListItem>
        <ListItem title="Інструкції щодо реєстрації">
          <span>{children.check_in_instructions}</span>
        </ListItem>
      </div>
    </Box>
  );
}
