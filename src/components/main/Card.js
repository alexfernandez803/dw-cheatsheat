import React, { useState, useEffect } from "react";
import CollapsibleInfo from "./CollapsibleInfo";
import Fuse from "fuse.js";

function Card({ title = "", data = [], searchText = "", toggleCollapse }) {
  const [searchResult, setSearchResult] = useState([]);
  useEffect(() => {
    const fuse = new Fuse(data, {
      shouldSort: true,
      threshold: 0.6,
      location: 0,
      distance: 100,
      maxPatternLength: 32,
      minMatchCharLength: 1,
      keys: ["name", "description"],
    });

    const result = fuse.search(searchText);
    if (result.length === 0 && searchText.length === 0) {
      setSearchResult(data);
    } else {
      const rProp = result.map((r) => r.item);
      setSearchResult(rProp);
    }
    return () => {};
  }, [searchText, data]);

  return (
    <section className="flex w-full h-auto px-3 py-2 rounded-m ">
      <div className="w-full bg-white">
        <div className="px-4 py-2">
          <h1>{title}</h1>
        </div>
        <div className="w-full h-full px-2 pb-4">
          {searchResult &&
            searchResult.map((data, index) => (
              <CollapsibleInfo
                title={data.name}
                key={`name-${index}`}
                description={data.description}
                source={data.source}
                output={data.output}
                isGlobalOpen={toggleCollapse}
              />
            ))}
        </div>
      </div>
    </section>
  );
}

export default Card;
