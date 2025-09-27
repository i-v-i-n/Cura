interface ReportCardProps {
    description: string;
    date: string;
    severity: 'LOW' | 'MILD' | 'SEVERE' | 'EMERGENCY';
}

function ReportCard(props: ReportCardProps) {
    const severityColors: Record<ReportCardProps["severity"], string> = {
        LOW: "bg-green-100 p-1 rounded-md ml-2",
        MILD: "bg-yellow-100 p-1 rounded-md ml-2",
        SEVERE: "bg-red-400 p-1 rounded-md ml-2 text-white",
        EMERGENCY: "bg-red-600 text-white p-1 rounded-md ml-2 text-white"
    };

    return (
        <div className={`rounded-lg p-4 m-4 ${severityColors[props.severity]}`}>
            <h2 className="text-xl font-bold mb-2 font-mono flex items-center">
                [{new Date(props.date).toISOString().split('T')[0]}]
                <span className="bg-black text-white px-1 rounded">
                    {props.severity}
                </span>
            </h2>
            <p className="mb-4">{props.description}</p>
        </div>
    );
}

export default ReportCard;
