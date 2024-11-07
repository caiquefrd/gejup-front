import { useNavigate } from 'react-router-dom';

export default function NavButtons(){
    const navigate = useNavigate();

    return(
        <div className="buttonCollections">
            <button onClick={() => navigate('/home')} className="active">Home</button>
            <button onClick={() => navigate('/metas')}>Metas</button>
            <button onClick={() => navigate('/acompanhamento')}>Acompanhamento</button>
            <button>Badges</button>
        </div>
    )
}