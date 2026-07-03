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
      const name = msg.from.first_name || "Пользователь";
      const subUrl = SUB_BASE + "/" + userId;

      const keyboard = {
        keyboard: [
          [{ text: "\u26A1 \u041F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u043F\u043E\u0434\u043F\u0438\u0441\u043A\u0443" }, { text: "\uD83C\uDF0D \u0421\u0435\u0440\u0432\u0435\u0440\u044B" }],
          [{ text: "\u2753 \u041F\u043E\u043C\u043E\u0449\u044C" }, { text: "\uD83C\uDF10 \u0421\u0430\u0439\u0442" }]
        ],
        resize_keyboard: true
      };

      let replyText = "";

      if (text.includes("/start")) {
        replyText = "\u26A1 *Lekklir VPN*\n\n\u041F\u0440\u0438\u0432\u0435\u0442, *" + name + "*\\!\n\n\uD83C\uDF0D 22 \u0441\u0435\u0440\u0432\u0435\u0440\u0430\n\u267E\uFE0F \u0411\u0435\u0437\u043B\u0438\u043C\u0438\u0442\u043D\u044B\u0439 \u0442\u0440\u0430\u0444\u0438\u043A\n\uD83D\uDD12 VLESS Reality\n\u26A0\uFE0F \u0411\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u044B\u0439, \u043C\u043E\u0436\u0435\u0442 \u0440\u0430\u0431\u043E\u0442\u0430\u0442\u044C \u043D\u0435\u0441\u0442\u0430\u0431\u0438\u043B\u044C\u043D\u043E\\.\n\n\u041D\u0430\u0436\u043C\u0438\u0442\u0435 \u043A\u043D\u043E\u043F\u043A\u0443 \u043D\u0438\u0436\u0435:";
      } else if (text.includes("/sub") || text.includes("\u26A1")) {
        replyText = "\u26A1 *\u0412\u0430\u0448\u0430 \u043F\u043E\u0434\u043F\u0438\u0441\u043A\u0430*\n\n\uD83D\uDD17 \u0421\u0441\u044B\u043B\u043A\u0430:\n`" + subUrl + "`\n\n\uD83D\uDCF1 *\u041A\u0430\u043A \u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0438\u0442\u044C:*\n1\\. \u0421\u043A\u0430\u0447\u0430\u0439\u0442\u0435 Happ \u0438\u043B\u0438 V2RayTun\n2\\. \u0421\u043A\u043E\u043F\u0438\u0440\u0443\u0439\u0442\u0435 \u0441\u0441\u044B\u043B\u043A\u0443\n3\\. \u0414\u043E\u0431\u0430\u0432\u044C\u0442\u0435 \u043F\u043E\u0434\u043F\u0438\u0441\u043A\u0443 \u0432 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435\n\n\u267E\uFE0F \u0411\u0435\u0437\u043B\u0438\u043C\u0438\u0442\u043D\u044B\u0439 \u0442\u0440\u0430\u0444\u0438\u043A\n\u26A0\uFE0F \u0411\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u044B\u0439, \u043C\u043E\u0436\u0435\u0442 \u0440\u0430\u0431\u043E\u0442\u0430\u0442\u044C \u043D\u0435\u0441\u0442\u0430\u0431\u0438\u043B\u044C\u043D\u043E\\.";
      } else if (text.includes("\uD83C\uDF0D") || text.includes("/servers")) {
        replyText = "\u26A1 *\u0421\u0435\u0440\u0432\u0435\u0440\u044B Lekklir VPN*\n\n\uD83D\uDCF6 *LTE:*\n\uD83C\uDDF7\uD83C\uDDFA \u0420\u043E\u0441\u0441\u0438\u044F \\#1 \\#2\n\uD83C\uDDEB\uD83C\uDDEE \u0424\u0438\u043D\u043B\u044F\u043D\u0434\u0438\u044F \\#1 \\#2 \\#3 \\#4\n\uD83C\uDDF3\uD83C\uDDF1 \u041D\u0438\u0434\u0435\u0440\u043B\u0430\u043D\u0434\u044B \\#1\n\uD83C\uDDEC\uD83C\uDDE7 \u0412\u0435\u043B\u0438\u043A\u043E\u0431\u0440\u0438\u0442\u0430\u043D\u0438\u044F \\#1\n\uD83C\uDDE9\uD83C\uDDEA \u0413\u0435\u0440\u043C\u0430\u043D\u0438\u044F \\#1 \\#2\n\uD83C\uDDF1\uD83C\uDDFB \u041B\u0430\u0442\u0432\u0438\u044F \\#1\n\uD83C\uDDEA\uD83C\uDDEA \u042D\u0441\u0442\u043E\u043D\u0438\u044F \\#1 \\#2\n\uD83C\uDDEE\uD83C\uDDF9 \u0418\u0442\u0430\u043B\u0438\u044F \\#1\n\uD83C\uDDF8\uD83C\uDDEA \u0428\u0432\u0435\u0446\u0438\u044F \\#1 \\#2\n\n\uD83D\uDCE1 *WI\\-FI:*\n\uD83C\uDDF8\uD83C\uDDEA \u0428\u0432\u0435\u0446\u0438\u044F \u2022 \uD83C\uDDE9\uD83C\uDDEA \u0413\u0435\u0440\u043C\u0430\u043D\u0438\u044F \u2022 \uD83C\uDDF7\uD83C\uDDFA \u0420\u043E\u0441\u0441\u0438\u044F \u2022 \uD83C\uDDEB\uD83C\uDDEE \u0424\u0438\u043D\u043B\u044F\u043D\u0434\u0438\u044F \u2022 \uD83C\uDDF5\uD83C\uDDF1 \u041F\u043E\u043B\u044C\u0448\u0430";
      } else if (text.includes("\u2753") || text.includes("/help")) {
        replyText = "\u26A1 *\u041F\u043E\u043C\u043E\u0449\u044C*\n\n/sub \\- \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u043F\u043E\u0434\u043F\u0438\u0441\u043A\u0443\n/servers \\- \u0441\u043F\u0438\u0441\u043E\u043A \u0441\u0435\u0440\u0432\u0435\u0440\u043E\u0432\n/help \\- \u043F\u043E\u043C\u043E\u0449\u044C\n\n\uD83D\uDCF1 Happ \\| V2RayTun\n\u26A0\uFE0F \u0411\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u044B\u0439, \u043C\u043E\u0436\u0435\u0442 \u0440\u0430\u0431\u043E\u0442\u0430\u0442\u044C \u043D\u0435\u0441\u0442\u0430\u0431\u0438\u043B\u044C\u043D\u043E\\.";
      } else if (text.includes("\uD83C\uDF10")) {
        replyText = "\uD83C\uDF10 https://lekklir\\-vpn\\-new\\.sahzada33vpn\\.workers\\.dev";
      } else {
        replyText = "\u041D\u0430\u043F\u0438\u0448\u0438\u0442\u0435 /start \u0447\u0442\u043E\u0431\u044B \u043D\u0430\u0447\u0430\u0442\u044C";
      }

      const tgToken = env.TELEGRAM_TOKEN;
      await fetch("https://api.telegram.org/bot" + tgToken + "/sendMessage", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: chatId,
          text: replyText,
          parse_mode: "MarkdownV2",
          reply_markup: keyboard
        })
      });

      return new Response("ok");
    }

    // =================== DISCORD WEBHOOK ===================
    if (path === "/discord" && request.method === "POST") {
      const body = await request.json();

      if (body.type === 1) {
        return new Response(JSON.stringify({ type: 1 }), {
          headers: { "Content-Type": "application/json" }
        });
      }

      if (body.type === 2) {
        const cmd = body.data.name;
        const userId = body.member ? body.member.user.id : body.user.id;
        const username = body.member ? body.member.user.username : body.user.username;
        const subUrl = SUB_BASE + "/" + userId;

        let content = "";

        if (cmd === "sub") {
          content = "\u26A1 **Lekklir VPN \u2014 \u0412\u0430\u0448\u0430 \u043F\u043E\u0434\u043F\u0438\u0441\u043A\u0430**\n\n\uD83D\uDC64 **" + username + "**\n\uD83D\uDD17 \u0421\u0441\u044B\u043B\u043A\u0430:\n```\n" + subUrl + "\n```\n\uD83D\uDCF1 \u0421\u043A\u0430\u0447\u0430\u0439\u0442\u0435 **Happ** \u0438\u043B\u0438 **V2RayTun**, \u0432\u0441\u0442\u0430\u0432\u044C\u0442\u0435 \u0441\u0441\u044B\u043B\u043A\u0443 \u0432 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435\n\u267E\uFE0F \u0411\u0435\u0437\u043B\u0438\u043C\u0438\u0442\u043D\u044B\u0439 \u0442\u0440\u0430\u0444\u0438\u043A\n\u26A0\uFE0F \u0411\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u044B\u0439, \u043C\u043E\u0436\u0435\u0442 \u0440\u0430\u0431\u043E\u0442\u0430\u0442\u044C \u043D\u0435\u0441\u0442\u0430\u0431\u0438\u043B\u044C\u043D\u043E";
        } else if (cmd === "servers") {
          content = "\u26A1 **\u0421\u0435\u0440\u0432\u0435\u0440\u044B**\n\n\uD83D\uDCF6 **LTE:** \uD83C\uDDF7\uD83C\uDDFA\uD83C\uDDEB\uD83C\uDDEE\uD83C\uDDF3\uD83C\uDDF1\uD83C\uDDEC\uD83C\uDDE7\uD83C\uDDE9\uD83C\uDDEA\uD83C\uDDF1\uD83C\uDDFB\uD83C\uDDEA\uD83C\uDDEA\uD83C\uDDEE\uD83C\uDDF9\uD83C\uDDF8\uD83C\uDDEA\n\uD83D\uDCE1 **WI-FI:** \uD83C\uDDF8\uD83C\uDDEA\uD83C\uDDE9\uD83C\uDDEA\uD83C\uDDF7\uD83C\uDDFA\uD83C\uDDEB\uD83C\uDDEE\uD83C\uDDF5\uD83C\uDDF1\n\n\u0418\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0439\u0442\u0435 `/sub` \u0447\u0442\u043E\u0431\u044B \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u0432\u0441\u0435 22 \u0441\u0435\u0440\u0432\u0435\u0440\u0430!";
        } else if (cmd === "help") {
          content = "\u26A1 **\u041F\u043E\u043C\u043E\u0449\u044C**\n\n`/sub` \u2014 \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u043F\u043E\u0434\u043F\u0438\u0441\u043A\u0443\n`/servers` \u2014 \u0441\u043F\u0438\u0441\u043E\u043A \u0441\u0435\u0440\u0432\u0435\u0440\u043E\u0432\n`/help` \u2014 \u043F\u043E\u043C\u043E\u0449\u044C\n\n\uD83C\uDF10 https://lekklir-vpn-new.sahzada33vpn.workers.dev";
        }

        return new Response(JSON.stringify({ type: 4, data: { content, flags: 64 } }), {
          headers: { "Content-Type": "application/json" }
        });
      }

      return new Response("ok");
    }

    // =================== SETUP PAGE ===================
    if (path === "/setup") {
      const tgToken = env.TELEGRAM_TOKEN;
      const workerUrl = url.origin;
      let tgStatus = "не настроен";
      if (tgToken) {
        const r = await fetch("https://api.telegram.org/bot" + tgToken + "/setWebhook?url=" + workerUrl + "/telegram");
        const j = await r.json();
        tgStatus = j.ok ? "webhook установлен!" : JSON.stringify(j);
      }
      return new Response("Telegram: " + tgStatus + "\nDiscord: настрой вручную через discord.com/developers", {
        headers: { "Content-Type": "text/plain; charset=utf-8" }
      });
    }

    return new Response("Lekklir VPN Bot is running!", { headers: { "Content-Type": "text/plain" } });
  }
}
