import { auth } from "@/auth";

 const  DashboardPage = async () => {
  const session = await auth();

  
  return (
    <>
    <div>Dashboard Page</div>
    <div>User: {session?.user?.email}</div>
    </>
    
  )
}

export default DashboardPage