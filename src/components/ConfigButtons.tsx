import { useNavigate } from "react-router-dom"

export default function ConfigButtons(){
    const navigate = useNavigate();
    return(
        <div className="configButtons">
            <button>Configurações</button>
            <button className="logout" onClick={() => navigate("/")}>Logout</button>
        </div>
    )
}