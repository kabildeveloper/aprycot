
export interface ISuggestion {
    name: string,
    imgPath: string,
    options: number
}
export default function SuggestionItem(props: ISuggestion) {
    return(
        <div className='flex items-center gap-5 p-8 [&:not(:last-child)]:border-b '>
            <img src={`/assets/${props.imgPath}`} width={120} height={120} className='rounded-xl' alt='pizza' />
            <div>
                <p className='mb-2 font-semibold'>{props.name}</p>
                <p className='text-gray-400 font-light'>{props.options}+ Options</p>
            </div>
        </div>
    )
}