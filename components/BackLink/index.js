import Link from "next/link";
import Button from "../Button";

export default function BackLink() {
  return (
    <Link href={"/"} aria-label="Navigate back to Island Overview page">
      <Button>&larr; back</Button>
    </Link>
  );
}
