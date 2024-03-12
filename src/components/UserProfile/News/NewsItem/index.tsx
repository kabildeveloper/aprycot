export default function NewsItem(props: {imgPath: string, name: string}) {
    return(
        <div className='flex items-center py-4 gap-4 [&:not(:last-child)]:border-b border-[var(--primary-border)]'>
            <img src={`/assets/${props.imgPath}`}  alt='news-1' width={62} height={62}/>
            <div>
                <p className='font-semibold mb-2'>{props.name}</p>
                <p className='text-gray-400 font-light'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet</p>
            </div>
        </div>
    )
}