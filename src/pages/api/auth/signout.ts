/*
 * @Description:  api - 用户退出
 * @Author: alpin
 * @Date: 2025-04-28 14:39:36
 * @LastEditTime: 2025-04-28 14:48:22
 * @LastEditors: alpin
 * @FilePath: \astro-supabase\src\pages\api\auth\signout.ts
 */

// 使用 `output: 'static'` 渲染模式时，需添加的配置：
// export const prerender = false;
import type { APIRoute } from "astro";

export const GET: APIRoute = async ({ cookies, redirect }) => {
  cookies.delete("sb-access-token", { path: "/" });
  cookies.delete("sb-refresh-token", { path: "/" });
  return redirect("/signin");
};