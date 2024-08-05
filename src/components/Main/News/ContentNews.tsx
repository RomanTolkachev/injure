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
    <div className="first-letter:capitalize">
      <h3 className="mb-3 text-xl font-semibold text-my-main-blue">{header}</h3>
      <span className="text-my-gray-medium">{preview}</span>
    </div>
  );
};
