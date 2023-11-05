import { Fragment } from "react";
import "./index.css";
import Heading from "../heading";
import Box from "../box";
import ListItem from "../list-item";

export default function Attractions({ title, list }) {
  return (
    <Box shadow>
      <div className="property-details">
        <Heading border>{title}</Heading>

        {list.map(({ id, ...rest }) => (
          <Fragment key={id}>
            <Item {...rest} />
          </Fragment>
        ))}
      </div>
    </Box>
  );
}

function Item({ name, link }) {
  return (
    <a href={link} className="link">
      <ListItem>
        <span>{name}</span>
      </ListItem>
    </a>
  );
}

// nearbyAttractions: [
//   {
//     id: 453,
//     name: "Crystal Clear Beach",
//     link: "www.test.com",
//   },
//   {
//     id: 741,
//     name: "Tropical Rainforest Hiking Trails",
//     link: "www.test.com",
//   },
//   {
//     id: 422,
//     name: "Island Waterfalls",
//     link: "www.test.com",
//   },
//   {
//     id: 876,
//     name: "Cultural Village Tours",
//     link: "www.test.com",
//   },
// ],
// };
