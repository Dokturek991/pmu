// Made by the Project Minecolonies Developers – please don’t use, share, or modify in other modpacks without our permission.  
// For questions or permissions, reach out to the Project Minecolonies team on Discord or Github.  


ClientEvents.lang('en_us', event => {
    const colors = [
        'white','orange','magenta','light_blue','yellow','lime','pink','gray',
        'light_gray','cyan','purple','blue','brown','green','red','black'
    ];

    // === Controllers ===
    event.renameItem('refinedstorage:creative_controller', 'Controller');
    colors.forEach(color => {
        event.renameItem(`refinedstorage:${color}_creative_controller`, 'Controller');
    });

    // === Processors ===
    event.renameItem('refinedstorage:basic_processor', 'Apprentice Core');
    event.renameItem('refinedstorage:improved_processor', 'Journeyman Core');
    event.renameItem('refinedstorage:advanced_processor', 'Masterwork Core');

    // === Raw Processors ===
    event.renameItem('refinedstorage:raw_basic_processor', 'Unfinished Apprentice Core');
    event.renameItem('refinedstorage:raw_improved_processor', 'Unfinished Journeyman Core');
    event.renameItem('refinedstorage:raw_advanced_processor', 'Unfinished Masterwork Core');

    // === Other Components ===
    event.renameItem('refinedstorage:processor_binding', 'Slimey Fittings');
    event.renameItem('refinedstorage:silicon', 'Polished Quartz');

    // === Functional Cores ===
    event.renameItem('refinedstorage:construction_core', "Builder's Seal");
    event.renameItem('refinedstorage:destruction_core', "Miner's Seal");
});

// Made by the Project Minecolonies Developers – please don’t use, share, or modify in other modpacks without our permission.  
// For questions or permissions, reach out to the Project Minecolonies team on Discord or Github.  
