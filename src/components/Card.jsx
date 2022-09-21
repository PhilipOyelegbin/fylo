import quotes from '../images/icon-quotes.svg';

export const Card = ({text, avatar, title, subtitle}) => {
  return (
    <div className="w-[95%] md:w-[43%] bg-white shadow-lg shadow-slate-300 p-5 my-5 mx-auto md:mx-0 border-solid rounded-lg mt-10">
        <img src={quotes} alt="icon" />
        <p className='mt-3 text-xs'>{text ? text : ""}</p>
        <figure className='flex items-center my-3'>
            <img className='w-10 h-10 rounded-full mr-2' src={avatar ? avatar : ""} alt="avatar" />
            <figcaption>
              <h3 className='text-xs font-bold'>{title ? title : ""}</h3>
              <p className='text-[10px]'>{subtitle ? subtitle : ""}</p>
            </figcaption>
        </figure>
    </div>
  )
}
