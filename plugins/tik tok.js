// Import the necessary functions and configurations
const { fetchJson } = require('../lib/functions') // Utility for API requests
const config = require('../config')               // Configuration file (for API keys or settings)
const { cmd, commands } = require('../command')   // Command registration utilities

// TikTok Info Command
cmd({
    pattern: "tiktokinfo",
    react: "🎵",
    desc: "Get TikTok video info from a public URL",
    category: "media",
    use: '.tiktokinfo <TikTok URL>',
    filename: __filename
},
async (conn, mek, m, { from, q, reply }) => {
    try {
        if (!q) return reply('Please provide a TikTok video URL.') // Ensure the URL is provided

        const tiktokUrl = q.trim()

        // Fetch TikTok info from the public URL
        const response = await fetchJson('https://raw.githubusercontent.com/prabathLK/PUBLIC-URL-HOST-DB/main/public/url.json')

        // Check if the response is valid
        if (!response) return reply('Error fetching TikTok video info. Please try again.')

        // Find the TikTok info in the response
        const videoInfo = response.find(item => item.url === tiktokUrl)

        // If video info is found
        if (videoInfo) {
            const { title, author, duration, views, likes } = videoInfo // Adjust keys according to the JSON structure

            // Create the message with TikTok info
            const message = `
*TikTok Video Info:*
👤 Author: ${author}
🎵 Title: ${title}
🕒 Duration: ${duration}s
👁 Views: ${views}
❤️ Likes: ${likes}
            `

            // Reply with the information
            reply(message)
        } else {
            reply('No information found for this TikTok video.')
        }

    } catch (e) {
        console.error(e)
        reply('Error fetching TikTok video info.')
    }
})
