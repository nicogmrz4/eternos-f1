import type { TrackInterface } from "@/interfaces/track"
import { TrackDTO } from "@/dto/trackDTO"
import * as results from "@/static/results"

export default <TrackInterface[]> [
    new TrackDTO(
        'GP Holanda',
        'Circuito de Zandvoort',
        'fi fi-nl',
        true,
        results.netherlandsGPResult
    ),
    new TrackDTO(
        'GP Gran Bretaña',
        'Circuito de Silverstone',
        'fi fi-gb',
        true,
        results.greatBritain
    ),
    new TrackDTO(
        'GP España',
        'Circuito de Barcelona-Cataluña',
        'fi fi-es',
        true,
        results.spainGPResult
    ),
    new TrackDTO(
        'GP Japón',
        'Circuito de Suzuka',
        'fi fi-jp',
        true,
        results.japanGPResult
    ),
    new TrackDTO(
        'GP Mexico',
        'Autodromo Hermanos Rodríguez',
        'fi fi-mx',
        true,
        results.mexicoGPResult
    ),    
    new TrackDTO(
        'GP Canadá',
        'Circuito Gilles Villeneuve',
        'fi fi-ca',
        true,
        results.canadaGPResult
    ),    
    new TrackDTO(
        'GP Emiratos Árabes',
        'Circuito Yas Marina',
        'fi fi-ae',
        true,
        results.abuDabiGPResult
    ),    
    new TrackDTO(
        'GP Estados Unidos',
        'Circuito de las Américas',
        'fi fi-us',
        true,
        results.usaGPResult
    ),
    new TrackDTO(
        'GP Azerbaiyán',
        'Circuito callejero de Bakú',
        'fi fi-az',
        true,
        results.azerbaijanGPResult
    ),    
    new TrackDTO(
        'GP Italia',
        'Autodromo internacional de Monza',
        'fi fi-it',
        true,
        results.italyGPResult
    ),
    new TrackDTO(
        'GP Bélgica',
        'Circuito de Spa-Francorchamps',
        'fi fi-be',
        true,
        results.belgiumGPResult
    ),
    new TrackDTO(
        'GP Singapur',
        'Circuito callejero de Marina Bay',
        'fi fi-sg',
        true,
        results.singaporeGPResult
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