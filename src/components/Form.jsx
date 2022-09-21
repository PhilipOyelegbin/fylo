export const Form = ({classname, placeholder, btnText, direction, input, button}) => {
  return (
    <form className={classname} style={{flexDirection: direction || "row"}} action="#">
        <input className={input} type="text" placeholder={placeholder || ""} required />
        <button className={button}>{btnText}</button>
    </form>
  )
}
