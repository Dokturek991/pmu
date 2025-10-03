// Made by the Project Minecolonies Developers – please don’t use, share, or modify in other modpacks without our permission.  
// For questions or permissions, reach out to the Project Minecolonies team on Discord or Github. 

ServerEvents.recipes(event => {
    // === Refined Storage: Creative Controller Shaped Recipe ===
    event.shaped(
        Item.of('refinedstorage:creative_controller', 1),
        [
            'ABA',
            'CDC',
            'ACA'
        ],
        {
            A: Item.of('refinedstorage:quartz_enriched_iron'),
            B: Item.of('minecraft:echo_shard'),
            C: Item.of('refinedstorage:silicon'),
            D: Item.of('silentgems:chaos_essence_block')
        }
    );

    // === Creative Controller Recolor Recipes ===
    const colors = [
        'white','orange','magenta','yellow','lime','pink','gray',
        'light_gray','cyan','purple','blue','brown','green','red','black'
    ];

    colors.forEach(toColor => {
        event.shapeless(
            Item.of(`refinedstorage:${toColor}_creative_controller`),
            [
                { tag: 'refinedstorage:creative_controllers' },
                Item.of(`minecraft:${toColor}_dye`)
            ]
        );
    });

    // Special case: Light Blue Creative Controller
    event.shapeless(
        Item.of('refinedstorage:creative_controller', 1),
        [
            { tag: 'refinedstorage:creative_controllers' },
            Item.of('minecraft:light_blue_dye')
        ]
    );

    // === Grid Recipe ===
    event.shaped(
        Item.of('refinedstorage:grid', 1),
        [
            'ABG',
            'DEC',
            'AFH'
        ],
        {
            A: 'refinedstorage:improved_processor',
            B: 'refinedstorage:construction_core',
            C: '#c:glass_blocks',
            D: 'refinedstorage:quartz_enriched_iron',
            E: 'minecolonies:blockhutwarehouse',
            F: 'refinedstorage:destruction_core',
            G: 'silentgems:sapphire_block',
            H: 'silentgems:ruby_block',
        }
    );

    // === Storage Monitor Recipe ===
    event.shaped(
        Item.of('refinedstorage:storage_monitor', 1),
        [
            'ABC',
            'DEC',
            'AFC'
        ],
        {
            A: 'refinedstorage:basic_processor',
            B: 'refinedstorage:construction_core',
            C: '#c:glass_blocks',
            D: 'refinedstorage:quartz_enriched_iron',
            E: 'minecolonies:blockhutdeliveryman',
            F: 'refinedstorage:destruction_core'
        }
    );

    console.log('Custom Refined Storage recipes and recolors added!');
});

// Made by the Project Minecolonies Developers – please don’t use, share, or modify in other modpacks without our permission.  
// For questions or permissions, reach out to the Project Minecolonies team on Discord or Github. 