import { Link } from "react-router-dom";

interface Component {
  id: string;
  name: string;
}

const COMPONENTS: Component[] = [
  {
    id: "accordion",
    name: "Accordion",
  },
  {
    id: "clock",
    name: "Clock",
  },
  {
    id: "digital-clock",
    name: "Digital Clock",
  },
  {
    id: "like-button",
    name: "Like Button",
  },
];

export default function Root() {
  return (
    <>
      <div>
        <ul>
          {COMPONENTS.map((component) => (
            <li key={component.id}>
              <Link to={`/${component.id}`}>{component.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
