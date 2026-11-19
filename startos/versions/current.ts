import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.6.5:0',
  releaseNotes: {
    en_US:
      'TEST BUILD for Bitaxe play/pause fix. Pause and resume now work on AxeOS 2.14 and newer (verified against v2.15.4): the proxy talks to the miner\'s own pause/resume endpoints instead of refusing. The button also shows the correct paused state. Sideload this package to test; it is not published to the registry.',
    es_ES:
      'COMPILACIÓN DE PRUEBA para el arreglo de pausa/reanudación en Bitaxe. Pausar y reanudar ya funcionan en AxeOS 2.14 y posteriores (verificado con v2.15.4). Instala este paquete manualmente para probar; no está publicado en el registro.',
    de_DE:
      'TEST-BUILD für die Bitaxe-Pause/Fortsetzen-Korrektur. Pause und Fortsetzen funktionieren jetzt auf AxeOS 2.14 und neuer (geprüft mit v2.15.4). Dieses Paket zum Testen sideloaden; es ist nicht im Registry veröffentlicht.',
    pl_PL:
      'WERSJA TESTOWA poprawki pauzy/wznowienia dla Bitaxe. Pauza i wznowienie działają teraz na AxeOS 2.14 i nowszych (zweryfikowano z v2.15.4). Zainstaluj ten pakiet ręcznie do testów; nie jest opublikowany w rejestrze.',
    fr_FR:
      'VERSION TEST pour le correctif pause/reprise sur Bitaxe. La pause et la reprise fonctionnent désormais sur AxeOS 2.14 et plus récent (vérifié avec v2.15.4). Installez ce paquet manuellement pour tester ; il n’est pas publié dans le registre.',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
