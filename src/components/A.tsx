import Link from "next/link";

type Props = {
    href: string
    text: string
};
export default function A ({href, text}: Props) {
    return (
        <Link href={href}>{text}</Link>
    );
};