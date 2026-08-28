ServerEvents.recipes(event => {
    event.remove({ id: 'createthrusters:physics_staff'})
    
    event.recipes.create.mechanical_crafting('createthrusters:physics_staff', [
        ' G',
        'HW',
        'SM',
        ' P'
    ], {
        G: 'simulated:gyroscopic_mechanism',
        W: 'create:wrench',
        H: 'simulated:honey_glue',
        S: 'minecraft:slime_ball',
        M: 'tfmg:steel_mechanism',
        P: 'aeronautics_utility_objects:hydraulic_rod'
    }).id('physics_staff')
})
