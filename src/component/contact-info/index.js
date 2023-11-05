import "./index.css";

export default function ContactInfo({ title, children }) {
  return (
    <div className="contact-info">
      <div className="contact-info__title">
        <img src={children.image} alt={children.name} className="photo" />
        <div className="title">
          <h2 className="title__text">
            {title} - {children.name}
          </h2>

          <div className="title__sub-block">
            <span className="title__sub-value">{children.phone}</span>
            <span className="title__sub-value">{children.response_time}</span>
            <span className="title__sub-value">
              {children.response_rate}% відсотків швидкості відгуку
            </span>
          </div>
        </div>
      </div>
      <p className="contact-info__text">{children.info}</p>
    </div>
  );
}
