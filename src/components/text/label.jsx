export default function Label({ label, className }) {
        return (
                <h4
                        className={`text-xl font-medium ${className}`}
                >
                        {label}
                </h4>
        )
}