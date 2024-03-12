import NewsItem from "./NewsItem";

export default function News() {

    const news = [{
        name: 'Pizza',
        imgPath: 'news-img-1.png'
    },{
        name: 'Burger',
        imgPath: 'news-img-2.png'
    },{
        name: 'Pasta',
        imgPath: 'news-img-3.png'
    }]

    return(
        <div className='bg-white bg-opacity-60 p-6 rounded-3xl'>
            <div className='border-b'>
                <h1 className='pb-6 font-bold text-2xl playfair-font'>News</h1>
            </div>
            <div>
                {news.map((n)=>{
                    return <NewsItem key={n.name} {...n}/>
                })}
            </div>
        </div>
    )
}