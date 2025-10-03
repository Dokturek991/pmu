// Made by the Project Minecolonies Developers – please don’t use, share, or modify in other modpacks without our permission.  
// For questions or permissions, reach out to the Project Minecolonies team on Discord or Github.

ServerEvents.recipes(event => {
    // Silent Gems teleporters + utilities
    const gems = [
        'ruby','carnelian','topaz','citrine','heliodor','moldavite','peridot','turquoise',
        'kyanite','sapphire','iolite','alexandrite','ammolite','rose_quartz','black_diamond',
        'white_diamond','garnet','aquamarine','tanzanite','opal','pearl'
    ];

    // Normal teleporters
    gems.forEach(gem => {
        event.remove({ output: `silentgems:${gem}_teleporter` });
    });

    // Redstone teleporters
    gems.forEach(gem => {
        event.remove({ output: `silentgems:${gem}_redstone_teleporter` });
    });

    // Misc teleport items
    event.remove({ output: 'silentgems:teleporter_linker' });
    event.remove({ output: 'silentgems:teleporter_anchor' });
});

// Made by the Project Minecolonies Developers – please don’t use, share, or modify in other modpacks without our permission.  
// For questions or permissions, reach out to the Project Minecolonies team on Discord or Github.