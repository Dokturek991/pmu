// Made by the Project Minecolonies Developers – please don’t use, share, or modify in other modpacks without our permission.  
// For questions or permissions, reach out to the Project Minecolonies team on Discord or Github.  

PlayerEvents.loggedIn(event => {
    // Hardcoded rank arrays (add usernames here as players upgrade) - moved inside event to avoid global redeclaration
    const donators = ['LylenaEry','darky520'];
    const loyalSupporters = ['Semmy_44', 'Jenaphira', 'TrikSteve', 'Expadax'];
    const vaultGuardians = ['FIegaIkCz', 'kropka_05', 'NeoFax75', 'KryptcFalcon', 'ZeeKee_CzeCza', 'NatchoBoy'];

    const player = event.player;
    const name = player.username;
    const uuid = player.uuid; // Kept for logging, but not used for checks (using username for ease)

    // Function to determine the player's rank based on username
    const getRank = (username) => {
        if (vaultGuardians.includes(username)) return 'vault_guardian';
        if (loyalSupporters.includes(username)) return 'loyal_supporter';
        if (donators.includes(username)) return 'donator';
        return null; // Not in any rank
    };

    // Function to attempt applying bonuses (single attempt)
    const applyBonuses = () => {
        console.log(`[PMMO Bonuses]: Starting applyBonuses for '${name}' - UUID: ${uuid || 'null'}`);
        
        // Get the player's rank (isolated declaration)
        let playerRank = getRank(name);
        console.log(`[PMMO Bonuses]: Determined rank: ${playerRank || 'none'}`);

        try {
            // Check if player is valid
            if (!player || !uuid) {
                console.log(`[PMMO Bonuses]: Player '${name}' is invalid or has no UUID. Skipping bonuses.`);
                return;
            }

            if (!playerRank) {
                console.log(`[PMMO Bonuses]: Player '${name}' has no rank. Skipping bonuses.`);
                return; // No message for regular players (not eligible)
            }

            console.log(`[PMMO Bonuses]: Rank detected for '${name}': ${playerRank}. Preparing bonuses (delaying 15 seconds).`);

            // Define bonuses based on rank (customize these as needed)
            let multiplier;
            if (playerRank === 'vault_guardian') multiplier = 1.25; // 25% boost
            else if (playerRank === 'loyal_supporter') multiplier = 1.2; // 20% boost
            else if (playerRank === 'donator') multiplier = 1.1; // 10% boost

            // Delay the actual bonus application by 15 seconds (300 ticks) after rank detection
            event.server.scheduleInTicks(300, () => {
                // Define skills array inside the callback to avoid redeclaration issues
                const skills = [
                    'agility',
                    'alchemy',
                    'archery',
                    'building',
                    'combat',
                    'cooking',
                    'charisma',
                    'crafting',
                    'endurance',
                    'excavation',
                    'farming',
                    'fishing',
                    'flying',
                    'hunter',
                    'magic',
                    'mining',
                    'smithing',
                    'swimming',
                    'taming',
                    'woodcutting'
                ];

                console.log(`[PMMO Bonuses]: Applying delayed bonuses for '${name}' (rank: ${playerRank}, multiplier: ${multiplier}) to ${skills.length} skills.`);

                let success = true;

                // Construct and execute commands on the fly using a basic indexed loop
                for (let i = 0; i < skills.length; i++) {
                    let skill = skills[i];
                    let cmd = `/pmmo admin ${name} adminBonus ${skill} ${multiplier}`;
                    try {
                        event.server.runCommandSilent(cmd);
                    } catch (cmdError) {
                        console.error(`[PMMO Bonuses]: Failed to execute '${cmd}' for '${name}': ${cmdError}`);
                        success = false;
                    }
                }

                // Log summary instead of per-command success (to reduce noise)
                if (success) {
                    console.log(`[PMMO Bonuses]: All ${skills.length} bonuses applied successfully for '${name}'.`);
                } else {
                    console.log(`[PMMO Bonuses]: Some bonuses failed to apply for '${name}'. See errors above.`);
                }

                // Notify player only if they have a rank and bonuses finished applying
                if (success) {
                    // Gold message on success (only for ranked players)
                    event.server.runCommandSilent(`/tellraw ${name} {"text":"Bonuses applied successfully! Your ${playerRank.replace('_', ' ')} rank gives x${multiplier} to all skills.","color":"gold"}`);
                } else {
                    // Red message on failure (only for ranked players; remove this block if you want silence on errors)
                    event.server.runCommandSilent(`/tellraw ${name} {"text":"Error applying ${playerRank.replace('_', ' ')} bonuses. Contact an admin.","color":"red"}`);
                }
            });
        } catch (error) {
            console.error(`[PMMO Bonuses]: Error processing bonuses for '${name}' at ${new Date().toUTCString()}: ${error}`);
            // Optional: Red message on general error (only if ranked; adjust as needed)
            if (playerRank) {
                event.server.runCommandSilent(`/tellraw ${name} {"text":"Error applying bonuses. Contact an admin.","color":"red"}`);
            }
        }
    };

    // Single attempt after 200 ticks (10 seconds) delay
    event.server.scheduleInTicks(200, applyBonuses);
});

// Made by the Project Minecolonies Developers – please don’t use, share, or modify in other modpacks without our permission.  
// For questions or permissions, reach out to the Project Minecolonies team on Discord or Github.  