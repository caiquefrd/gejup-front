import CountStreak from "./CountStreak"
import ProfileHeader from "./ProfileHeader"
import NavButtons from "./NavButtons"
import ConfigButtons from "./ConfigButtons"

export default function SideBar(){
    return(
        <div className="containerSideBar">
            <ProfileHeader/>
            <CountStreak/>
            <NavButtons/>
            <ConfigButtons/>
        </div>  
    )
}