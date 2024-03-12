import Button from "../../Shared/Button";

export default function Categories() {
    return (
        <div className='bg-white rounded-3xl bg-opacity-60 w-1/3 p-6'>
            <div className='border-b mb-6'>
                <h1 className='pb-6 font-bold text-2xl playfair-font'>Categories</h1>
            </div>
            <div className='flex flex-col gap-5'>

            </div>
            <div className='flex flex-wrap gap-5'>
                <Button variant='outlined'>Burgers</Button>
                <Button variant='pill'>Pizza</Button>
                <Button variant='outlined'>Dessert</Button>
                <Button variant='outlined'>Biscuits</Button>
                <Button variant='outlined'>Grilled Cheese</Button>
                <Button variant='outlined'>Tomato Soup</Button>
                <Button variant='outlined'>Chicken </Button>
                <Button variant='outlined'>Chicken Fingers</Button>
                <Button variant='outlined'>Nuggets</Button>
                <Button variant='outlined'>Flatbread</Button>
                <Button variant='outlined'>Dessert</Button>
                <Button variant='outlined'>Biscuits</Button>
                <Button variant='outlined'>Grilled Cheese</Button>
                <Button variant='outlined'>Tomato Soup</Button>
                <Button variant='outlined'>Chicken </Button>
                <Button variant='outlined'>Chicken Fingers</Button>
                <Button variant='outlined'>Nuggets</Button>
                <Button variant='outlined'>Flatbread</Button>
            </div>
        </div>
    )
}