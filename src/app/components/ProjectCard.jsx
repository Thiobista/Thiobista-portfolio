import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
  const hasGit = gitUrl && gitUrl.startsWith("http");
  const hasPreview = previewUrl && previewUrl.startsWith("http");

  return (
    <div className="h-full flex flex-col min-w-0">
      <div
        className="h-40 sm:h-48 md:h-56 lg:h-64 rounded-t-xl relative group bg-cover bg-center"
        style={{ backgroundImage: `url(${imgUrl})` }}
      >
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500">
          {hasGit && (
            <Link
              href={gitUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="h-12 w-12 sm:h-14 sm:w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
            >
              <CodeBracketIcon className="h-8 w-8 sm:h-10 sm:w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white" />
            </Link>
          )}
          {hasPreview && (
            <Link
              href={previewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="h-12 w-12 sm:h-14 sm:w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
            >
              <EyeIcon className="h-8 w-8 sm:h-10 sm:w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white" />
            </Link>
          )}
        </div>
      </div>
      <div className="text-white rounded-b-xl flex-1 bg-[#181818] py-4 sm:py-6 px-3 sm:px-4 border border-t-0 border-[#33353F]">
        <h5 className="text-base sm:text-lg md:text-xl font-semibold mb-2 line-clamp-2">
          {title}
        </h5>
        <p className="text-muted text-sm sm:text-base line-clamp-3 sm:line-clamp-4">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
