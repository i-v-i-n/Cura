import { useEffect, useState } from "react"
import Navbar from "../Components/ui/Navbar"
import ReportCard from "../Components/ui/ReportCard"
import api from "../api/api"

function HistoryPage(){
    const [loading,setLoading]=useState(false)
    const [history,setHistory]=useState([])
    
    useEffect(() => {
        const fetchHistory = async () => {
            setLoading(true)
            const token = localStorage.getItem("token");
            const res = await api.get("/api/user/history", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setHistory(res.data.history)
            console.log(res.data)
            setLoading(false)
        };
        fetchHistory();
    }, []);
    return <>
        <Navbar type="user"/>
        <div className="flex flex-col h-[85dvh] font-outfit p-4">
            <div>
                <p className="text-2xl font-bold">Your Report is Here:</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 overflow-y-auto">
            {loading ? <p>Loading...</p> :
                history.map((report: any, idx: number) => (
                    <ReportCard key={idx} description={report.description} date={report.date} severity={report.severity} />
                ))
            }
            </div>
        </div>
    </>
}
export default HistoryPage