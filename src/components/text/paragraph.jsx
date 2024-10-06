export default function Paragraph({ label, className }) {
        return (
                <p
                        className={`text-lg font-normal ${className}`}
                >
                        {label}
                </p>
        )
}
