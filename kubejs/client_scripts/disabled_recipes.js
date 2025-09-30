RecipeViewerEvents.removeEntries('item', event => {
    // Samurai Dynasty
    event.remove('samurai_dynasty:shuriken');

    // Refined Storage - non-colored items to remove (fully unrolled)
    event.remove('refinedstorage:disk_drive');
    event.remove('refinedstorage:machine_casing');
    event.remove('refinedstorage:creative_storage_block');
    event.remove('refinedstorage:1k_storage_block');
    event.remove('refinedstorage:4k_storage_block');
    event.remove('refinedstorage:16k_storage_block');
    event.remove('refinedstorage:64k_storage_block');
    event.remove('refinedstorage:64b_fluid_storage_block');
    event.remove('refinedstorage:256b_fluid_storage_block');
    event.remove('refinedstorage:1024b_fluid_storage_block');
    event.remove('refinedstorage:4096b_fluid_storage_block');
    event.remove('refinedstorage:creative_fluid_storage_block');
    event.remove('refinedstorage:creative_portable_grid');
    event.remove('refinedstorage:1k_storage_part');
    event.remove('refinedstorage:4k_storage_part');
    event.remove('refinedstorage:16k_storage_part');
    event.remove('refinedstorage:64k_storage_part');
    event.remove('refinedstorage:1k_storage_disk');
    event.remove('refinedstorage:4k_storage_disk');
    event.remove('refinedstorage:16k_storage_disk');
    event.remove('refinedstorage:64k_storage_disk');
    event.remove('refinedstorage:creative_storage_disk');
    event.remove('refinedstorage:64b_fluid_storage_part');
    event.remove('refinedstorage:256b_fluid_storage_part');
    event.remove('refinedstorage:1024b_fluid_storage_part');
    event.remove('refinedstorage:4096b_fluid_storage_part');
    event.remove('refinedstorage:64b_fluid_storage_disk');
    event.remove('refinedstorage:256b_fluid_storage_disk');
    event.remove('refinedstorage:1024b_fluid_storage_disk');
    event.remove('refinedstorage:4096b_fluid_storage_disk');
    event.remove('refinedstorage:creative_fluid_storage_disk');
    event.remove('refinedstorage:storage_housing');
    event.remove('refinedstorage:debug_stick');
    event.remove('refinedstorage:upgrade');
    event.remove('refinedstorage:speed_upgrade');
    event.remove('refinedstorage:stack_upgrade');
    event.remove('refinedstorage:silk_touch_upgrade');
    event.remove('refinedstorage:fortune_1_upgrade');
    event.remove('refinedstorage:fortune_2_upgrade');
    event.remove('refinedstorage:fortune_3_upgrade');
    event.remove('refinedstorage:regulator_upgrade');
    event.remove('refinedstorage:range_upgrade');
    event.remove('refinedstorage:creative_range_upgrade');
    event.remove('refinedstorage:autocrafting_upgrade');
    event.remove('refinedstorage:wireless_autocrafting_monitor');
    event.remove('refinedstorage:creative_wireless_autocrafting_monitor');
    event.remove('refinedstorage:configuration_card');
    event.remove('refinedstorage:network_card');
    event.remove('refinedstorage:security_card');
    event.remove('refinedstorage:fallback_security_card');
    event.remove('refinedstorage:pattern');

    event.remove('refinedstorage:importer');
    event.remove('refinedstorage:exporter');
    event.remove('refinedstorage:constructor');
    event.remove('refinedstorage:destructor'); 
    event.remove('refinedstorage:wireless_transmitter');
    event.remove('refinedstorage:pattern_grid');
    event.remove('refinedstorage:portable_grid');
    event.remove('refinedstorage:detector'); 
    event.remove('refinedstorage:interface');
    event.remove('refinedstorage:network_transmitter');
    event.remove('refinedstorage:network_receiver');
    event.remove('refinedstorage:security_manager');  
    event.remove('refinedstorage:relay');
    event.remove('refinedstorage:disk_interface');
    event.remove('refinedstorage:autocrafter');
    event.remove('refinedstorage:autocrafter_manager');
    event.remove('refinedstorage:autocrafting_monitor');
    event.remove('refinedstorage:wireless_grid');
    event.remove('refinedstorage:creative_wireless_grid');
    event.remove('refinedstorage:controller');

    // Colored blocks to remove (looped)
    const colors = [
        'white','orange','magenta','light_blue','yellow','lime','pink','gray',
        'light_gray','cyan','purple','blue','brown','green','red','black'
    ];

    const coloredBlocks = [
        'controller','constructor','importer','exporter','destructor','wireless_transmitter','pattern_grid',
        'detector','network_transmitter','network_receiver','security_manager','relay',
        'disk_interface','autocrafter','autocrafter_manager','autocrafting_monitor'
    ];

    colors.forEach(color => {
        coloredBlocks.forEach(block => {
            event.remove(`refinedstorage:${color}_${block}`);
        });
    });
});
