import type { TrackInterface } from "@/interfaces/track"
import { TrackDTO } from "@/dto/trackDTO"
import { netherlandsGPResult } from "./results/netherlands"
import { greatBritain } from "./results/great-britain"
import { spainGPResult } from "./results/spain"
import { japanGPResult } from "./results/japan"
import { mexicoGPResult } from "./results/mexico"
import { canadaGPResult } from "./results/canada"
import { abuDabiGPResult } from "./results/abu-dabi"


export default <TrackInterface[]> [
    new TrackDTO(
        'GP Holanda',
        'Circuito de Zandvoort',
        'fi fi-nl',
        true,
        netherlandsGPResult
    ),
    new TrackDTO(
        'GP Gran Bretaña',
        'Circuito de Silverstone',
        'fi fi-gb',
        true,
        greatBritain
    ),
    new TrackDTO(
        'GP España',
        'Circuito de Barcelona-Cataluña',
        'fi fi-es',
        true,
        spainGPResult
    ),
    new TrackDTO(
        'GP Japón',
        'Circuito de Suzuka',
        'fi fi-jp',
        true,
        japanGPResult
    ),
    new TrackDTO(
        'GP Mexico',
        'Autodromo Hermanos Rodríguez',
        'fi fi-mx',
        true,
        mexicoGPResult
    ),    
    new TrackDTO(
        'GP Canadá',
        'Circuito Gilles Villeneuve',
        'fi fi-ca',
        true,
        canadaGPResult
    ),    
    new TrackDTO(
        'GP Emiratos Árabes',
        'Circuito Yas Marina',
        'fi fi-ae',
        true,
        abuDabiGPResult
    ),    
    new TrackDTO(
        'GP Estados Unidos',
        'Circuito de las Américas',
        'fi fi-us',
        false,
        []
    ),
    new TrackDTO(
        'GP Azerbaiyán',
        'Circuito callejero de Bakú',
        'fi fi-az',
        false,
        []
    ),    
    new TrackDTO(
        'GP Italia',
        'Autodromo internacional de Monza',
        'fi fi-it',
        false,
        []
    ),
    new TrackDTO(
        'GP Bélgica',
        'Circuito de Spa-Francorchamps',
        'fi fi-be',
        false,
        []
    ),
    new TrackDTO(
        'GP Singapur',
        'Circuito callejero de Marina Bay',
        'fi fi-sg',
        false,
        []
    ),
    new TrackDTO(
        'GP Vietnam',
        'Circuito callejero de Hanói',
        'fi fi-vn',
        false,
        []
    ),
    new TrackDTO(
        'GP Australia',
        'Circuito de Albert Park',
        'fi fi-au',
        false,
        []
    ),
]