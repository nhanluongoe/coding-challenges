import { KeyboardEventHandler, useId, useState } from "react";
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

  const focusOnSection = (index: number) => {
    document
      .getElementById(getAccordionHeaderId(accordionId, sections[index].value))
      ?.focus();
  };

  const handleA11yKeyPress: KeyboardEventHandler<HTMLDivElement> = (event) => {
    const activeItemValue = document.activeElement?.getAttribute(
      "data-accordion-value"
    );

    if (!activeItemValue) {
      return;
    }

    const activeIndex = sections.findIndex(
      (section) => section.value === activeItemValue
    );
    switch (event.key) {
      case "ArrowDown":
        focusOnSection((activeIndex + 1) % sections.length);
        break;
      case "ArrowUp":
        focusOnSection((activeIndex - 1 + sections.length) % sections.length);
        break;
      case "Home":
        focusOnSection(0);
        break;
      case "End":
        focusOnSection(sections.length - 1);
        break;
      default:
        break;
    }
  };

  return (
    <div className="accordion" onKeyDown={handleA11yKeyPress}>
      {sections.map(({ value, title, contents }) => {
        const expanded = openSections.has(value);
        const headerId = getAccordionHeaderId(accordionId, value);
        const contentsId = getAccordionContentsId(accordionId, value);
        return (
          <div className="accordion-item" key={value}>
            <button
              aria-controls={contentsId}
              aria-expanded={expanded}
              id={headerId}
              type="button"
              className="accordion-item-title"
              data-accordion-value={value}
              onClick={() => handleToggleSection(value)}
            >
              {title}{" "}
              <span
                aria-hidden={true}
                className={[
                  "accordion-icon",
                  expanded && "accordion-icon--rotated",
                ]
                  .filter(Boolean)
                  .join(" ")}
              />
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
