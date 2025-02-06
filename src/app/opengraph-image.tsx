import { ImageResponse } from "next/og";
import { PROJECT_TITLE, PROJECT_DESCRIPTION } from "~/lib/constants";

export const alt = PROJECT_TITLE;
export const size = {
  width: 600,
  height: 400,
};

export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div tw="h-full w-full flex flex-col justify-center items-center relative bg-gradient-to-b from-blue-600 to-blue-800">
        <h1 tw="text-7xl font-bold text-center text-white mb-4">{PROJECT_TITLE}</h1>
        <h3 tw="text-3xl text-center text-blue-100">{PROJECT_DESCRIPTION}</h3>
      </div>
    ),
    {
      ...size,
    }
  );
}
