import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.6.5:1',
  releaseNotes: {
    en_US:
      'TEST BUILD with everything since 0.6.4: miners are discovered across all LAN subnets (fix by b-rowan, PR #91), the LAN scan drops from minutes to seconds, Bitaxe pause/resume works on AxeOS 2.14 and newer, and all dependencies are refreshed. Sideload this package to test on hardware; it is not published to any registry.',
    es_ES:
      'COMPILACIÓN DE PRUEBA con todo desde 0.6.4: los mineros se descubren en todas las subredes LAN (arreglo de b-rowan, PR #91), el escaneo LAN pasa de minutos a segundos, la pausa/reanudación de Bitaxe funciona en AxeOS 2.14 y posteriores, y todas las dependencias están actualizadas. Instala este paquete manualmente para probar en hardware; no está publicado en ningún registro.',
    de_DE:
      'TEST-BUILD mit allem seit 0.6.4: Miner werden in allen LAN-Subnetzen gefunden (Fix von b-rowan, PR #91), der LAN-Scan schrumpft von Minuten auf Sekunden, Bitaxe-Pause/Fortsetzen funktioniert auf AxeOS 2.14 und neuer, und alle Abhängigkeiten sind aktualisiert. Dieses Paket zum Testen auf Hardware sideloaden; es ist in keinem Registry veröffentlicht.',
    pl_PL:
      'WERSJA TESTOWA ze wszystkim od 0.6.4: koparki są wykrywane we wszystkich podsieciach LAN (poprawka b-rowan, PR #91), skanowanie LAN skraca się z minut do sekund, pauza/wznowienie Bitaxe działa na AxeOS 2.14 i nowszych, a wszystkie zależności są odświeżone. Zainstaluj ten pakiet ręcznie do testów na sprzęcie; nie jest opublikowany w żadnym rejestrze.',
    fr_FR:
      'VERSION TEST avec tout depuis 0.6.4 : les mineurs sont découverts sur tous les sous-réseaux LAN (correctif de b-rowan, PR #91), le scan LAN passe de minutes à secondes, la pause/reprise Bitaxe fonctionne sur AxeOS 2.14 et plus récent, et toutes les dépendances sont actualisées. Installez ce paquet manuellement pour tester sur matériel ; il n’est publié dans aucun registre.',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
