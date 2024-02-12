import Footer from "@/components/shared/Footer"
import Navbar from "@/components/shared/Navbar"


const RootLayout = ({children}:{children:React.ReactNode}) => {
  return (
     <div className=" min-h-[100vh] w-full flex flex-col">
        <Navbar/>
        <main className=" flex-1">{children}</main>
        <Footer/>
     </div>
  )
}

export default RootLayout