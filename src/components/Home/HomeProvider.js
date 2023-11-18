import {useSelector} from "react-redux";

export const HomeProvider = ({children}) => {
  const { open } = useSelector(state => state.hamburger);
  
  
  return(
    <div className={open ? 'overflow-hidden' : ''}>
      {children}
    </div>
  )
}
