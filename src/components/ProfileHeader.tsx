import React from "react";
import pogba from "../assets/user.png";
 
export default function ProfileHeader() {
    // Recupera o nome do usuário do localStorage
    const userName = localStorage.getItem("userName");
 
    return (
        <div className="profileHeader">
            <img src={pogba} alt="Profile" className="profilePicture" />
            <h2 className="username">{userName || "Usuário"}</h2>  {/* Exibe o nome ou "Usuário" se não encontrar */}
        </div>
    );
}