import Link from "next/link";
import Button from "../StyledButton";

export default function BackLink() {
  return (
    <Link href={"/"} aria-label="Navigate back to Island Overview page">
      <Button>&larr; back</Button>
    </Link>
  );
}
