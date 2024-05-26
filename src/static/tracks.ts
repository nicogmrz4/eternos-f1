import { hungaryGPResult } from "./results/hungary"
import { belgiumGPResult } from "./results/belgium"
import type { TrackInterface } from "@/interfaces/track"
import { TrackDTO } from "@/dto/trackDTO"


export default <TrackInterface[]> [
    new TrackDTO(
        'Hungarian Grand Prix',
        'Hungaroring',
        'fi fi-hu',
        true,
        hungaryGPResult
    ),
    new TrackDTO(
        'Belgian Grand Prix',
        'Circuit de Spa-Francorchamps',
        'fi fi-be',
        true,
        belgiumGPResult
    ),
    new TrackDTO(
        'Dutch Grand Prix',
        'Circuit Brugge - Kuurne',
        'fi fi-nl',
        false,
        []
    )
]