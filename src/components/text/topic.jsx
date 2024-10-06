export default function Topic({ label, className }) {
        return (
                <h1
                        className={`text-6xl font-bold ${className}`}
                >
                        {label}
                </h1>
        )
}
