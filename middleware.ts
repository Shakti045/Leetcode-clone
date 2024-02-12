import { authMiddleware } from "@clerk/nextjs";
 

export default authMiddleware({
    publicRoutes:['/','/login','/signup','/forgot-password','/reset-password','/not-found'],
    ignoredRoutes:[
      '/api/:path*',
    ],
});
 
export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};