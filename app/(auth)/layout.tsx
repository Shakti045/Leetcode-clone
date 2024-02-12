const AuthLayOut = ({children}:{children:React.ReactNode}) => {
  return (
     <div className=" min-h-[100vh] w-full flex justify-center items-center">
        {children}
     </div>
  )
}

export default AuthLayOut