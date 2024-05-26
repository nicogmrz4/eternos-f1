import type { DriverResultInterface } from "@/interfaces/driverResult"
import { hungaryGPResult } from "./results/hungary"
import { belgiumGPResult } from "./results/belgium"

interface Track {
    name: string
    circuit: string,
    flag: string
    isRaced: boolean
    result?: DriverResultInterface[]
}

export default <Track[]>[
    {
        name: 'Hungarian Grand Prix',
        circuit: 'Hungaroring',
        flag: 'fi fi-hu',
        isRaced: true,
        result: hungaryGPResult
    },
    {
        name: 'Belgian Grand Prix',
        circuit: 'Circuit de Spa-Francorchamps',
        flag: 'fi fi-be',
        isRaced: true,
        result: belgiumGPResult
    },
    {
        name: 'Dutch Grand Prix',
        circuit: 'Circuit Brugge - Kuurne',
        flag: 'fi fi-nl',
        isRaced: false,
        result: null
    }
]