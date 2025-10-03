// Made by the Project Minecolonies Developers – please don’t use, share, or modify in other modpacks without our permission.  
// For questions or permissions, reach out to the Project Minecolonies team on Discord or Github.

ServerEvents.recipes(event => {
    // Refined Storage - grouped items
    const items = [
        'disk_drive','machine_casing','creative_storage_block',
        '1k_storage_block','4k_storage_block','16k_storage_block','64k_storage_block',
        '64b_fluid_storage_block','256b_fluid_storage_block','1024b_fluid_storage_block','4096b_fluid_storage_block',
        'creative_fluid_storage_block','creative_portable_grid',
        '1k_storage_part','4k_storage_part','16k_storage_part','64k_storage_part',
        '1k_storage_disk','4k_storage_disk','16k_storage_disk','64k_storage_disk','creative_storage_disk',
        '64b_fluid_storage_part','256b_fluid_storage_part','1024b_fluid_storage_part','4096b_fluid_storage_part',
        '64b_fluid_storage_disk','256b_fluid_storage_disk','1024b_fluid_storage_disk','4096b_fluid_storage_disk','creative_fluid_storage_disk',
        'storage_housing','debug_stick','upgrade','speed_upgrade','stack_upgrade','silk_touch_upgrade',
        'fortune_1_upgrade','fortune_2_upgrade','fortune_3_upgrade','regulator_upgrade','range_upgrade','creative_range_upgrade',
        'autocrafting_upgrade','wireless_autocrafting_monitor','creative_wireless_autocrafting_monitor',
        'configuration_card','network_card','security_card','fallback_security_card','pattern',
        'importer','exporter','constructor','destructor','wireless_transmitter','pattern_grid','portable_grid',
        'detector','interface','network_transmitter','network_receiver','security_manager','relay',
        'disk_interface','autocrafter','autocrafter_manager','autocrafting_monitor',
        'wireless_grid','creative_wireless_grid','creative_controller','grid','storage_monitor'
    ];

    items.forEach(item => event.remove({ output: `refinedstorage:${item}` }));

    // Colored block variants
    const colors = [
        'white','orange','magenta','light_blue','yellow','lime','pink','gray',
        'light_gray','cyan','purple','blue','brown','green','red','black'
    ];

    const coloredBlocks = [
        'creative_controller','constructor','destructor','wireless_transmitter','pattern_grid',
        'detector','network_transmitter','network_receiver','security_manager','relay',
        'disk_interface','autocrafter','autocrafter_manager','autocrafting_monitor'
    ];

    colors.forEach(color => {
        coloredBlocks.forEach(block => {
            event.remove({ output: `refinedstorage:${color}_${block}` });
        });
    });
});

// Made by the Project Minecolonies Developers – please don’t use, share, or modify in other modpacks without our permission.  
// For questions or permissions, reach out to the Project Minecolonies team on Discord or Github.