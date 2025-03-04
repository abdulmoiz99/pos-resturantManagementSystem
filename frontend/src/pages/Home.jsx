import React from "react";
import BottomNav from "../components/shared/BottomNav";
import Greetings from "../components/Home/Greetings";
import Minicard from "../components/Home/Minicard";
import { BsCashCoin } from "react-icons/bs";
import { GrInProgress } from "react-icons/gr";
import RecentOrder from "../components/Home/RecentOrder";
import PopularDishes from "../components/Home/PopularDishes";




const Home = () => {

    return (

        <section className="bg-[#1f1f1f] h-[calc(100vh-5rem)] overflow-hidden flex gap-3">

            {/* LEFT DIV */}
            <div className="flex-[3] ">

                <Greetings />

                <div className="flex items-center w-full gap-3 px-8 mt-8">
                    <Minicard title="Total Earnings" icon={<BsCashCoin />} number={512} footernum={1.6} />

                    <Minicard title="In Progress" icon={<GrInProgress />} number={16} footernum={3.6} />
                </div>
                <RecentOrder/>
            </div>
            {/* RIGHT DIV */}
            <div className="flex-[2] ">
                <PopularDishes/>
            </div>

            {/* for BottomNav */}
            <BottomNav/>
        </section>
    )
}

export default Home