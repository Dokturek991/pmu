// Made by the Project Minecolonies Developers – please don’t use, share, or modify in other modpacks without our permission.  
// For questions or permissions, reach out to the Project Minecolonies team on Discord or Github. 

ServerEvents.recipes(event => {
    // === Minecraft: Mud Recipe ===
    event.shaped(
        Item.of('minecraft:mud', 8),
        [
            'AAA',
            'ABA',
            'AAA'
        ],
        {
            A: Item.of('minecraft:dirt'),
            B: Item.of('silentgems:chaos_essence')
        }
    );
});

// Made by the Project Minecolonies Developers – please don’t use, share, or modify in other modpacks without our permission.  
// For questions or permissions, reach out to the Project Minecolonies team on Discord or Github. 