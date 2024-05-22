interface Track {
    name: string
    circuit: string,
    flag: string
    isRaced: boolean
}

export default <Track[]>[
    {
        name: 'Hungarian Grand Prix',
        circuit: 'Hungaroring',
        flag: 'fi fi-hu',
        isRaced: false
    },
    {
        name: 'Belgian Grand Prix',
        circuit: 'Circuit de Spa-Francorchamps',
        flag: 'fi fi-be',
        isRaced: false
    },
    {
        name: 'Dutch Grand Prix',
        circuit: 'Circuit Brugge - Kuurne',
        flag: 'fi fi-nl',
        isRaced: false
    }
]