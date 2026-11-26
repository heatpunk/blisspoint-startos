import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.6.5:4',
  releaseNotes: {
    en_US:
      'TEST BUILD. Adds auth-aware stats polling: BraiinsOS firmware (e.g. an S9) hides all stats behind a login, so Blisspoint now sends your stored (encrypted) miner password with stats requests. If none is stored, the app asks for it in a dialog. Fixes empty readouts and dead pause/resume on BraiinsOS. Note: no power-target slider for BraiinsOS 22.05 (asic-rs reports no power-tuning capability). Also includes test.4 (live readouts without power control, poll timeout 15s) and test.3 (LAN scan of 192.168.0.0/21 + 10.0.0.0/21, manual IP/CIDR add, parallel scans). Sideload only; not published to any registry.',
    es_ES:
      'COMPILACI\u00d3N DE PRUEBA. A\u00f1ade sondeo de datos con autenticaci\u00f3n: el firmware BraiinsOS (p. ej. un S9) oculta todas las estad\u00edsticas tras un login, as\u00ed que Blisspoint env\u00eda ahora tu contrase\u00f1a almacenada (cifrada) con las peticiones. Si no hay ninguna guardada, la app la pide en un di\u00e1logo. Corrige las lecturas vac\u00edas y la pausa/reanudaci\u00f3n muerta en BraiinsOS. Nota: sin slider de potencia en BraiinsOS 22.05. Incluye test.4 y test.3. Solo sideload.',
    de_DE:
      'TEST-BUILD. Auth-fähiges Stats-Polling: BraiinsOS (z. B. S9) verbirgt alle Statistiken hinter einem Login. Blisspoint sendet jetzt das gespeicherte (verschlüsselte) Miner-Passwort mit den Stats-Abfragen mit. Ohne Passwort fragt die App in einem Dialog danach. Behebt leere Anzeigen und tote Pause/Fortsetzen bei BraiinsOS. Hinweis: kein Power-Slider bei BraiinsOS 22.05. Enthält test.4 und test.3. Nur Sideload.',
    pl_PL:
      'WERSJA TESTOWA. Odpytywanie statystyk z obs\u0142ug\u0105 logowania: BraiinsOS (np. S9) ukrywa wszystkie dane za logowaniem, wi\u0119c Blisspoint wysy\u0142a teraz zapisane (zaszyfrowane) has\u0142o minera wraz z zapytaniami. Bez zapisanego has\u0142a aplikacja poprosi o nie w oknie dialogowym. Naprawia puste odczyty i martw\u0105 pauz\u0119/wznowienie na BraiinsOS. Uwaga: brak suwaka mocy w BraiinsOS 22.05. Zawiera test.4 i test.3. Tylko sideload.',
    fr_FR:
      'VERSION TEST. Sondage des statistiques authentifié : BraiinsOS (ex. un S9) masque toutes les statistiques derrière une connexion ; Blisspoint envoie désormais votre mot de passe stocké (chiffré) avec les requêtes stats. Sans mot de passe enregistré, l’application le demande via une boîte de dialogue. Corrige les relevés vides et la pause/reprise inactive sur BraiinsOS. Note : pas de curseur de puissance sous BraiinsOS 22.05. Inclut test.4 et test.3. Sideload uniquement.',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
