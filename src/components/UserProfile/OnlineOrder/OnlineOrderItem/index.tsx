
export default function OnlineOrderItem(props: { hideValue?: boolean, title: string, value?: number }) {
    return(
        <div className='flex py-6 justify-between items-center [&:not(:last-child)]:border-b border-[var(--primary-border)]'>
            <p>{props.title}</p>
            {!props.hideValue && <div className='w-[54px] h-[44px] rounded-full bg-[var(--primary-color)] text-white flex items-center justify-center'> {props.value || 0} </div>}
        </div>
    )
}