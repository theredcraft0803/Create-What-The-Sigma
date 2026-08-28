StartupEvents.registry('item', event => {
    event.create('kubejs:coal_rod')
    .texture('kubejs:item/coal_rod')
    .maxStackSize(64)
    .burnTime(8000)
    .displayName('Coal Rod')

    event.create('kubejs:incomplete_blaze_rod')
    .texture('kubejs:item/incomplete_blaze_rod')
    .maxStackSize(64)
    .displayName('Incomplete Blaze Rod')

    event.create('kubejs:netherite_fragment')
    .texture('kubejs:item/netherite_fragment')
    .maxStackSize(64)
    .fireResistant(true)
    .rarity('UNCOMMON')
    .displayName('Netherite Fragment')
})
