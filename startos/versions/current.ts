import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.6.5:2',
  releaseNotes: {
    en_US:
      'TEST BUILD. Fixes the StartOS discovery regression: a StartOS container cannot see host LAN interfaces, so subnet auto-discovery found nothing and there was no way to add a miner by hand. Default scan now covers 192.168.0.0/21 and 10.0.0.0/21, saved miners outside those ranges are still scanned via their /24, and the miner switcher has a manual add field (single IP or CIDR). Also includes everything since 0.6.4: LAN scan speedup, Bitaxe pause/resume on AxeOS 2.14+, refreshed dependencies. Sideload only; not published to any registry.',
    es_ES:
      'COMPILACIÓN DE PRUEBA. Corrige la regresión de descubrimiento en StartOS: un contenedor StartOS no ve las interfaces LAN del host, por lo que el autodescubrimiento no encontraba nada y no había forma de añadir un minero manualmente. El escaneo por defecto ahora cubre 192.168.0.0/21 y 10.0.0.0/21, los mineros guardados fuera de esos rangos siguen escaneándose por su /24, y el selector de mineros tiene un campo de alta manual (IP suelta o CIDR). Incluye además todo lo de 0.6.4: escaneo LAN acelerado, pausa/reanudación Bitaxe en AxeOS 2.14+, dependencias actualizadas. Solo sideload; no publicado en ningún registro.',
    de_DE:
      'TEST-BUILD. Behebt die StartOS-Discovery-Regression: Ein StartOS-Container sieht die Host-LAN-Interfaces nicht, daher fand die automatische Subnetz-Erkennung nichts und Miner konnten nicht manuell hinzugefügt werden. Der Standardscan deckt jetzt 192.168.0.0/21 und 10.0.0.0/21 ab, gespeicherte Miner außerhalb dieser Bereiche werden weiter über ihr /24 gescannt, und der Miner-Umschalter hat ein manuelles Hinzufügen-Feld (einzelne IP oder CIDR). Enthält außerdem alles seit 0.6.4: schnellerer LAN-Scan, Bitaxe Pause/Fortsetzen auf AxeOS 2.14+, aktualisierte Abhängigkeiten. Nur Sideload; in keinem Registry veröffentlicht.',
    pl_PL:
      'WERSJA TESTOWA. Naprawia regresję wykrywania w StartOS: kontener StartOS nie widzi interfejsów LAN hosta, więc automatyczne wykrywanie podsieci niczego nie znajdowało i nie było możliwości ręcznego dodania koparki. Domyślne skanowanie obejmuje teraz 192.168.0.0/21 i 10.0.0.0/21, zapisane koparki spoza tych zakresów są nadal skanowane przez ich /24, a przełącznik koparek ma pole ręcznego dodawania (pojedynczy IP lub CIDR). Zawiera też wszystko od 0.6.4: szybsze skanowanie LAN, pauza/wznowienie Bitaxe na AxeOS 2.14+, odświeżone zależności. Tylko sideload; nie publikowane w żadnym rejestrze.',
    fr_FR:
      'VERSION TEST. Corrige la régression de découverte sous StartOS : un conteneur StartOS ne voit pas les interfaces LAN de l’hôte, donc l’auto-découverte de sous-réseaux ne trouvait rien et il était impossible d’ajouter un mineur manuellement. Le scan par défaut couvre désormais 192.168.0.0/21 et 10.0.0.0/21, les mineurs enregistrés hors de ces plages sont toujours scannés via leur /24, et le sélecteur de mineurs dispose d’un champ d’ajout manuel (IP unique ou CIDR). Inclut aussi tout depuis 0.6.4 : scan LAN accéléré, pause/reprise Bitaxe sur AxeOS 2.14+, dépendances actualisées. Sideload uniquement ; non publié dans aucun registre.',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
