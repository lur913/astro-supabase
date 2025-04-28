/*
 * @Description: api - 用户注册
 * @Author: alpin
 * @Date: 2025-04-28 14:39:14
 * @LastEditTime: 2025-04-28 15:26:06
 * @LastEditors: alpin
 * @FilePath: \astro-supabase\src\pages\api\auth\register.ts
 */

// 使用 `output: 'static'` 渲染模式时，需添加的配置：
// export const prerender = false;
import type { APIRoute } from "astro";
import { supabase } from "@lib/supabase";

export const POST: APIRoute = async ({ request, redirect }) => {
  const formData = await request.formData();
  const email = formData.get("email")?.toString();
  const password = formData.get("password")?.toString();
  console.log(`用户名-密码：${email} - ${password}`, );
  if (!email || !password) {
    return new Response("Email and password are required", { status: 400 });
  }

  const { error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) {
    return new Response(error.message, { status: 500 });
  }

  return redirect("/signin");
};
