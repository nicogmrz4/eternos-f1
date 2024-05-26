import { hungaryGPResult } from "./results/hungary"
import { belgiumGPResult } from "./results/belgium"
import type { TrackInterface } from "@/interfaces/track"
import { TrackDTO } from "@/dto/trackDTO"


export default <TrackInterface[]> [
    new TrackDTO(
        'GP Hungría',
        'Hungaroring',
        'fi fi-hu',
        true,
        hungaryGPResult
    ),
    new TrackDTO(
        'GP Bélgica',
        'Circuito de Spa-Francorchamps',
        'fi fi-be',
        true,
        belgiumGPResult
    ),
    new TrackDTO(
        'GP Holanda',
        'Circuito de Zandvoort',
        'fi fi-nl',
        false,
        []
    )
]