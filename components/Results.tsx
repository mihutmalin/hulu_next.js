import React from "react";
import { Thumbnail } from "./Thumbnail";

interface ResultsProps {
  results: any;
}

export const Results = (props: ResultsProps) => {
  return (
    <div className="flex flex-wrap justify-evenly">
      {props.results.map((result: any) => (
        <Thumbnail key={result.id} result={result} />
      ))}
    </div>
  );
};
