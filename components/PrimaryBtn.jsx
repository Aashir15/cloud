import Link from "next/link";

export default function Button({
    text,
    icon,
    iconPosition = "right",
    href,
    onClick,
    type = "button",
    className = "",
}) {
    const baseClass = `
        inline-flex items-center justify-center gap-2
        px-6 py-3 rounded-full
        bg-primary hover:bg-secondary text-white
        font-medium
        transition-all duration-300
        cursor-pointer
        hover:scale-105
        active:scale-95
        ${className}
    `;

    const content = (
        <>
            {icon && iconPosition === "left" && icon}
            <span>{text}</span>
            {icon && iconPosition === "right" && icon}
        </>
    );

    // LINK BUTTON
    if (href) {
        return (
            <Link href={href} className={baseClass}>
                {content}
            </Link>
        );
    }

    // NORMAL BUTTON
    return (
        <button
            type={type}
            onClick={onClick}
            className={baseClass}
        >
            {content}
        </button>
    );
}