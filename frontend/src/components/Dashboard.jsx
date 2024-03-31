import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
import TaskForm from "./TaskForm"

const Dashboard = () => {
    const navigate = useNavigate()
    const { user} = useSelector(state => state.auth)

    useEffect(() => {
        if(!user) {
            navigate('/login')
        }
    }, [user, navigate])
    return (
        <>
            <section className="heading">
                <h1>Welcome</h1>
                <p>TAsks Dashboard</p>
            </section>
            <TaskForm/>
        </>
    )
}

export default Dashboard