// Made by the Project Minecolonies Developers – please don’t use, share, or modify in other modpacks without our permission.  
// For questions or permissions, reach out to the Project Minecolonies team on Discord or Github. 

ServerEvents.recipes(event => {
    // === Croptopia: Mountain Salt Recipe ===
    event.shaped(
        Item.of('croptopia:mountain_salt', 1),
        [
            'ACA',
            'ABA',
            'ACA'
        ],
        {
            A: Item.of('croptopia:salt'),
            B: Item.of('silentgems:chaos_essence'),
            C: Item.of('minecraft:nether_star')
        }
    );
});

// Made by the Project Minecolonies Developers – please don’t use, share, or modify in other modpacks without our permission.  
// For questions or permissions, reach out to the Project Minecolonies team on Discord or Github. 