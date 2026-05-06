import { ImageResponse } from "next/og";
import FaviconIcon from "@/components/icons/FaviconIcon";

export const size = {
  width: 64,
  height: 64,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(<FaviconIcon />, size);
}
