import Banner from "../components/Home/Banner";
import MenuCategory from "../components/Home/MenuCategory";
import Cart from "../components/Home/Cart";
import TrendingOrders from "../components/Home/TrendingOrders";
import Categories from "../components/Home/Categories";

export default function Home () {
    return(
            <main>
                <Banner/>
                <div className='flex gap-10'>
                    <MenuCategory/>
                    <div className='w-1/3'>
                        <Cart/>
                    </div>
                    {/*<Cart/>*/}
                </div>
                <div className='flex gap-10 mt-10'>
                    <TrendingOrders/>
                    <Categories/>
                </div>
            </main>
    )
}