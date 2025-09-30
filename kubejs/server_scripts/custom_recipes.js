ServerEvents.recipes(event => {

    // === Original Recipes ===
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

    // === Recolor Recipes using Tag ===
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

event.shapeless(
  Item.of('refinedstorage:creative_controller', 1), // arg 1: output
  [
     { tag: 'refinedstorage:creative_controllers' },
	Item.of('minecraft:light_blue_dye')
 ]
)

event.shaped(
  Item.of('refinedstorage:grid', 1), // arg 1: output
  [
    'ABG',
    'DEC', // arg 2: the shape (array of strings)
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
)

event.shaped(
  Item.of('refinedstorage:storage_monitor', 1), // arg 1: output
  [
    'ABC',
    'DEC', // arg 2: the shape (array of strings)
    'AFC'
  ],
  {
    A: 'refinedstorage:basic_processor',
    B: 'refinedstorage:construction_core',
    C: '#c:glass_blocks',
    D: 'refinedstorage:quartz_enriched_iron',
    E: 'minecolonies:blockhutdeliveryman',
    F: 'refinedstorage:destruction_core'  }
)


    console.log('Custom recipes and Creative Controller recolor recipes added!');
});
