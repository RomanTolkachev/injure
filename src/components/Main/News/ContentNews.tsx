import { FunctionComponent } from "react";

interface IContentNewsProps {
  header: string;
  preview: string;
}

export const ContentNews: FunctionComponent<IContentNewsProps> = ({
  header,
  preview,
}) => {
  return (
    <div>
      <h3 className="mb-4 text-2xl font-semibold text-my-main-blue first-letter:capitalize">
        {header}
      </h3>
      <span className="text-my-deep-light first-letter:capitalize">
        {preview}
      </span>
    </div>
  );
};
