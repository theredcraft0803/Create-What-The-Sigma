ServerEvents.recipes(event => {
    const blaze_rod_transitional = 'kubejs:incomplete_blaze_rod'
    event.recipes.create.sequenced_assembly(
        'minecraft:blaze_rod',
        'kubejs:coal_rod',
        [
            event.recipes.create.filling(
                blaze_rod_transitional,
                [blaze_rod_transitional, Fluid.of('minecraft:lava', 250)]
            ),
            event.recipes.create.filling(
                blaze_rod_transitional,
                [blaze_rod_transitional, Fluid.of('minecraft:lava', 250)]
            ),
            event.recipes.create.pressing(
                blaze_rod_transitional,
                blaze_rod_transitional
            )
        ]
    )
        .transitionalItem(blaze_rod_transitional)
        .loops(4)
        .id('blaze_rod')

    event.recipes.create.filling('minecraft:netherrack', [Fluid.of('minecraft:water', 500), 'minecraft:magma_block']).id('netherrack_filling')
    event.recipes.create.filling('minecraft:magma_block', [Fluid.of('minecraft:lava', 500), 'minecraft:blackstone']).id('magma_block_filling')

    event.custom({
        type: 'create:sandpaper_polishing',
        ingredients: [
            {
                item: 'minecraft:coal_block'
            }
        ],
        results: [
            {
                id: 'kubejs:coal_rod',
                count: 2
            }
        ]
    }).id('coal_rod')

    event.shaped(
        Item.of('minecraft:ancient_debris'),
        [
            'FFF',
            'FNF',
            'FFF'
        ],
        {
            F: 'kubejs:netherite_fragment',
            N: 'minecraft:netherrack'
        }
    ).id('ancient_debris_from_fragment')
})
