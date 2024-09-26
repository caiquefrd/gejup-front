import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function NavButtons(){
    const navigate = useNavigate();

    return(
        <div className="buttonCollections">
            <button onClick={() => navigate('/')} className="active">Home</button>
            <button onClick={() => navigate('/metas')}>Metas</button>
            <button>Badges</button>
        </div>
    )
}