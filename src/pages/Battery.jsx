import { useEffect, useState } from "react";


const Battery = () => {
    const [charging,setCharging] = useState(false)
    const [level,setLevel] = useState(100)
    const [chargingTime,setChargingTime] = useState(0)
    const [dischargingTime,setDischargingTime] = useState(0)
    const [chargingchange,setChargingchange] = useState("")
    const [levelchange,setLevelchange] = useState("")

    useEffect(() => {
        navigator.getBattery().then((battery)=>{
            battery.onchargingchange = () => {
                setChargingchange(charging === true ?"Chưa cắm sạc":"Đã cấm sạc")
            };
            battery.onlevelchange = () => {
                setLevelchange(`Pin đang thay đổi : ${battery.level * 100}%`)
            };
            setCharging(battery.charging === false ? "Không" : "Có")
            setLevel(battery.level * 100)
            setChargingTime(battery.charging === false? "Hiện bạn không cấm sạc": `${battery.chargingTime} giây | ${(battery.chargingTime/60).toFixed(2)} phút | ${(battery.chargingTime/60/60).toFixed(2)} giờ`)
            setDischargingTime(battery.dischargingTime)
        })
    }, []);

    return (
        <div className="wrapper">
            <h1>Đang sạc ? {charging}</h1>
            <h1>Mức pin : {level}%</h1>
            <h1>Thời gian sạc đầy pin : {chargingTime}</h1>
            <h1>Thời gian hết pin : {dischargingTime} giây | {(dischargingTime/60).toFixed(2)} phút | {(dischargingTime/60/60).toFixed(2)} giờ</h1>
            <h1>{chargingchange}</h1>
            <h1>{levelchange}</h1>
        </div>
     );
}
 
export default Battery;