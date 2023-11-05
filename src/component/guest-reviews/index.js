import { Fragment } from "react";
import "./index.css";
import Heading from "../heading";
import Box from "../box";

export default function GuestReviews({ list }) {
  return (
    <div className="guest__block">
      <Heading>Відгуки клієнтів</Heading>

      <div className="guest__list">
        {list.map(({ id, ...rest }) => (
          <Fragment key={id}>
            <Item {...rest} />
          </Fragment>
        ))}
      </div>
    </div>
  );
}

function Item({ guestName, rating, review }) {
  return (
    <Box className="guest">
      <div className="guest__title">
        <span className="guest__name">{guestName}</span>
        <span className="guest__rating">Рейтинг: {rating}</span>
      </div>
      <span className="guest__review">{review}</span>
    </Box>
  );
}
