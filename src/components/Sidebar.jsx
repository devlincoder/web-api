import { Link } from "react-router-dom";
import "./Sidebar.scss"
const Sidebar = () => {
    const list = [
        {path:"/",name:"Home"},
        {path:"/battery",name:"Battery"},
        {path:"/broadcastchannel",name:"Broadcast"},
    ]
    return ( 
        <div className="sidebar">
            {list.map((x,index)=>{
                return(
                    <Link className={x.path===window.location.pathname?"active":""} key={index} to={x.path}>{x.name}</Link>
                )
            })}
        </div>
     );
}
 
export default Sidebar;