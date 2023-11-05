import "./index.css";
import Heading from "../heading";
import Box from "../box";
import ListItem from "../list-item";
import guests from "./guests.svg";
import bedrooms from "./bedrooms.svg";
import beds from "./beds.svg";
import baths from "./baths.svg";

export default function PropertyDetails({ title, children }) {
  return (
    <Box shadow>
      <div className="property-details">
        <Heading border>{title}</Heading>

        <ListItem imageSrc={guests}>
          <span>{children.guests} гості</span>
        </ListItem>
        <ListItem imageSrc={bedrooms}>
          <span>{children.bedrooms} спальня</span>
        </ListItem>
        <ListItem imageSrc={beds}>
          <span>{children.beds} ліжко</span>
        </ListItem>
        <ListItem imageSrc={baths}>
          <span>{children.baths} ванна кімната</span>
        </ListItem>
      </div>
    </Box>
  );
}
