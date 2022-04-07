import Image from "next/image";
import React from "react";

export const Thumbnail = (props: any) => {
  const BASE_URL = "https://image.tmdb.org/t/p/original/";
  return (
    <div className="w-[90%] md:w-[47%] xl:w-[31%] py-5 hover:scale-105 grayscale-[50%] hover:grayscale-0 cursor-pointer">
      <Image
        className="rounded-lg"
        layout="responsive"
        priority
        src={
          `${BASE_URL}${
            props.result.backdrop_path || props.result.poster_path
          }` || `${BASE_URL}${props.result.poster_path}`
        }
        alt={
          `${BASE_URL}${
            props.result.backdrop_path || props.result.poster_path
          }` || `${BASE_URL}${props.result.poster_path}`
        }
        height={1080}
        width={1920}
      />
      <div className="p-2">
        <p className="truncate max-w-md">{props.result.overview}</p>
        <h2 className="text-2xl font-bold">
          {props.result.title || props.result.original_name}
        </h2>
        <p></p>
      </div>
    </div>
  );
};
