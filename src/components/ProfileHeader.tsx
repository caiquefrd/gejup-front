import pogba from '../assets/pp.jpeg'
export default function ProfileHeader(){
    return (<div className="profileHeader">
        <img src={pogba} alt="" className="profilePicture"/>
        <h2 className="username">Pogba</h2>
    </div>)
}