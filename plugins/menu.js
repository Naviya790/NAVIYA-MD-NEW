const {readEnv} = require('../lib/database')
const {cmd , commands} = require('../command')

cmd({
    pattern: "menu",
    desc: "get cmd list ",
    category: "main",
    react: "⚡",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
const config = await readEnv();
    
    let mainMenu = new Buttons(
    'Welcome to the Main Menu:', // Main message
    [
        { body: 'Commands List' },  // Button 1
        { body: 'Help' },           // Button 2
        { body: 'Contact Us' },      // Button 3
        { body: 'Sub Menu' }         // Sub menu button
    ],
    'Main Menu',                    // Title/Header
    'Choose an option from below'   // Footer text
);

    // Sending the main menu to the user
    await client.sendMessage(message.from, mainMenu);
});

// Define a sub-menu command for additional options
cmd({
    pattern: "submenu",  // Submenu pattern
    desc: "Show sub menu with extra options", // Description for submenu
    category: "main",     // Command category
    react: "⚡",
    filename: __filename
}, async (message) => {
    // Creating a sub-menu with more options
    let subMenu = new Buttons(
        'This is the Sub Menu:', // Main message
        [
            { body: 'Option 1' },  // Sub menu button 1
            { body: 'Option 2' },  // Sub menu button 2
            { body: 'Back to Main Menu' } // Back to main menu button
        ], 
        'Sub Menu',                      // Title/Header
        'Choose an option from below'    // Footer text
    );

    // Sending the sub menu to the user
    await client.sendMessage(message.from, subMenu);
});

// When a message is received
client.on('message', async msg => {
    if (msg.body.toLowerCase() === 'mainmenu') {
        // Send the main menu when the user types 'mainmenu'
        let mainMenu = new Buttons(
            'Welcome to the Main Menu:', // Main message
            [
                { body: 'Commands List' },  // Button 1
                { body: 'Help' },           // Button 2
                { body: 'Contact Us' },      // Button 3
                { body: 'Sub Menu' }         // Sub menu button
            ], 
            'Main Menu',                    // Title/Header
            'Choose an option from below'   // Footer text
        );
        await client.sendMessage(msg.from, mainMenu);
    }

    // Handle specific button presses
    if (msg.body === 'Commands List') {
        await client.sendMessage(msg.from, 'Here is the list of available commands...');
    } else if (msg.body === 'Help') {
        await client.sendMessage(msg.from, 'Here is some help information...');
    } else if (msg.body === 'Contact Us') {
        await client.sendMessage(msg.from, 'You can contact us at support@example.com');
    } else if (msg.body === 'Sub Menu') {
        // Send the sub menu when the Sub Menu button is pressed
        let subMenu = new Buttons(
            'This is the Sub Menu:', // Main message
            [
                { body: 'Option 1' },  // Sub menu option 1
                { body: 'Option 2' },  // Sub menu option 2
                { body: 'Back to Main Menu' } // Back to main menu button
            ], 
            'Sub Menu',                      // Title/Header
            'Choose an option from below'    // Footer text
        );
        await client.sendMessage(msg.from, subMenu);
    } else if (msg.body === 'Back to Main Menu') {
        // Go back to the main menu if Back to Main Menu button is pressed
        let mainMenu = new Buttons(
            'Welcome to the Main Menu:', // Main message
            [
                { body: 'Commands List' },  // Button 1
                { body: 'Help' },           // Button 2
                { body: 'Contact Us' },      // Button 3
                { body: 'Sub Menu' }         // Sub menu button
            ], 
            'Main Menu',                    // Title/Header
            'Choose an option from below'   // Footer text
        );
        await client.sendMessage(msg.from, mainMenu);
    }
});

// Start the client
client.initialize();
