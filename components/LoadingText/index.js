import { getLoadingText } from "@/lib/utils";
import PageHeading from "../PageHeading";

export default function LoadingText({ type }) {
  return <PageHeading>{getLoadingText(type)}</PageHeading>;
}
