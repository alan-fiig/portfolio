import React, { useState } from "react";

export default function ExperienceList({ description, showMore, showLess }) {
  const [showAll, setShowAll] = useState(false);

  return (
    <>
      <ul className="list-disc list-inside">
        {(showAll ? description : description.slice(0, 3)).map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      {description.length > 3 && (
        <button
          className="flex items-center gap-1 text-[#2afc85] hover:text-[#15c46a] transition-colors"
          type="button"
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? showLess : showMore}
          {showAll ? (
            <i className="fa-solid fa-arrow-up"></i>
          ) : (
            <i class="fa-solid fa-arrow-down"></i>
          )}
        </button>
      )}
    </>
  );
}
