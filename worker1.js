export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const path = url.pathname;
    const KV = env.LEKKLIR_KV;

    const SERVERS = [
      "vless://0000000000000000000000000000000000000000@0.0.0.0:443?security=none&type=tcp#%F0%9F%92%AC%20discord.gg%2FrnXgSaGm",
      "vless://0000000000000000000000000000000000000000@0.0.0.1:443?security=none&type=tcp#%F0%9F%93%B6%20LTE%20%D0%A1%D0%B5%D1%80%D0%B2%D0%B5%D1%80%D0%B0%20%E2%9A%A1%EF%B8%8F%20%F0%9F%91%87",
      "vless://4b9a117d-b568-0067-ae7f-d2ef213ab107@194.55.239.129:8443?flow=xtls-rprx-vision&encryption=none&security=reality&sni=rutube.ru&fp=qq&pbk=10rVZPoOUP1TlQviIAsQ_jAROX0fRQxH0C92nq_zGQc&sid=43dcff53849b81e6&type=tcp&headerType=none#%F0%9F%87%B7%F0%9F%87%BA%20%D0%A0%D0%BE%D1%81%D1%81%D0%B8%D1%8F%20LTE%20%231%20%E2%9A%A1%EF%B8%8F",
      "vless://4b9a117d-b568-0068-ae7f-d2ef213ab107@194.55.239.122:8443?flow=xtls-rprx-vision&encryption=none&security=reality&sni=rutube.ru&fp=qq&pbk=10rVZPoOUP1TlQviIAsQ_jAROX0fRQxH0C92nq_zGQc&sid=43dcff53849b81e6&type=tcp&headerType=none#%F0%9F%87%B7%F0%9F%87%BA%20%D0%A0%D0%BE%D1%81%D1%81%D0%B8%D1%8F%20LTE%20%232%20%E2%9A%A1%EF%B8%8F",
      "vless://4b9a117d-b568-000e-ae7f-d2ef213ab107@194.55.239.133:8443?flow=xtls-rprx-vision&encryption=none&security=reality&sni=rutube.ru&fp=qq&pbk=10rVZPoOUP1TlQviIAsQ_jAROX0fRQxH0C92nq_zGQc&sid=43dcff53849b81e6&type=tcp&headerType=none#%F0%9F%87%AB%F0%9F%87%AE%20%D0%A4%D0%B8%D0%BD%D0%BB%D1%8F%D0%BD%D0%B4%D0%B8%D1%8F%20LTE%20%231%20%E2%9A%A1%EF%B8%8F",
      "vless://4b9a117d-b568-001e-ae7f-d2ef213ab107@194.55.239.130:8443?flow=xtls-rprx-vision&encryption=none&security=reality&sni=rutube.ru&fp=qq&pbk=10rVZPoOUP1TlQviIAsQ_jAROX0fRQxH0C92nq_zGQc&sid=43dcff53849b81e6&type=tcp&headerType=none#%F0%9F%87%AB%F0%9F%87%AE%20%D0%A4%D0%B8%D0%BD%D0%BB%D1%8F%D0%BD%D0%B4%D0%B8%D1%8F%20LTE%20%232%20%E2%9A%A1%EF%B8%8F",
      "vless://4b9a117d-b568-000e-ae7f-d2ef213ab107@176.109.82.20:8443?flow=xtls-rprx-vision&encryption=none&security=reality&sni=rutube.ru&fp=qq&pbk=10rVZPoOUP1TlQviIAsQ_jAROX0fRQxH0C92nq_zGQc&sid=43dcff53849b81e6&type=tcp&headerType=none#%F0%9F%87%AB%F0%9F%87%AE%20%D0%A4%D0%B8%D0%BD%D0%BB%D1%8F%D0%BD%D0%B4%D0%B8%D1%8F%20LTE%20%233%20%E2%9A%A1%EF%B8%8F",
      "vless://4b9a117d-b568-001e-ae7f-d2ef213ab107@176.109.82.21:8443?flow=xtls-rprx-vision&encryption=none&security=reality&sni=rutube.ru&fp=qq&pbk=10rVZPoOUP1TlQviIAsQ_jAROX0fRQxH0C92nq_zGQc&sid=43dcff53849b81e6&type=tcp&headerType=none#%F0%9F%87%AB%F0%9F%87%AE%20%D0%A4%D0%B8%D0%BD%D0%BB%D1%8F%D0%BD%D0%B4%D0%B8%D1%8F%20LTE%20%234%20%E2%9A%A1%EF%B8%8F",
      "vless://4b9a117d-b568-4db4-ae7f-d2ef213ab107@194.55.239.123:8443?flow=xtls-rprx-vision&encryption=none&security=reality&sni=smartcaptcha.yandexcloud.net&fp=qq&pbk=10rVZPoOUP1TlQviIAsQ_jAROX0fRQxH0C92nq_zGQc&sid=43dcff53849b81e6&type=tcp&headerType=none#%F0%9F%87%B3%F0%9F%87%B1%20%D0%9D%D0%B8%D0%B4%D0%B5%D1%80%D0%BB%D0%B0%D0%BD%D0%B4%D1%8B%20LTE%20%231%20%E2%9A%A1%EF%B8%8F",
      "vless://4b9a117d-b568-0019-ae7f-d2ef213ab107@194.55.239.129:8443?flow=xtls-rprx-vision&encryption=none&security=reality&sni=smartcaptcha.yandexcloud.net&fp=qq&pbk=10rVZPoOUP1TlQviIAsQ_jAROX0fRQxH0C92nq_zGQc&sid=43dcff53849b81e6&type=tcp&headerType=none#%F0%9F%87%AC%F0%9F%87%A7%20%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B1%D1%80%D0%B8%D1%82%D0%B0%D0%BD%D0%B8%D1%8F%20LTE%20%231%20%E2%9A%A1%EF%B8%8F",
      "vless://4b9a117d-b568-000d-ae7f-d2ef213ab107@194.55.239.130:8443?flow=xtls-rprx-vision&encryption=none&security=reality&sni=rutube.ru&fp=qq&pbk=10rVZPoOUP1TlQviIAsQ_jAROX0fRQxH0C92nq_zGQc&sid=43dcff53849b81e6&type=tcp&headerType=none#%F0%9F%87%B3%F0%9F%87%B4%20%D0%9D%D0%BE%D1%80%D0%B2%D0%B5%D0%B3%D0%B8%D1%8F%20LTE%20%231%20%E2%9A%A1%EF%B8%8F",
      "vless://4b9a117d-b568-0012-ae7f-d2ef213ab107@194.55.239.131:8443?flow=xtls-rprx-vision&encryption=none&security=reality&sni=rutube.ru&fp=qq&pbk=10rVZPoOUP1TlQviIAsQ_jAROX0fRQxH0C92nq_zGQc&sid=43dcff53849b81e6&type=tcp&headerType=none#%F0%9F%87%A9%F0%9F%87%AA%20%D0%93%D0%B5%D1%80%D0%BC%D0%B0%D0%BD%D0%B8%D1%8F%20LTE%20%231%20%E2%9A%A1%EF%B8%8F",
      "vless://4b9a117d-b568-0012-ae7f-d2ef213ab107@176.109.82.20:8443?flow=xtls-rprx-vision&encryption=none&security=reality&sni=rutube.ru&fp=qq&pbk=10rVZPoOUP1TlQviIAsQ_jAROX0fRQxH0C92nq_zGQc&sid=43dcff53849b81e6&type=tcp&headerType=none#%F0%9F%87%A9%F0%9F%87%AA%20%D0%93%D0%B5%D1%80%D0%BC%D0%B0%D0%BD%D0%B8%D1%8F%20LTE%20%232%20%E2%9A%A1%EF%B8%8F",
      "vless://4b9a117d-b568-0006-ae7f-d2ef213ab107@194.55.239.122:8443?flow=xtls-rprx-vision&encryption=none&security=reality&sni=rutube.ru&fp=qq&pbk=10rVZPoOUP1TlQviIAsQ_jAROX0fRQxH0C92nq_zGQc&sid=43dcff53849b81e6&type=tcp&headerType=none#%F0%9F%87%B1%F0%9F%87%BB%20%D0%9B%D0%B0%D1%82%D0%B2%D0%B8%D1%8F%20LTE%20%231%20%E2%9A%A1%EF%B8%8F",
      "vless://4b9a117d-b568-000a-ae7f-d2ef213ab107@176.109.94.38:8443?flow=xtls-rprx-vision&encryption=none&security=reality&sni=rutube.ru&fp=qq&pbk=10rVZPoOUP1TlQviIAsQ_jAROX0fRQxH0C92nq_zGQc&sid=43dcff53849b81e6&type=tcp&headerType=none#%F0%9F%87%AA%F0%9F%87%AA%20%D0%AD%D1%81%D1%82%D0%BE%D0%BD%D0%B8%D1%8F%20LTE%20%231%20%E2%9A%A1%EF%B8%8F",
      "vless://4b9a117d-b568-000a-ae7f-d2ef213ab107@194.55.239.126:8443?flow=xtls-rprx-vision&encryption=none&security=reality&sni=rutube.ru&fp=qq&pbk=10rVZPoOUP1TlQviIAsQ_jAROX0fRQxH0C92nq_zGQc&sid=43dcff53849b81e6&type=tcp&headerType=none#%F0%9F%87%AA%F0%9F%87%AA%20%D0%AD%D1%81%D1%82%D0%BE%D0%BD%D0%B8%D1%8F%20LTE%20%232%20%E2%9A%A1%EF%B8%8F",
      "vless://4b9a117d-b568-000c-ae7f-d2ef213ab107@194.55.239.127:8443?flow=xtls-rprx-vision&encryption=none&security=reality&sni=rutube.ru&fp=qq&pbk=10rVZPoOUP1TlQviIAsQ_jAROX0fRQxH0C92nq_zGQc&sid=43dcff53849b81e6&type=tcp&headerType=none#%F0%9F%87%AE%F0%9F%87%B9%20%D0%98%D1%82%D0%B0%D0%BB%D0%B8%D1%8F%20LTE%20%231%20%E2%9A%A1%EF%B8%8F",
      "vless://4b9a117d-b568-0009-ae7f-d2ef213ab107@194.55.239.133:8443?flow=xtls-rprx-vision&encryption=none&security=reality&sni=rutube.ru&fp=qq&pbk=10rVZPoOUP1TlQviIAsQ_jAROX0fRQxH0C92nq_zGQc&sid=43dcff53849b81e6&type=tcp&headerType=none#%F0%9F%87%B8%F0%9F%87%AA%20%D0%A8%D0%B2%D0%B5%D1%86%D0%B8%D1%8F%20LTE%20%231%20%E2%9A%A1%EF%B8%8F",
      "vless://4b9a117d-b568-0009-ae7f-d2ef213ab107@176.109.94.38:8443?flow=xtls-rprx-vision&encryption=none&security=reality&sni=rutube.ru&fp=qq&pbk=10rVZPoOUP1TlQviIAsQ_jAROX0fRQxH0C92nq_zGQc&sid=43dcff53849b81e6&type=tcp&headerType=none#%F0%9F%87%B8%F0%9F%87%AA%20%D0%A8%D0%B2%D0%B5%D1%86%D0%B8%D1%8F%20LTE%20%232%20%E2%9A%A1%EF%B8%8F",
      "vless://1111111111111111111111111111111111111111@0.0.0.2:443?security=none&type=tcp#%F0%9F%93%B6%20WI-FI%20%D0%A1%D0%B5%D1%80%D0%B2%D0%B5%D1%80%D0%B0%20%E2%9A%A1%EF%B8%8F%20%F0%9F%91%87",
      "vless://d85ca18a-68fa-4455-ba7e-dc6060ba131a@se-new.datanode-internal.net:443?security=reality&encryption=none&pbk=r6lN34m1nN-xQZ458j5NPD5xJ3_QBF2bGzY4KJEo4ic&fp=qq&type=tcp&flow=xtls-rprx-vision&sni=ads.x5.ru&sid=abbcd128#%F0%9F%87%B8%F0%9F%87%AA%20%D0%A8%D0%B2%D0%B5%D1%86%D0%B8%D1%8F%20WI-FI%20%E2%9A%A1%EF%B8%8F",
      "vless://d85ca18a-68fa-4455-ba7e-dc6060ba131a@de-new.datanode-internal.net:443?security=reality&encryption=none&pbk=r6lN34m1nN-xQZ458j5NPD5xJ3_QBF2bGzY4KJEo4ic&fp=qq&type=tcp&flow=xtls-rprx-vision&sni=ads.x5.ru&sid=abbcd128#%F0%9F%87%A9%F0%9F%87%AA%20%D0%93%D0%B5%D1%80%D0%BC%D0%B0%D0%BD%D0%B8%D1%8F%20WI-FI%20%E2%9A%A1%EF%B8%8F",
      "vless://d85ca18a-68fa-4455-ba7e-dc6060ba131a@ru.datanode-internal.net:443?security=reality&encryption=none&pbk=r6lN34m1nN-xQZ458j5NPD5xJ3_QBF2bGzY4KJEo4ic&fp=qq&type=tcp&flow=xtls-rprx-vision&sni=sun9-38.userapi.com&sid=abbcd128#%F0%9F%87%B7%F0%9F%87%BA%20%D0%A0%D0%BE%D1%81%D1%81%D0%B8%D1%8F%20WI-FI%20%E2%9A%A1%EF%B8%8F",
      "vless://d85ca18a-68fa-4455-ba7e-dc6060ba131a@fi.datanode-internal.net:443?security=reality&encryption=none&pbk=r6lN34m1nN-xQZ458j5NPD5xJ3_QBF2bGzY4KJEo4ic&fp=qq&type=tcp&flow=xtls-rprx-vision&sni=sun9-36.userapi.com&sid=abbcd128#%F0%9F%87%AB%F0%9F%87%AE%20%D0%A4%D0%B8%D0%BD%D0%BB%D1%8F%D0%BD%D0%B4%D0%B8%D1%8F%20WI-FI%20%E2%9A%A1%EF%B8%8F",
      "vless://d85ca18a-68fa-4455-ba7e-dc6060ba131a@pl.datanode-internal.net:443?security=reality&encryption=none&pbk=r6lN34m1nN-xQZ458j5NPD5xJ3_QBF2bGzY4KJEo4ic&fp=qq&type=tcp&flow=xtls-rprx-vision&sni=sun9-35.userapi.com&sid=abbcd128#%F0%9F%87%B5%F0%9F%87%B1%20%D0%9F%D0%BE%D0%BB%D1%8C%D1%88%D0%B0%20WI-FI%20%E2%9A%A1%EF%B8%8F"
    ];

    const SERVERS_BANNED = [
      "vless://0000000000000000000000000000000000000000@0.0.0.0:443?security=none&type=tcp#%F0%9F%92%AC%20discord.gg%2FrnXgSaGm",
      "vless://0000000000000000000000000000000000000000@0.0.0.1:443?security=none&type=tcp#%E2%9D%8C%20%D0%92%D0%B0%D1%88%20VPN%20%D0%B0%D0%BD%D0%BD%D1%83%D0%BB%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD.%20discord.gg%2FrnXgSaGm"
    ];

    function makeSubResponse(servers, subId) {
      const content = btoa(servers.join("\n"));
      return new Response(content, {
        headers: {
          "Content-Type": "text/plain; charset=utf-8",
          "profile-title": "Lekklir VPN",
          "profile-description": "VPN ot Lekklir - besplatnyy",
          "support-url": "https://discord.gg/rnXgSaGm",
          "profile-update-interval": "24",
          "subscription-userinfo": "upload=0; download=0; total=999999999999999; expire=0",
          "Access-Control-Allow-Origin": "*"
        }
      });
    }

    function getToken(request) {
      const cookie = request.headers.get("Cookie") || "";
      const match = cookie.match(/token=([^;]+)/);
      return match ? match[1] : null;
    }

    async function getUser(token) {
      if (!token || !KV) return null;
      const data = await KV.get("token_" + token);
      if (!data) return null;
      return JSON.parse(data);
    }

    function jsonRes(data, status) {
      return new Response(JSON.stringify(data), {
        status: status || 200,
        headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" }
      });
    }

    // =================== ПОДПИСКА ===================
    if (path === "/sub" || path.startsWith("/sub/")) {
      const subId = path.startsWith("/sub/") ? path.split("/sub/")[1] : null;
      if (subId && KV) {
        const userData = await KV.get("sub_" + subId);
        if (userData) {
          const user = JSON.parse(userData);
          if (user.banned) return makeSubResponse(SERVERS_BANNED, subId);
        }
      }
      return makeSubResponse(SERVERS, subId);
    }

    // =================== API ===================
    if (path === "/api/register" && request.method === "POST") {
      if (!KV) return jsonRes({ error: "KV not configured" }, 500);
      const body = await request.json();
      const username = (body.username || "").trim().toLowerCase();
      const password = body.password || "";
      if (!username || username.length < 3) return jsonRes({ error: "Логин минимум 3 символа" }, 400);
      if (!password || password.length < 6) return jsonRes({ error: "Пароль минимум 6 символов" }, 400);
      if (!/^[a-zA-Z0-9_]+$/.test(username)) return jsonRes({ error: "Только буквы, цифры и _" }, 400);
      const existing = await KV.get("user_" + username);
      if (existing) return jsonRes({ error: "Логин уже занят" }, 400);
      const counter = await KV.get("counter") || "0";
      const num = parseInt(counter) + 1;
      await KV.put("counter", String(num));
      const subId = "lk" + String(num).padStart(6, "0");
      const token = crypto.randomUUID();
      const user = { username, password, subId, num, banned: false, createdAt: Date.now() };
      await KV.put("user_" + username, JSON.stringify(user));
      await KV.put("sub_" + subId, JSON.stringify(user));
      await KV.put("token_" + token, JSON.stringify(user));
      return jsonRes({ ok: true, token, user: { username, subId, num } });
    }

    if (path === "/api/login" && request.method === "POST") {
      if (!KV) return jsonRes({ error: "KV not configured" }, 500);
      const body = await request.json();
      const username = (body.username || "").trim().toLowerCase();
      const password = body.password || "";
      const data = await KV.get("user_" + username);
      if (!data) return jsonRes({ error: "Неверный логин или пароль" }, 401);
      const user = JSON.parse(data);
      if (user.password !== password) return jsonRes({ error: "Неверный логин или пароль" }, 401);
      const token = crypto.randomUUID();
      await KV.put("token_" + token, JSON.stringify(user));
      return jsonRes({ ok: true, token, user: { username: user.username, subId: user.subId, num: user.num } });
    }

    if (path === "/api/me" && request.method === "GET") {
      const token = getToken(request) || url.searchParams.get("token");
      const user = await getUser(token);
      if (!user) return jsonRes({ error: "Не авторизован" }, 401);
      const BASE = url.origin;
      return jsonRes({ username: user.username, subId: user.subId, num: user.num, subUrl: BASE + "/sub/" + user.subId, banned: user.banned });
    }

    if (path === "/api/logout" && request.method === "POST") {
      const token = getToken(request);
      if (token && KV) await KV.delete("token_" + token);
      return jsonRes({ ok: true });
    }

    // =================== DEV PANEL API ===================
    const ADMINS = { "Malik": "Malik17092013", "Bread": "Bread1709", "Yusif": "Yusif061015" };

    if (path === "/api/dev/login" && request.method === "POST") {
      const body = await request.json();
      if (ADMINS[body.username] && ADMINS[body.username] === body.password) {
        const token = "dev_" + crypto.randomUUID();
        if (KV) await KV.put("devtoken_" + token, "1", { expirationTtl: 86400 });
        return jsonRes({ ok: true, token });
      }
      return jsonRes({ error: "Неверный логин" }, 401);
    }

    if (path === "/api/dev/users" && request.method === "GET") {
      const token = url.searchParams.get("token");
      if (!KV) return jsonRes({ error: "KV not configured" }, 500);
      const valid = await KV.get("devtoken_" + token);
      if (!valid) return jsonRes({ error: "Не авторизован" }, 401);
      const counter = await KV.get("counter") || "0";
      const total = parseInt(counter);
      const users = [];
      for (let i = 1; i <= Math.min(total, 100); i++) {
        const subId = "lk" + String(i).padStart(6, "0");
        const data = await KV.get("sub_" + subId);
        if (data) users.push(JSON.parse(data));
      }
      return jsonRes({ users, total });
    }

    if (path === "/api/dev/ban" && request.method === "POST") {
      const token = url.searchParams.get("token");
      if (!KV) return jsonRes({ error: "KV not configured" }, 500);
      const valid = await KV.get("devtoken_" + token);
      if (!valid) return jsonRes({ error: "Не авторизован" }, 401);
      const body = await request.json();
      const data = await KV.get("sub_" + body.subId);
      if (!data) return jsonRes({ error: "Пользователь не найден" }, 404);
      const user = JSON.parse(data);
      user.banned = body.banned;
      await KV.put("sub_" + body.subId, JSON.stringify(user));
      await KV.put("user_" + user.username, JSON.stringify(user));
      return jsonRes({ ok: true });
    }

    // =================== ГЛАВНЫЙ САЙТ ===================
    const BASE = url.origin;
    const html = `<!DOCTYPE html>
<html lang="ru">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>Lekklir VPN</title>
<style>
*{margin:0;padding:0;box-sizing:border-box}
body{background:#0d0d12;color:#fff;font-family:system-ui,-apple-system,sans-serif;min-height:100vh}
.header{background:#13131a;border-bottom:1px solid #1e1e2a;padding:14px 20px;display:flex;align-items:center;justify-content:space-between;position:sticky;top:0;z-index:10}
.logo{display:flex;align-items:center;gap:10px;font-size:18px;font-weight:800;background:linear-gradient(90deg,#00c2ff,#7b2ff7);-webkit-background-clip:text;-webkit-text-fill-color:transparent}
.logo-icon{width:36px;height:36px;background:linear-gradient(135deg,#00c2ff,#7b2ff7);border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:18px;-webkit-text-fill-color:initial}
.hbtn{background:#1e1e2a;border:1px solid #2a2a38;border-radius:8px;padding:7px 12px;color:#aaa;font-size:13px;cursor:pointer;text-decoration:none;display:inline-flex;align-items:center;gap:5px}
.hbtn:hover{background:#2a2a38;color:#fff}
.content{padding:20px;max-width:500px;margin:0 auto}
.screen{display:none}
.screen.active{display:block}
.hero{text-align:center;padding:40px 0 30px}
.hero-icon{font-size:60px;margin-bottom:12px}
.hero-title{font-size:28px;font-weight:800;background:linear-gradient(90deg,#00c2ff,#7b2ff7);-webkit-background-clip:text;-webkit-text-fill-color:transparent;margin-bottom:6px}
.hero-sub{color:#666;font-size:14px;margin-bottom:24px}
.badges{display:flex;gap:8px;justify-content:center;flex-wrap:wrap;margin-bottom:30px}
.badge{background:#1e1e2a;border:1px solid #2a2a38;border-radius:20px;padding:5px 12px;font-size:12px;color:#aaa}
.card{background:#13131a;border:1px solid #1e1e2a;border-radius:16px;margin-bottom:12px;overflow:hidden}
.card-row{display:flex;align-items:center;gap:14px;padding:14px 18px;border-bottom:1px solid #1e1e2a}
.card-row:last-child{border-bottom:none}
.ri{width:38px;height:38px;border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:17px;flex-shrink:0}
.rb{background:rgba(0,194,255,.12)}
.rg{background:rgba(0,200,100,.12)}
.ro{background:rgba(255,150,0,.12)}
.rt{background:rgba(123,47,247,.12)}
.rl{font-size:10px;color:#555;text-transform:uppercase;letter-spacing:.8px;margin-bottom:2px}
.rv{font-size:14px;font-weight:600}
.rv-green{color:#00c864}
.rv-blue{color:#00c2ff;font-family:monospace;font-size:12px}
.btn{display:block;border-radius:12px;padding:13px;font-size:14px;font-weight:700;text-align:center;text-decoration:none;cursor:pointer;border:none;width:100%;color:#fff;margin-bottom:10px;transition:opacity .2s}
.btn:hover{opacity:.9}
.btn-primary{background:linear-gradient(135deg,#00c2ff,#7b2ff7)}
.btn-secondary{background:#1e1e2a;border:1px solid #2a2a38;color:#ccc}
.btn-danger{background:linear-gradient(135deg,#e53935,#c62828)}
.btn-discord{background:linear-gradient(135deg,#5865f2,#7289da)}
.input{background:#1e1e2a;border:1px solid #2a2a38;border-radius:10px;padding:12px 14px;font-size:14px;color:#fff;width:100%;margin-bottom:10px;outline:none}
.input:focus{border-color:#7b2ff7}
.err{background:rgba(229,57,53,.1);border:1px solid rgba(229,57,53,.3);border-radius:8px;padding:10px;font-size:13px;color:#ef5350;text-align:center;margin-bottom:10px;display:none}
.ok-msg{background:rgba(0,200,100,.1);border:1px solid rgba(0,200,100,.3);border-radius:8px;padding:10px;font-size:13px;color:#00c864;text-align:center;margin-bottom:10px;display:none}
.sub-url{background:#0d0d12;border:1px solid #1e1e2a;border-radius:8px;padding:10px 12px;font-size:11px;color:#666;word-break:break-all;margin-bottom:8px;font-family:monospace}
.warn{background:rgba(255,150,0,.06);border:1px solid rgba(255,150,0,.15);border-radius:10px;padding:12px;font-size:12px;color:#fa0;margin-bottom:12px;text-align:center}
.section-title{font-size:13px;color:#555;text-transform:uppercase;letter-spacing:.8px;margin-bottom:12px;font-weight:600}
.app-tabs{display:flex;gap:8px;margin-bottom:14px}
.app-tab{flex:1;background:#1e1e2a;border:1px solid #2a2a38;border-radius:10px;padding:10px;text-align:center;cursor:pointer;font-size:13px;font-weight:600;color:#666}
.app-tab.on{background:rgba(0,194,255,.1);border-color:rgba(0,194,255,.3);color:#00c2ff}
.os-row{display:flex;gap:6px;margin-bottom:14px;flex-wrap:wrap}
.os-btn{background:#1e1e2a;border:1px solid #2a2a38;border-radius:8px;padding:6px 12px;font-size:12px;cursor:pointer;color:#666}
.os-btn.on{background:rgba(123,47,247,.1);border-color:rgba(123,47,247,.3);color:#9b59f7}
.tab-link{color:#7b2ff7;font-size:13px;cursor:pointer;text-align:center;display:block;margin-top:10px}
.dev-badge{background:rgba(255,107,53,.1);border:1px solid rgba(255,107,53,.2);border-radius:6px;padding:2px 8px;font-size:11px;color:#ff6b35;font-weight:600}
.stat-grid{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:16px}
.stat-card{background:#0d0d12;border:1px solid #1e1e2a;border-radius:12px;padding:14px}
.stat-val{font-size:24px;font-weight:800;color:#00c2ff}
.stat-lbl{font-size:11px;color:#555;margin-top:2px}
.user-item{display:flex;align-items:center;justify-content:space-between;padding:12px 0;border-bottom:1px solid #1e1e2a}
.user-item:last-child{border-bottom:none}
.user-num{width:30px;height:30px;background:linear-gradient(135deg,#00c2ff,#7b2ff7);border-radius:8px;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:700;flex-shrink:0}
.user-name{font-size:13px;font-weight:600;margin-bottom:2px}
.user-sub{font-size:11px;color:#555;font-family:monospace}
.abtn{border:none;border-radius:6px;padding:5px 10px;font-size:11px;font-weight:600;cursor:pointer;color:#fff}
.abtn-ban{background:#e53935}
.abtn-unban{background:#00c864}
</style>
</head>
<body>
<div class="header">
  <div class="logo"><div class="logo-icon">&#x26A1;</div>Lekklir VPN</div>
  <div style="display:flex;gap:6px;align-items:center">
    <span id="hUserName" style="font-size:13px;color:#666;display:none"></span>
    <button class="hbtn" id="hLogout" style="display:none" onclick="logout()">&#x1F6AA; &#x412;&#x44B;&#x439;&#x442;&#x438;</button>
    <a href="/dev" class="hbtn">&#x1F6E0;</a>
  </div>
</div>

<div class="content">
  <!-- AUTH SCREEN -->
  <div class="screen active" id="authScreen">
    <div class="hero">
      <div class="hero-icon">&#x26A1;</div>
      <div class="hero-title">Lekklir VPN</div>
      <div class="hero-sub">&#x411;&#x435;&#x441;&#x43F;&#x43B;&#x430;&#x442;&#x43D;&#x44B;&#x439; VPN &#x434;&#x43B;&#x44F; &#x43E;&#x431;&#x445;&#x43E;&#x434;&#x430; &#x431;&#x43B;&#x43E;&#x43A;&#x438;&#x440;&#x43E;&#x432;&#x43E;&#x43A;</div>
      <div class="badges">
        <span class="badge">&#x1F513; &#x411;&#x435;&#x441;&#x43F;&#x43B;&#x430;&#x442;&#x43D;&#x43E;</span>
        <span class="badge">&#x267E; &#x411;&#x435;&#x437;&#x43B;&#x438;&#x43C;&#x438;&#x442;</span>
        <span class="badge">&#x1F30D; 22 &#x441;&#x435;&#x440;&#x432;&#x435;&#x440;&#x430;</span>
        <span class="badge">&#x1F512; VLESS Reality</span>
      </div>
    </div>

    <div id="loginForm">
      <div class="section-title">&#x1F511; &#x412;&#x445;&#x43E;&#x434;</div>
      <div class="err" id="loginErr"></div>
      <input class="input" id="loginUser" placeholder="&#x41B;&#x43E;&#x433;&#x438;&#x43D;" type="text">
      <input class="input" id="loginPass" placeholder="&#x41F;&#x430;&#x440;&#x43E;&#x43B;&#x44C;" type="password">
      <button class="btn btn-primary" id="loginBtn">&#x1F511; &#x412;&#x43E;&#x439;&#x442;&#x438;</button>
      <span class="tab-link" onclick="showReg()">&#x41D;&#x435;&#x442; &#x430;&#x43A;&#x43A;&#x430;&#x443;&#x43D;&#x442;&#x430;? &#x417;&#x430;&#x440;&#x435;&#x433;&#x438;&#x441;&#x442;&#x440;&#x438;&#x440;&#x43E;&#x432;&#x430;&#x442;&#x44C;&#x441;&#x44F;</span>
    </div>

    <div id="regForm" style="display:none">
      <div class="section-title">&#x1F195; &#x420;&#x435;&#x433;&#x438;&#x441;&#x442;&#x440;&#x430;&#x446;&#x438;&#x44F;</div>
      <div class="err" id="regErr"></div>
      <div class="ok-msg" id="regOk"></div>
      <input class="input" id="regUser" placeholder="&#x41F;&#x440;&#x438;&#x434;&#x443;&#x43C;&#x430;&#x439;&#x442;&#x435; &#x43B;&#x43E;&#x433;&#x438;&#x43D; (&#x431;&#x443;&#x43A;&#x432;&#x44B;, &#x446;&#x438;&#x444;&#x440;&#x44B;, _)" type="text">
      <input class="input" id="regPass" placeholder="&#x41F;&#x430;&#x440;&#x43E;&#x43B;&#x44C; (&#x43C;&#x438;&#x43D;. 6 &#x441;&#x438;&#x43C;&#x432;&#x43E;&#x43B;&#x43E;&#x432;)" type="password">
      <input class="input" id="regPass2" placeholder="&#x41F;&#x43E;&#x432;&#x442;&#x43E;&#x440;&#x438;&#x442;&#x435; &#x43F;&#x430;&#x440;&#x43E;&#x43B;&#x44C;" type="password">
      <button class="btn btn-primary" id="regBtn">&#x1F195; &#x417;&#x430;&#x440;&#x435;&#x433;&#x438;&#x441;&#x442;&#x440;&#x438;&#x440;&#x43E;&#x432;&#x430;&#x442;&#x44C;&#x441;&#x44F;</button>
      <span class="tab-link" onclick="showLogin()">&#x423;&#x436;&#x435; &#x435;&#x441;&#x442;&#x44C; &#x430;&#x43A;&#x43A;&#x430;&#x443;&#x43D;&#x442;? &#x412;&#x43E;&#x439;&#x442;&#x438;</span>
    </div>
  </div>

  <!-- DASHBOARD -->
  <div class="screen" id="dashScreen">
    <div style="height:16px"></div>
    <div class="card" id="userCard">
      <div class="card-row"><div class="ri rb">&#x1F464;</div><div><div class="rl">&#x41F;&#x43E;&#x43B;&#x44C;&#x437;&#x43E;&#x432;&#x430;&#x442;&#x435;&#x43B;&#x44C;</div><div class="rv" id="dUsername"></div></div></div>
      <div class="card-row"><div class="ri rg">&#x2713;</div><div><div class="rl">&#x421;&#x442;&#x430;&#x442;&#x443;&#x441;</div><div class="rv rv-green">&#x410;&#x43A;&#x442;&#x438;&#x432;&#x43D;&#x430;</div></div></div>
      <div class="card-row"><div class="ri ro">&#x23;</div><div><div class="rl">&#x41D;&#x43E;&#x43C;&#x435;&#x440; &#x43F;&#x43E;&#x434;&#x43F;&#x438;&#x441;&#x43A;&#x438;</div><div class="rv" id="dSubId"></div></div></div>
      <div class="card-row"><div class="ri rt">&#x21C5;</div><div><div class="rl">&#x422;&#x440;&#x430;&#x444;&#x438;&#x43A;</div><div class="rv">0 / &#x411;&#x435;&#x437;&#x43B;&#x438;&#x43C;&#x438;&#x442;</div></div></div>
    </div>

    <div class="warn">&#x26A0;&#xFE0F; VPN &#x431;&#x435;&#x441;&#x43F;&#x43B;&#x430;&#x442;&#x43D;&#x44B;&#x439; &#x438; &#x43C;&#x43E;&#x436;&#x435;&#x442; &#x440;&#x430;&#x431;&#x43E;&#x442;&#x430;&#x442;&#x44C; &#x43D;&#x435;&#x441;&#x442;&#x430;&#x431;&#x438;&#x43B;&#x44C;&#x43D;&#x43E;</div>

    <div class="card">
      <div style="padding:14px 18px;border-bottom:1px solid #1e1e2a">
        <div class="section-title" style="margin-bottom:10px">&#x1F4E6; &#x423;&#x441;&#x442;&#x430;&#x43D;&#x43E;&#x432;&#x43A;&#x430;</div>
        <div class="os-row" id="osRow">
          <div class="os-btn on" data-os="android">&#x1F916; Android</div>
          <div class="os-btn" data-os="ios">&#x1F34E; iPhone</div>
          <div class="os-btn" data-os="windows">&#x1F4BB; Windows</div>
          <div class="os-btn" data-os="tv">&#x1F4FA; TV</div>
        </div>
        <div class="app-tabs">
          <div class="app-tab on" id="tabH">Happ</div>
          <div class="app-tab" id="tabV">V2RayTun</div>
        </div>
      </div>
      <div style="padding:14px 18px">
        <a id="dlBtn" href="#" class="btn btn-primary" target="_blank">&#x1F4E5; &#x421;&#x43A;&#x430;&#x447;&#x430;&#x442;&#x44C; Happ</a>
        <div class="section-title">&#x1F517; &#x0421;&#x0441;&#x044B;&#x043B;&#x043A;&#x0430; &#x043F;&#x043E;&#x0434;&#x043F;&#x0438;&#x0441;&#x043A;&#x0438;</div>
        <div class="sub-url" id="subUrlBox"></div>
        <div class="ok-msg" id="copyOk">&#x2705; &#x421;&#x43A;&#x43E;&#x43F;&#x438;&#x440;&#x43E;&#x432;&#x430;&#x43D;&#x43E;!</div>
        <button class="btn btn-secondary" id="copyBtn">&#x1F4CB; &#x421;&#x43A;&#x43E;&#x43F;&#x438;&#x440;&#x43E;&#x432;&#x430;&#x442;&#x44C; &#x441;&#x441;&#x44B;&#x43B;&#x43A;&#x443;</button>
      </div>
    </div>

    <a href="https://discord.gg/rnXgSaGm" class="card" style="display:flex;align-items:center;gap:14px;padding:14px 18px;text-decoration:none">
      <div class="ri" style="background:#5865f2;width:42px;height:42px">&#x1F4AC;</div>
      <div><div style="font-size:14px;font-weight:600">Discord &#x441;&#x435;&#x440;&#x432;&#x435;&#x440;</div><div style="font-size:12px;color:#555">&#x415;&#x441;&#x442;&#x44C; &#x432;&#x43E;&#x43F;&#x440;&#x43E;&#x441;&#x44B;?</div></div>
    </a>

    <button class="btn btn-danger" style="margin-top:8px" onclick="logout()">&#x1F6AA; &#x412;&#x44B;&#x439;&#x442;&#x438;</button>
  </div>
</div>

<script>
var BASE = "${BASE}";
var token = localStorage.getItem("lekklir_token");
var userData = null;
var os = "android";
var app = "happ";
var dl = {
  happ: { android: "https://play.google.com/store/apps/details?id=com.happ.proxy", ios: "https://apps.apple.com/app/happ-proxy-utility/id6504287480", windows: "https://github.com/happ-manager/happ/releases", tv: "https://play.google.com/store/apps/details?id=com.happ.proxy" },
  v2: { android: "https://play.google.com/store/apps/details?id=com.v2ray.ang", ios: "https://apps.apple.com/app/v2raytun/id6476628951", windows: "https://github.com/2dust/v2rayN/releases", tv: "https://play.google.com/store/apps/details?id=com.v2ray.ang" }
};
var names = { happ: "Happ", v2: "V2RayTun" };

function showScreen(id) {
  document.querySelectorAll(".screen").forEach(function(s) { s.classList.remove("active"); });
  document.getElementById(id).classList.add("active");
}

function showLogin() { document.getElementById("loginForm").style.display = "block"; document.getElementById("regForm").style.display = "none"; }
function showReg() { document.getElementById("loginForm").style.display = "none"; document.getElementById("regForm").style.display = "block"; }

function renderDash() {
  if (!userData) return;
  document.getElementById("dUsername").textContent = userData.username;
  document.getElementById("dSubId").textContent = "#" + userData.num + " (" + userData.subId + ")";
  document.getElementById("hUserName").textContent = userData.username;
  document.getElementById("hUserName").style.display = "block";
  document.getElementById("hLogout").style.display = "flex";
  updateDlBtn();
  showScreen("dashScreen");
}

function updateDlBtn() {
  if (!userData) return;
  var subUrl = BASE + "/sub/" + userData.subId;
  document.getElementById("subUrlBox").textContent = subUrl;
  document.getElementById("dlBtn").href = dl[app][os] || dl[app].android;
  document.getElementById("dlBtn").textContent = "📥 Скачать " + names[app];
}

async function checkAuth() {
  if (!token) return;
  try {
    var r = await fetch(BASE + "/api/me", { headers: { "Cookie": "token=" + token } });
    if (r.ok) {
      userData = await r.json();
      renderDash();
    } else {
      localStorage.removeItem("lekklir_token");
      token = null;
    }
  } catch(e) {}
}

document.getElementById("loginBtn").addEventListener("click", async function() {
  var u = document.getElementById("loginUser").value.trim();
  var p = document.getElementById("loginPass").value;
  var err = document.getElementById("loginErr");
  err.style.display = "none";
  if (!u || !p) { err.textContent = "Заполните все поля"; err.style.display = "block"; return; }
  try {
    var r = await fetch(BASE + "/api/login", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ username: u, password: p }) });
    var data = await r.json();
    if (data.ok) {
      token = data.token;
      userData = data.user;
      localStorage.setItem("lekklir_token", token);
      renderDash();
    } else {
      err.textContent = data.error || "Ошибка";
      err.style.display = "block";
    }
  } catch(e) { err.textContent = "Ошибка соединения"; err.style.display = "block"; }
});

document.getElementById("regBtn").addEventListener("click", async function() {
  var u = document.getElementById("regUser").value.trim();
  var p = document.getElementById("regPass").value;
  var p2 = document.getElementById("regPass2").value;
  var err = document.getElementById("regErr");
  var ok = document.getElementById("regOk");
  err.style.display = "none"; ok.style.display = "none";
  if (!u || !p || !p2) { err.textContent = "Заполните все поля"; err.style.display = "block"; return; }
  if (p !== p2) { err.textContent = "Пароли не совпадают"; err.style.display = "block"; return; }
  try {
    var r = await fetch(BASE + "/api/register", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ username: u, password: p }) });
    var data = await r.json();
    if (data.ok) {
      token = data.token;
      userData = data.user;
      localStorage.setItem("lekklir_token", token);
      renderDash();
    } else {
      err.textContent = data.error || "Ошибка";
      err.style.display = "block";
    }
  } catch(e) { err.textContent = "Ошибка соединения"; err.style.display = "block"; }
});

document.getElementById("loginPass").addEventListener("keydown", function(e) { if (e.key === "Enter") document.getElementById("loginBtn").click(); });
document.getElementById("regPass2").addEventListener("keydown", function(e) { if (e.key === "Enter") document.getElementById("regBtn").click(); });

document.getElementById("copyBtn").addEventListener("click", function() {
  var subUrl = BASE + "/sub/" + userData.subId;
  navigator.clipboard.writeText(subUrl).then(function() {
    var ok = document.getElementById("copyOk");
    ok.style.display = "block";
    setTimeout(function() { ok.style.display = "none"; }, 2000);
  });
});

document.getElementById("osRow").querySelectorAll(".os-btn").forEach(function(btn) {
  btn.addEventListener("click", function() {
    document.querySelectorAll(".os-btn").forEach(function(b) { b.classList.remove("on"); });
    btn.classList.add("on");
    os = btn.dataset.os;
    updateDlBtn();
  });
});

document.getElementById("tabH").addEventListener("click", function() {
  app = "happ";
  document.getElementById("tabH").classList.add("on");
  document.getElementById("tabV").classList.remove("on");
  updateDlBtn();
});

document.getElementById("tabV").addEventListener("click", function() {
  app = "v2";
  document.getElementById("tabV").classList.add("on");
  document.getElementById("tabH").classList.remove("on");
  updateDlBtn();
});

async function logout() {
  if (token) await fetch(BASE + "/api/logout", { method: "POST", headers: { "Cookie": "token=" + token } });
  localStorage.removeItem("lekklir_token");
  token = null;
  userData = null;
  document.getElementById("hUserName").style.display = "none";
  document.getElementById("hLogout").style.display = "none";
  showScreen("authScreen");
  showLogin();
}

checkAuth();
</script>
</body>
</html>`;

    return new Response(html, { headers: { "Content-Type": "text/html; charset=utf-8" } });
  }
}
