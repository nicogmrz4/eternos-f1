import type { TrackInterface } from "@/interfaces/track"
import { Track } from "@/models/track"
import * as results from "@/static/results"

export default <TrackInterface[]> [
    new Track(
        'GP Holanda',
        'Circuito de Zandvoort',
        'fi fi-nl',
        true,
        results.netherlandsGPResult
    ),
    new Track(
        'GP Gran Bretaña',
        'Circuito de Silverstone',
        'fi fi-gb',
        true,
        results.greatBritain
    ),
    new Track(
        'GP España',
        'Circuito de Barcelona-Cataluña',
        'fi fi-es',
        true,
        results.spainGPResult
    ),
    new Track(
        'GP Japón',
        'Circuito de Suzuka',
        'fi fi-jp',
        true,
        results.japanGPResult
    ),
    new Track(
        'GP Mexico',
        'Autodromo Hermanos Rodríguez',
        'fi fi-mx',
        true,
        results.mexicoGPResult
    ),    
    new Track(
        'GP Canadá',
        'Circuito Gilles Villeneuve',
        'fi fi-ca',
        true,
        results.canadaGPResult
    ),    
    new Track(
        'GP Emiratos Árabes',
        'Circuito Yas Marina',
        'fi fi-ae',
        true,
        results.abuDabiGPResult
    ),    
    new Track(
        'GP Estados Unidos',
        'Circuito de las Américas',
        'fi fi-us',
        true,
        results.usaGPResult
    ),
    new Track(
        'GP Azerbaiyán',
        'Circuito callejero de Bakú',
        'fi fi-az',
        true,
        results.azerbaijanGPResult
    ),    
    new Track(
        'GP Italia',
        'Autodromo internacional de Monza',
        'fi fi-it',
        true,
        results.italyGPResult
    ),
    new Track(
        'GP Bélgica',
        'Circuito de Spa-Francorchamps',
        'fi fi-be',
        true,
        results.belgiumGPResult
    ),
    new Track(
        'GP Singapur',
        'Circuito callejero de Marina Bay',
        'fi fi-sg',
        false,
        []
    ),
    new Track(
        'GP Vietnam',
        'Circuito callejero de Hanói',
        'fi fi-vn',
        false,
        []
    ),
    new Track(
        'GP Australia',
        'Circuito de Albert Park',
        'fi fi-au',
        false,
        []
    ),
]