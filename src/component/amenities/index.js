import "./index.css";
import Heading from "../heading";
import Box from "../box";
import ListItem from "../list-item";
import pool from "./pool.svg";
import gym from "./gym.svg";
import breakfast from "./breakfast.svg";
import wiFi from "./wi-fi.svg";
import parking from "./parking.svg";
import pets from "./pets.svg";
import airportShuttle from "./airportShuttle.svg";
import conciergeService from "./conciergeService.svg";
import roomService from "./roomService.svg";
import childFriendly from "./childFriendly.svg";

export default function Amenities({ title, children }) {
  return (
    <Box shadow>
      <div className="amenities">
        <Heading border>{title}</Heading>

        <div className={!children.hasPool ? "list-item--disabled" : ""}>
          <ListItem imageSrc={pool}>
            <span>Басейн</span>
          </ListItem>
        </div>
        <div className={!children.hasGym ? "list-item--disabled" : ""}>
          <ListItem imageSrc={gym}>
            <span>Спортивний зал</span>
          </ListItem>
        </div>
        <div
          className={!children.hasFreeBreakfast ? "list-item--disabled" : ""}
        >
          <ListItem imageSrc={breakfast}>
            <span>Безкоштовний сніданок</span>
          </ListItem>
        </div>
        <div className={!children.hasFreeWiFi ? "list-item--disabled" : ""}>
          <ListItem imageSrc={wiFi}>
            <span>Безкоштовний WI-FI</span>
          </ListItem>
        </div>
        <div className={!children.hasParking ? "list-item--disabled" : ""}>
          <ListItem imageSrc={parking}>
            <span>Безкоштовний вуличний паркінг</span>
          </ListItem>
        </div>
        <div className={!children.hasPetsAllowed ? "list-item--disabled" : ""}>
          <ListItem imageSrc={pets}>
            <span>Дозволено розміщення з домашніми тваринами</span>
          </ListItem>
        </div>
        <div
          className={!children.hasAirportShuttle ? "list-item--disabled" : ""}
        >
          <ListItem imageSrc={airportShuttle}>
            <span>Трансфер до/з аеропорту</span>
          </ListItem>
        </div>
        <div
          className={!children.hasConciergeService ? "list-item--disabled" : ""}
        >
          <ListItem imageSrc={conciergeService}>
            <span>Консьєрж-сервіс</span>
          </ListItem>
        </div>
        <div className={!children.hasRoomService ? "list-item--disabled" : ""}>
          <ListItem imageSrc={roomService}>
            <span>Обслуговування номерів</span>
          </ListItem>
        </div>
        <div
          className={!children.hasChildFriendly ? "list-item--disabled" : ""}
        >
          <ListItem imageSrc={childFriendly}>
            <span>Підходить для дітей</span>
          </ListItem>
        </div>
      </div>
    </Box>
  );
}
