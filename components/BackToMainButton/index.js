import Link from "next/link";

export default function BackToMainButton() {
  return (
    <Link
      href={"/"}
      passHref
      legacyBehavior
      aria-label="Navigate back to Island Overview page"
    >
      &larr; to island overview
    </Link>
  );
}
