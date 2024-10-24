cmd({
    pattern: "gemini",
    alias: ["gai", "gem"],
    desc: "Ask Google Gemini AI any question.",
    category: "AI",
    react: "👾",
    use: '.gemini <your question>',
    filename: __filename
}, async (conn, mek, m, { from, quoted, body, args, q, reply }) => {
    try {
        
        if (!q) {
            return reply("Please provide a question for Google Gemini AI. Example: .gemini What is the weather?");
        }

       
        const apiUrl = `https://dark-yasiya-api-new.vercel.app/ai/gemini?q=${encodeURIComponent(q)}`;

       
        const response = await axios.get(apiUrl);

       
        if (!response.data.status) {
            return reply("Failed to fetch a response from Google Gemini AI. Please try again later.");
        }

        
        const geminiResponse = response.data.result;

       
        await conn.sendMessage(from, { text: geminiResponse }, { quoted });

    } catch (e) {
        console.error(e);
        reply(`An error occurred: ${e.message}`);
    }
});
