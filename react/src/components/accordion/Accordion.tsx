import { useId, useState } from "react";
import "./Accordion.css";

interface Section {
  value: string;
  title: string;
  contents: string;
}

interface AccordionProps {
  sections: Section[];
}

function getAccordionHeaderId(accordionId: string, value: string) {
  return `${accordionId}-${value}-header`;
}

function getAccordionContentsId(accordionId: string, value: string) {
  return `${accordionId}-${value}-contents`;
}

export default function Accordion(props: AccordionProps) {
  const { sections } = props;

  const [openSections, setOpenSections] = useState<Set<string>>(
    new Set<string>()
  );

  const accordionId = useId();

  const handleToggleSection = (value: string) => {
    const newOpenSections = new Set(openSections);
    if (newOpenSections.has(value)) {
      newOpenSections.delete(value);
    } else {
      newOpenSections.add(value);
    }
    setOpenSections(newOpenSections);
  };

  return (
    <div className="accordion">
      {sections.map(({ value, title, contents }) => {
        const expanded = openSections.has(value);
        const headerId = getAccordionHeaderId(accordionId, value);
        const contentsId = getAccordionContentsId(accordionId, value);
        return (
          <div className="accordion-item">
            <button
              aria-controls={contentsId}
              aria-expanded={expanded}
              id={headerId}
              type="button"
              className="accordion-item-title"
              onClick={() => handleToggleSection(value)}
            >
              {title}
            </button>
            <div
              id={contentsId}
              aria-labelledby={headerId}
              role="region"
              className="accordion-item-contents"
              hidden={!expanded}
            >
              {contents}
            </div>
          </div>
        );
      })}
    </div>
  );
}
