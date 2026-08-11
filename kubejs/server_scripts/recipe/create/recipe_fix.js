ServerEvents.recipes(event => {
    event.remove({ id: 'aeronautics:crushing/end_stone_powder' })

    event.recipes.create.crushing([CreateItem.of('create_netherless:netherite_fragment', 0.05), CreateItem.of('minecraft:wither_skeleton_skull', 0.05), CreateItem.of('minecraft:coal', 0.5)], 'minecraft:blackstone').id('trc:blackstone_crushing')
    event.remove({ id: 'create_netherless:netherite_fragment_by_crushing' })
    event.remove({ id: 'create_ultimate_factory:crushing_blackstone' })

    event.recipes.create.crushing([CreateItem.of('minecraft:gold_nugget', 0.20), CreateItem.of('create:crushed_raw_gold', 0.20), CreateItem.of('createaddition:electrum_nugget', 0.5)], 'create:ochrum').id('trc:ochrum_crushing')
    event.remove({ id: 'create:crushing/ochrum_recycling' })
    event.remove({ id: 'create:crushing/ochrum' })
})
