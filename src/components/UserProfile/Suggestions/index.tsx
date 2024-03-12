import SuggestionItem, {ISuggestion} from "./SuggestionItem";

export default function Suggestions() {

    const suggestions: ISuggestion[] = [{
        name: 'Pizza',
        options: 354,
        imgPath: 'pizza-2.png'
    },{
        name: 'Noodles',
        options: 345,
        imgPath: 'noodles.png'
    },{
        name: 'Burger',
        options: 260,
        imgPath: 'toasted-burger.png'
    },{
        name: 'Pasta',
        options: 250,
        imgPath: 'chilli-pasta.png'
    }
    ]

    return(
        <div className='bg-white rounded-3xl bg-opacity-60 p-6 mb-10'>
            <div className='border-b'>
                <h1 className='pb-6 font-bold text-2xl playfair-font'>Suggestions</h1>
            </div>
            <div>
                {suggestions.map((suggestion, i)=>{
                    return <SuggestionItem key={suggestion.name+i} {...suggestion}/>
                })}
            </div>
        </div>
    )
}