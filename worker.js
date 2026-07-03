export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const path = url.pathname;
    const SUB_BASE = "https://lekklir-vpn-new.sahzada33vpn.workers.dev/sub";

    // =================== TELEGRAM WEBHOOK ===================
    if (path === "/telegram" && request.method === "POST") {
      const body = await request.json();
      const msg = body.message || body.edited_message;
      if (!msg) return new Response("ok");
      const chatId = msg.chat.id;
      const userId = msg.from.id;
      const text = msg.text || "";
      const name = msg.from.first_name || "User";
      const subUrl = SUB_BASE + "/" + userId;
      const tgToken = env.TELEGRAM_TOKEN;
      const kb = { keyboard: [[{ text: "⚡ Подписка" }, { text: "🌍 Серверы" }], [{ text: "❓ Помощь" }]], resize_keyboard: true };

      let replyText = "";
      let parse_mode = "HTML";

      if (text.includes("/start")) {
        replyText = "⚡ <b>Lekklir VPN</b>\n\nПривет, <b>" + name + "</b>!\n\n🌍 22 сервера\n♾ Безлимитный трафик\n🔒 VLESS Reality\n\n⚠️ Бесплатный, может работать нестабильно.\n\nНажми кнопку ниже:";
      } else if (text.includes("/sub") || text.includes("Подписка")) {
        replyText = "⚡ <b>Ваша подписка</b>\n\n🔗 Ссылка:\n<code>" + subUrl + "</code>\n\n📱 Скачайте Happ или V2RayTun\nВставьте ссылку в приложение\n\n♾ Безлимитный трафик\n⚠️ Бесплатный, может работать нестабильно.";
      } else if (text.includes("Серверы") || text.includes("/servers")) {
        replyText = "⚡ <b>Серверы</b>\n\n📶 <b>LTE:</b>\n🇷🇺 Россия #1 #2\n🇫🇮 Финляндия #1 #2 #3 #4\n🇳🇱 Нидерланды #1\n🇬🇧 Великобритания #1\n🇩🇪 Германия #1 #2\n🇱🇻 Латвия #1\n🇪🇪 Эстония #1 #2\n🇮🇹 Италия #1\n🇸🇪 Швеция #1 #2\n\n📡 <b>WI-FI:</b>\n🇸🇪 Швеция • 🇩🇪 Германия • 🇷🇺 Россия • 🇫🇮 Финляндия • 🇵🇱 Польша";
      } else if (text.includes("Помощь") || text.includes("/help")) {
        replyText = "⚡ <b>Помощь</b>\n\n/sub - подписка\n/servers - серверы\n/help - помощь\n\n📱 Happ | V2RayTun\n💬 Discord: discord.gg/rnXgSaGm";
      } else {
        replyText = "Напишите /start чтобы начать";
      }

      await fetch("https://api.telegram.org/bot" + tgToken + "/sendMessage", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chat_id: chatId, text: replyText, parse_mode, reply_markup: kb })
      });
      return new Response("ok");
    }

    // =================== DISCORD WEBHOOK ===================
    if (path === "/discord" && request.method === "POST") {
      const PUBLIC_KEY = env.DISCORD_PUBLIC_KEY || "f5970cb808b9d5373d5859b41aab130dfcf89a3bafdca7a0bcfe166da299764c";
      const signature = request.headers.get("x-signature-ed25519");
      const timestamp = request.headers.get("x-signature-timestamp");
      const rawBody = await request.text();

      // Верификация подписи Discord
      try {
        const encoder = new TextEncoder();
        const keyData = hexToBytes(PUBLIC_KEY);
        const cryptoKey = await crypto.subtle.importKey("raw", keyData, { name: "NODE-ED25519", namedCurve: "NODE-ED25519" }, false, ["verify"]);
        const valid = await crypto.subtle.verify("NODE-ED25519", cryptoKey, hexToBytes(signature), encoder.encode(timestamp + rawBody));
        if (!valid) return new Response("Invalid signature", { status: 401 });
      } catch (e) {
        return new Response("Verification error", { status: 401 });
      }

      const body = JSON.parse(rawBody);

      if (body.type === 1) {
        return new Response(JSON.stringify({ type: 1 }), { headers: { "Content-Type": "application/json" } });
      }

      if (body.type === 2) {
        const cmd = body.data.name;
        const userId = body.member ? body.member.user.id : body.user.id;
        const username = body.member ? body.member.user.username : body.user.username;
        const subUrl = SUB_BASE + "/" + userId;
        let content = "";

        if (cmd === "sub") {
          content = "⚡ **Lekklir VPN — Ваша подписка**\n\n👤 **" + username + "**\n🔗 Ссылка:\n```\n" + subUrl + "\n```\n📱 Скачайте **Happ** или **V2RayTun**, вставьте ссылку\n♾️ Безлимитный трафик\n⚠️ Бесплатный, может работать нестабильно";
        } else if (cmd === "servers") {
          content = "⚡ **Серверы**\n\n📶 **LTE:** 🇷🇺🇫🇮🇳🇱🇬🇧🇩🇪🇱🇻🇪🇪🇮🇹🇸🇪\n📡 **WI-FI:** 🇸🇪🇩🇪🇷🇺🇫🇮🇵🇱\n\nИспользуйте `/sub` чтобы получить все 22 сервера!";
        } else if (cmd === "help") {
          content = "⚡ **Помощь**\n\n`/sub` — подписка\n`/servers` — серверы\n`/help` — помощь\n\n🌐 https://lekklir-vpn-new.sahzada33vpn.workers.dev";
        }

        return new Response(JSON.stringify({ type: 4, data: { content, flags: 64 } }), { headers: { "Content-Type": "application/json" } });
      }

      return new Response("ok");
    }

    // =================== SETUP ===================
    if (path === "/setup") {
      const tgToken = env.TELEGRAM_TOKEN;
      const workerUrl = url.origin;
      let result = "";
      if (tgToken) {
        const r = await fetch("https://api.telegram.org/bot" + tgToken + "/setWebhook", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ url: workerUrl + "/telegram", allowed_updates: ["message"] })
        });
        const j = await r.json();
        result = j.ok ? "✅ Telegram webhook установлен!" : "❌ Ошибка: " + JSON.stringify(j);
      } else {
        result = "❌ TELEGRAM_TOKEN не найден";
      }
      return new Response(result, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
    }

    return new Response("⚡ Lekklir VPN Bot is running!", { headers: { "Content-Type": "text/plain; charset=utf-8" } });
  }
}

function hexToBytes(hex) {
  const bytes = new Uint8Array(hex.length / 2);
  for (let i = 0; i < hex.length; i += 2) {
    bytes[i / 2] = parseInt(hex.substr(i, 2), 16);
  }
  return bytes;
}
