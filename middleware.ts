import { authMiddleware, } from "@clerk/nextjs";

 

export default authMiddleware({
    publicRoutes:['/','/login','/signup','/forgot-password','/reset-password','/not-found'],
    ignoredRoutes:[
      '/api/:path*',
    ],
    // afterAuth(auth,req,evt){
    //    const {sessionClaims}=auth;
    //    const metadata:any=sessionClaims?.metadata;
    //      if(metadata?.isAdmin){
    //       return NextResponse.redirect(new URL('/admin/dashboard',req.nextUrl).toString());
    //      }
    //      return NextResponse.next();
    // },
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};