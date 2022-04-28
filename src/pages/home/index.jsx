import { Outlet } from "react-router-dom";
import { useState } from "react";
//components
import Navigation from "../../components/navigation";
import Card from "../../components/card";
//pages
import Creation from "./siderPages/creation";
import AdvancedBtns from "./siderPages/advancedBtns";
import SelfFuncs from "./siderPages/selfFuncs";
import TabPages from "./tabPages";

export default function Home(params){
    const [hide,setHide] = useState(true);
    const handleChange = (isHide) => {
        setHide(isHide);
    }
    return <div>
        <Navigation className=" sticky top-0 " hide={hide} />
        <div className=" mx-auto px-20 max-w-7xl w-320 flex m-2">
            <Card className="w-2/3">
                <TabPages onChange={handleChange} />
            </Card>
            <div className=" w-1/3">
                <Card>
                    <Creation />
                </Card>
                <Card>
                    <AdvancedBtns />
                </Card>
                <Card>
                    <SelfFuncs />
                </Card>
            </div>
        </div>
    </div>
}